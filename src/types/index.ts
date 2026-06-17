export interface Category {
  id: number;
  name: string;
  slug: string;
  count?: number;
  rank_math_title?: string;
  rank_math_description?: string;
}

export interface Author {
  id: number;
  name: string;
  avatar_urls?: {
    [key: string]: string;
  };
  description?: string;
  slug?: string;
}

export interface Post {
  id: number;
  date: string;
  modified?: string;
  slug: string;
  status: string;
  type: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  author_info?: Author;
  featured_media: number;
  featured_image_url?: string;
  categories: number[];
  category_info?: Category[];
  tags: number[];
  // Rank Math SEO Fields
  rank_math_title?: string;
  rank_math_description?: string;
  rank_math_robots?: string[];
}
