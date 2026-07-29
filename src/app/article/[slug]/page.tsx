import { format } from "date-fns";
import { getPostBySlug } from "@/lib/api";
import { AdSlot } from "@/components/AdSlot";
import Script from "next/script";
import Link from "next/link";
import { ChevronRight, Share2, MessageCircle, Send, Link2, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockPost = {
  id: 1,
  slug: 'mock-article',
  title: { rendered: 'Breakthrough in Solar Panel Efficiency Could Halve Costs by 2028' },
  content: { rendered: '<h2>Introduction</h2><p>Researchers have developed a new perovskite solar cell that achieves 30% efficiency, promising a massive disruption to the traditional silicon market.</p><h2>The Core Technology</h2><p>By layering the new material on top of standard silicon, the tandem cells absorb a much wider spectrum of light.</p><h2>Market Impact</h2><p>If commercialized at scale, the LCOE (Levelized Cost of Energy) for utility-scale solar could drop to unprecedented lows.</p>' },
  excerpt: { rendered: 'Researchers have developed a new perovskite solar cell that achieves 30% efficiency...' },
  date: new Date().toISOString(),
  _embedded: {
    'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200' }],
    'author': [{ name: 'Sarah Jenkins', description: 'Senior Energy Analyst covering utility-scale solar and storage.' }]
  }
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post = await getPostBySlug(slug).catch(() => null);

  if (!post || post.length === 0) {
    post = { ...mockPost, slug };
  }

  const title = post.title?.rendered || 'Untitled';
  const content = post.content?.rendered || '';
  const date = post.date ? format(new Date(post.date), 'MMMM d, yyyy') : '';
  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200';
  const authorName = post._embedded?.author?.[0]?.name || 'Renewable Observer Staff';
  const authorBio = post._embedded?.author?.[0]?.description || 'Expert analysis from our editorial team.';

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title.replace(/(<([^>]+)>)/gi, ''),
    "image": [imageUrl],
    "datePublished": post.date,
    "dateModified": post.modified || post.date,
    "author": [{ "@type": "Person", "name": authorName }],
    "publisher": {
      "@type": "Organization",
      "name": "Renewable Observer",
      "logo": { "@type": "ImageObject", "url": "https://example.com/logo.png" }
    }
  };

  return (
    <>
      <Script id="schema-newsarticle" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/category/solar-news" className="hover:text-primary transition-colors">Solar News</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground truncate max-w-[300px]">{title.replace(/(<([^>]+)>)/gi, '')}</span>
        </nav>

        <article className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
          <header className="p-6 md:p-12 lg:px-16 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-8 font-heading" dangerouslySetInnerHTML={{ __html: title }} />
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span className="font-semibold text-foreground">{authorName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <time>{date}</time>
              </div>
            </div>
          </header>
          
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt={title} className="w-full aspect-video object-cover" />
          
          <div className="flex flex-col lg:flex-row border-t border-border">
            <aside className="lg:w-1/4 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-border bg-muted/20">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Share Article</h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors"><MessageCircle className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors"><Send className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"><Share2 className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="rounded-full"><Link2 className="w-4 h-4" /></Button>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Table of Contents</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-primary font-medium hover:underline">Introduction</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">The Core Technology</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Market Impact</a></li>
                  </ul>
                </div>
              </div>
            </aside>
            
            <div className="lg:w-3/4 p-6 md:p-12 lg:px-16">
              <div 
                className="prose prose-slate dark:prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              
              <AdSlot format="banner" className="my-12" />
              
              {/* Author Bio */}
              <div className="mt-12 p-6 bg-muted rounded-xl flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary shrink-0">
                  <User className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading mb-2">About {authorName}</h3>
                  <p className="text-muted-foreground text-sm">{authorBio}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
