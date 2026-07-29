import { ArticleCard } from './ArticleCard';

export function FeaturedStory({ post }: { post: any }) {
  if (!post) return null;

  return (
    <section className="mb-16">
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center">
        <span className="w-8 h-px bg-slate-300 mr-3"></span>
        Featured Story
      </h2>
      <ArticleCard post={post} featured={true} />
    </section>
  );
}
