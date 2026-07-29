const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://public-api.wordpress.com/wp/v2/sites/en.blog.wordpress.com';

export async function fetchAPI(endpoint: string, query: Record<string, string> = {}) {
  const queryString = new URLSearchParams(query).toString();
  const url = `${API_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;
  
  const res = await fetch(url, {
    next: { revalidate: 60 }, // Cache for 60 seconds
  });
  
  if (!res.ok) {
    console.error(`Failed to fetch API: ${url}`);
    return [];
  }
  
  return res.json();
}

export async function getLatestPosts(limit = 10, categoryId?: number) {
  const query: Record<string, string> = {
    per_page: limit.toString(),
    _embed: '1',
  };
  if (categoryId) {
    query.categories = categoryId.toString();
  }
  return fetchAPI('/posts', query);
}

export async function getPostBySlug(slug: string) {
  const posts = await fetchAPI('/posts', {
    slug,
    _embed: '1',
  });
  return posts[0];
}

export async function getCategories() {
  return fetchAPI('/categories');
}
