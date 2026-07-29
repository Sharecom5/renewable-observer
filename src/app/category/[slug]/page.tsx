import { CategoryGrid } from "@/components/CategoryGrid";
import { getLatestPosts } from "@/lib/api";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Mock data fallback
  let posts = await getLatestPosts(10).catch(() => []);
  if (!posts || posts.length === 0) {
    posts = [
      {
        id: 1,
        slug: 'sample-post-1',
        title: { rendered: `Sample Post for ${title}` },
        excerpt: { rendered: 'This is a sample post for the category...' },
      }
    ];
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <header className="mb-12 border-b pb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-600">Latest news and updates in {title}.</p>
      </header>
      
      <CategoryGrid title={`All in ${title}`} posts={posts} />
    </div>
  );
}
