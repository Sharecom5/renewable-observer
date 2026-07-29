import Link from 'next/link';
import { format } from 'date-fns';

interface ArticleCardProps {
  post: any;
  featured?: boolean;
}

export function ArticleCard({ post, featured = false }: ArticleCardProps) {
  const title = post.title?.rendered || 'Untitled';
  const excerpt = post.excerpt?.rendered?.replace(/(<([^>]+)>)/gi, '') || '';
  const slug = post.slug;
  const date = post.date ? format(new Date(post.date), 'MMM d, yyyy') : '';
  
  // Try to get featured image from _embedded, fallback to a placeholder
  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                   'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800'; // Default green energy placeholder

  return (
    <article className={`flex flex-col gap-4 group ${featured ? 'md:flex-row md:gap-8 items-center' : ''}`}>
      <Link href={`/article/${slug}`} className={`block overflow-hidden rounded-xl bg-slate-100 relative ${featured ? 'w-full md:w-1/2 aspect-video' : 'w-full aspect-[4/3]'}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={imageUrl} 
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className={`flex flex-col ${featured ? 'w-full md:w-1/2' : ''}`}>
        {date && <time className="text-xs font-semibold tracking-wider text-emerald-600 uppercase mb-2">{date}</time>}
        <Link href={`/article/${slug}`} className="group-hover:text-emerald-700 transition-colors block">
          <h3 className={`font-bold text-slate-900 mb-3 ${featured ? 'text-3xl md:text-5xl leading-tight' : 'text-xl leading-snug'}`} dangerouslySetInnerHTML={{ __html: title }} />
        </Link>
        <p className={`text-slate-600 ${featured ? 'text-base md:text-lg mb-4' : 'text-sm line-clamp-3'}`} dangerouslySetInnerHTML={{ __html: excerpt }} />
        {featured && (
          <Link href={`/article/${slug}`} className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors mt-auto">
            Read full story <span className="ml-2">→</span>
          </Link>
        )}
      </div>
    </article>
  );
}
