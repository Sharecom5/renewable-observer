const https = require('https');

https.get('https://admin.renewableobserver.com/wp-json/wp/v2/posts?per_page=5&_embed', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const posts = JSON.parse(data);
    posts.forEach(post => {
      console.log('Post:', post.title.rendered);
      let img = null;
      if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0) {
        const media = post._embedded['wp:featuredmedia'][0];
        img = media.source_url || (media.media_details && media.media_details.sizes && media.media_details.sizes.full && media.media_details.sizes.full.source_url);
      }
      console.log('Image URL from API:', img);
      
      // Also simulate the fallback logic
      let fallback = null;
      const imgMatch = post.content.rendered.match(/<img[^>]+src="([^">]+)"/i);
      if (imgMatch && imgMatch[1]) {
        fallback = imgMatch[1];
      }
      console.log('Fallback Image URL:', fallback);
      console.log('---');
    });
  });
});
