import { getCategoryBySlug, getPostBySlug, getPosts } from "@/lib/api"
import { notFound } from "next/navigation"
import { CategoryTemplate } from "@/components/templates/category-template"
import { ArticleTemplate } from "@/components/templates/article-template"

interface DynamicRouteProps {
 params: Promise<{ slug: string }>
}

function decodeHtml(html: string) {
  return html
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8217;/g, '’')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&amp;/g, '&')
    .replace(/&#038;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function truncate(str: string, max: number) {
  if (str.length <= max) return str;
  return str.slice(0, max - 3) + '...';
}

export async function generateMetadata({ params }: DynamicRouteProps) {
 const resolvedParams = await params;
 const slug = resolvedParams.slug;

  // 1. Check if it's a category
  const category = await getCategoryBySlug(slug)
  if (category) {
    const rawTitle = category.rank_math_title || `${category.name} | Renewable Observer`;
    const rawDesc = category.rank_math_description || `Latest news and updates about ${category.name} in the renewable energy sector.`;
    return {
      title: truncate(rawTitle, 60),
      description: truncate(rawDesc, 160),
    }
  }

  // 2. Check if it's a post
  const post = await getPostBySlug(slug)
  if (post) {
    const robots = post.rank_math_robots ? post.rank_math_robots.join(', ') : 'index, follow';
    const rawTitle = decodeHtml(post.rank_math_title || post.title.rendered);
    const rawDesc = decodeHtml(post.rank_math_description || post.excerpt.rendered.replace(/<[^>]+>/g, ""));
    
    const finalTitle = truncate(rawTitle, 60);
    const finalDesc = truncate(rawDesc, 160);

    return {
      title: finalTitle,
      description: finalDesc,
      robots: robots,
      openGraph: {
        title: finalTitle,
        description: finalDesc,
        images: post.featured_image_url ? [post.featured_image_url] : [],
      }
    }
  }

 return {}
}

export default async function DynamicSlugPage({ params }: DynamicRouteProps) {
 const resolvedParams = await params;
 const slug = resolvedParams.slug;

 // 1. Try to load as a Category
 const category = await getCategoryBySlug(slug)
 if (category) {
 const posts = await getPosts(20, category.id)
 return <CategoryTemplate category={category} posts={posts} />
 }

 // 2. Try to load as an Article
 const post = await getPostBySlug(slug)
 if (post) {
 const relatedPosts = await getPosts(4, post.categories[0])
 return <ArticleTemplate post={post} relatedPosts={relatedPosts} />
 }

 // 3. If neither, return 404
 notFound()
}
