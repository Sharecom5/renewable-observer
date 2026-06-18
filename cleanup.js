const https = require('https');

const API_URL = 'https://admin.renewableobserver.com/wp-json/wp/v2/posts?per_page=100';
const AUTH = 'Basic ' + Buffer.from('abhishek2019cs034abesit@gmail.com:JDIi SPiE 0Nxi xSIV 86Bn aEyL').toString('base64');

async function cleanDuplicates() {
  console.log('Fetching all posts...');
  
  const options = {
    method: 'GET',
    headers: { 'Authorization': AUTH }
  };

  const req = https.request(API_URL, options, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', async () => {
      const posts = JSON.parse(data);
      console.log(`Found ${posts.length} posts total.`);
      
      const seenTitles = new Set();
      const duplicateIds = [];

      for (const post of posts) {
        const title = post.title.rendered;
        if (seenTitles.has(title)) {
          duplicateIds.push(post.id);
        } else {
          seenTitles.add(title);
        }
      }

      console.log(`Found ${duplicateIds.length} duplicate posts to delete.`);
      
      for (const id of duplicateIds) {
        await new Promise((resolve) => {
          const delOptions = {
            method: 'DELETE',
            headers: { 'Authorization': AUTH }
          };
          const delReq = https.request(`https://admin.renewableobserver.com/wp-json/wp/v2/posts/${id}?force=true`, delOptions, (delRes) => {
            console.log(`Deleted duplicate post ID: ${id} (Status: ${delRes.statusCode})`);
            resolve();
          });
          delReq.end();
        });
      }
      
      console.log('Cleanup complete!');
    });
  });

  req.on('error', (e) => console.error(e));
  req.end();
}

cleanDuplicates();
