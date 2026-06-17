import { Post, Category, Author } from "@/types";

const WP_API_URL = "https://admin.renewableobserver.com/wp-json/wp/v2";

// Temporary fallback ad codes until WP is fully configured
const FALLBACK_ADS: Record<string, string> = {
  "header-leaderboard": `
    <a href="#" class="w-full max-w-[728px] lg:max-w-[970px] h-[90px] relative overflow-hidden group cursor-pointer items-center justify-center bg-black flex mx-auto block">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&q=80')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity"></div>
      <div class="relative z-10 text-white flex flex-col items-center text-center">
        <span class="text-xl font-bold tracking-widest uppercase">Mouser Electronics</span>
        <span class="text-xs text-blue-300 uppercase tracking-widest mt-1">Discover Next-Gen AI Sensors</span>
      </div>
      <div class="absolute top-1 left-2 text-[8px] uppercase tracking-widest text-white/50">Advertisement</div>
    </a>
  `,
  "sidebar-skyscraper-left": `
    <a href="#" class="absolute inset-0 block h-full w-full group cursor-pointer">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity bg-black"></div>
      <div class="relative z-10 text-white flex flex-col items-center text-center p-4 h-full bg-gradient-to-b from-black/80 via-black/40 to-black/90">
        <div class="text-[9px] uppercase tracking-widest text-white/50 mb-6">Advertisement</div>
        <div class="font-black text-sm mb-4 text-blue-400 uppercase tracking-widest">TrustedParts</div>
        <div class="text-white font-bold text-lg mb-6 leading-tight">Tasked with buying components?</div>
        <div class="mt-auto bg-blue-600 group-hover:bg-blue-500 text-white text-xs font-bold py-2 w-full uppercase tracking-wider transition-colors text-center">Search Now</div>
      </div>
    </a>
  `,
  "sidebar-skyscraper-right": `
    <a href="#" class="absolute inset-0 block h-full w-full group cursor-pointer">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity bg-black"></div>
      <div class="relative z-10 text-white flex flex-col items-center text-center p-4 h-full bg-gradient-to-b from-black/80 via-black/40 to-black/90">
        <div class="text-[9px] uppercase tracking-widest text-white/50 mb-6">Advertisement</div>
        <div class="font-black text-sm mb-4 text-blue-400 uppercase tracking-widest">TrustedParts</div>
        <div class="text-white font-bold text-lg mb-6 leading-tight">Tasked with designing circuits?</div>
        <div class="mt-auto bg-blue-600 group-hover:bg-blue-500 text-white text-xs font-bold py-2 w-full uppercase tracking-wider transition-colors text-center">Search Now</div>
      </div>
    </a>
  `,
  "article-sidebar-square": `
    <a href="#" class="w-full h-full relative overflow-hidden group cursor-pointer bg-black flex items-center justify-center block">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544256718-3b61027159cb?w=400&q=80')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity"></div>
      <div class="relative z-10 text-white flex flex-col items-center text-center p-4">
        <span class="text-xl font-black tracking-widest uppercase mb-2">CONQUER</span>
        <span class="text-sm font-bold">High-Voltage Circuit Protection</span>
      </div>
      <div class="absolute top-1 left-2 text-[8px] uppercase tracking-widest text-white/50">Advertisement</div>
    </a>
  `
};

export async function getAdSlot(slotId: string): Promise<string> {
  // Try to fetch from WordPress backend
  try {
    // Assuming you create a custom post type 'ads' where slug = slotId, and content is the ad code.
    const res = await fetch(WP_API_URL + "/ads?slug=" + slotId, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0 && data[0].content && data[0].content.rendered) {
        return data[0].content.rendered;
      }
    }
  } catch (error) {
    console.error("Failed to fetch ad slot " + slotId + " from WP backend:", error);
  }

  // Graceful Fallback if WP isn't returning ads yet
  return FALLBACK_ADS[slotId] || "";
}

const MOCK_CATEGORIES: Category[] = [
  { id: 1, name: "Solar News", slug: "solar", count: 120 },
  { id: 2, name: "Wind Energy", slug: "wind", count: 85 },
  { id: 3, name: "Green Hydrogen", slug: "hydrogen", count: 42 },
  { id: 4, name: "Energy Storage", slug: "storage", count: 67 },
  { id: 5, name: "Policy & Regulation", slug: "policy", count: 94 },
  { id: 6, name: "Market Intelligence", slug: "market", count: 156 },
];

const MOCK_AUTHORS: Author[] = [
  { id: 1, name: "Sarah Jenkins", slug: "sarah-jenkins", description: "Senior Editor covering Solar and Wind." },
  { id: 2, name: "David Chen", slug: "david-chen", description: "Market Analyst focusing on Energy Finance." },
];

