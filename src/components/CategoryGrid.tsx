import { ArticleCard } from './ArticleCard';

interface CategoryGridProps {
  title: string;
  posts: any[];
}

export function CategoryGrid({ title, posts }: CategoryGridProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mb-16">
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center">
        <span className="w-8 h-px bg-slate-300 mr-3"></span>
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
