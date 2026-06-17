import { getCategoryBySlug, getPostBySlug, getPosts } from "@/lib/api"
import { notFound } from "next/navigation"
import { CategoryTemplate } from "@/components/templates/category-template"
import { ArticleTemplate } from "@/components/templates/article-template"

interface DynamicRouteProps {
 params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: DynamicRouteProps) {
 const resolvedParams = await params;
 const slug = resolvedParams.slug;

  // 1. Check if it's a category
  const category = await getCategoryBySlug(slug)
  if (category) {
    return {
      title: category.rank_math_title || `${category.name} | Renewable Observer`,
      description: category.rank_math_description || `Latest news and updates about ${category.name} in the renewable energy sector.`,
    }
  }

  // 2. Check if it's a post
  const post = await getPostBySlug(slug)
  if (post) {
    const robots = post.rank_math_robots ? post.rank_math_robots.join(', ') : 'index, follow';
    return {
      title: post.rank_math_title || post.title.rendered,
      description: post.rank_math_description || post.excerpt.rendered.replace(/<[^>]+>/g, ""),
      robots: robots,
      openGraph: {
        title: post.rank_math_title || post.title.rendered,
        description: post.rank_math_description || post.excerpt.rendered.replace(/<[^>]+>/g, ""),
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