const MOCK_POSTS: Post[] = Array.from({ length: 20 }).map((_, i) => ({
  id: 100 + i,
  date: new Date(Date.now() - i * 86400000).toISOString(),
  slug: `renewable-energy-news-${i}`,
  status: "publish",
  type: "post",
  title: {
    rendered: `Major Breakthrough in ${i % 2 === 0 ? "Solar" : "Wind"} Technology Announced Today`,
  },
  content: {
    rendered: `<p>This is the full article content. Renewable energy is seeing unprecedented growth globally...</p>`,
  },
  excerpt: {
    rendered: `<p>Discover how the latest innovations are changing the landscape of renewable energy investments.</p>`,
  },
  author: i % 2 === 0 ? 1 : 2,
  author_info: i % 2 === 0 ? MOCK_AUTHORS[0] : MOCK_AUTHORS[1],
  featured_media: 200 + i,
  featured_image_url: `https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80`, // Generic solar image
  categories: [i % MOCK_CATEGORIES.length + 1],
  category_info: [MOCK_CATEGORIES[i % MOCK_CATEGORIES.length]],
  tags: [],
}));

export async function getLiveStockData() {
  const symbols = [
    { symbol: "ADANIGREEN.NS", name: "Adani Green" },
    { symbol: "TATAPOWER.NS", name: "Tata Power" },
    { symbol: "SUZLON.NS", name: "Suzlon" },
    { symbol: "BORORENEW.NS", name: "Borosil" },
    { symbol: "INOXWIND.NS", name: "Inox Wind" },
    { symbol: "SWSOLAR.NS", name: "Sterling & Wilson" },
    { symbol: "KPIGREEN.NS", name: "KPI Green" },
    { symbol: "RELIANCE.NS", name: "Reliance New Energy" },
  ];

  try {
    const promises = symbols.map(async (s) => {
      try {
        const res = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${s.symbol}`, { 
          cache: 'no-store',
          headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        
        if (!res.ok) throw new Error("Failed to fetch");
        
        const json = await res.json();
        const meta = json.chart.result[0].meta;
        const price = meta.regularMarketPrice;
        const prevClose = meta.previousClose;
        
        const changeVal = ((price - prevClose) / prevClose) * 100;
        const changeStr = `${changeVal > 0 ? '+' : ''}${changeVal.toFixed(2)}%`;
        
        return {
          ...s,
          price: price.toFixed(2),
          change: changeStr,
          isPositive: changeVal >= 0
        };
      } catch (e) {
        return { ...s, price: "0.00", change: "0.00%", isPositive: true };
      }
    });

    return await Promise.all(promises);
  } catch (error) {
    console.error("Error fetching live stock data:", error);
    return [];
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${WP_API_URL}/categories?per_page=100`, { next: { revalidate: 60 } });
    if (res.ok) return await res.json();
  } catch (error) {
    console.warn("Failed to fetch categories from WP, falling back to mock");
  }
  return MOCK_CATEGORIES;
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const res = await fetch(`${WP_API_URL}/categories?slug=${slug}`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) return data[0];
    }
  } catch (error) {
    console.warn(`Failed to fetch category ${slug} from WP, falling back to mock`);
  }
  return MOCK_CATEGORIES.find((c) => c.slug === slug) || null;
}

function mapWPPostToPost(wpPost: any): Post {
  let featured_image_url = undefined;
  if (wpPost._embedded && wpPost._embedded['wp:featuredmedia'] && wpPost._embedded['wp:featuredmedia'].length > 0) {
    featured_image_url = wpPost._embedded['wp:featuredmedia'][0].source_url;
  }

  let category_info: Category[] = [];
  if (wpPost._embedded && wpPost._embedded['wp:term'] && wpPost._embedded['wp:term'].length > 0) {
    const terms = wpPost._embedded['wp:term'][0];
    if (Array.isArray(terms)) {
      category_info = terms.map((t: any) => ({
        id: t.id,
        name: t.name,
        slug: t.slug,
        count: t.count || 0
      }));
    }
  }

  let author_info: Author | undefined = undefined;
  if (wpPost._embedded && wpPost._embedded['author'] && wpPost._embedded['author'].length > 0) {
    const author = wpPost._embedded['author'][0];
    author_info = {
      id: author.id,
      name: author.name,
      slug: author.slug,
      description: author.description || ""
    };
  }

  return {
    ...wpPost,
    featured_image_url,
    category_info,
    author_info
  };
}

export async function getPosts(limit = 10, categoryId?: number): Promise<Post[]> {
  try {
    let url = `${WP_API_URL}/posts?per_page=${limit}&_embed`;
    if (categoryId) url += `&categories=${categoryId}`;
    
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      return data.map(mapWPPostToPost);
    }
  } catch (error) {
    console.warn("Failed to fetch posts from WP, falling back to mock");
  }
  
  let filtered = MOCK_POSTS;
  if (categoryId) {
    filtered = filtered.filter((p) => p.categories.includes(categoryId));
  }
  return filtered.slice(0, limit);
}

export async function getPostsByCategorySlug(slug: string, limit = 10): Promise<Post[]> {
  const category = await getCategoryBySlug(slug);
  if (!category) return [];
  return getPosts(limit, category.id);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) return mapWPPostToPost(data[0]);
    }
  } catch (error) {
    console.warn(`Failed to fetch post ${slug} from WP, falling back to mock`);
  }
  return MOCK_POSTS.find((p) => p.slug === slug) || null;
}
