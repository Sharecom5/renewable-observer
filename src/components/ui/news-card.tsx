"use client"

import Link from "next/link"
import Image from "next/image"
import { Post } from "@/types"
import { formatDistanceToNow } from "date-fns"
import { motion } from "framer-motion"

interface NewsCardProps {
  post: Post;
  variant?: "default" | "featured" | "compact" | "textOnly" | "overlay";
}

export function NewsCard({ post, variant = "default" }: NewsCardProps) {
  const isOverlay = variant === "overlay";
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";
  const isTextOnly = variant === "textOnly";
  const category = post.category_info?.[0];
  const displayCategory = category?.name === "Uncategorized" || !category?.name ? "Daily Updates" : category.name;

  if (isOverlay) {
    return (
      <motion.div 
        whileHover={{ y: -4, scale: 0.99 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative overflow-hidden group w-full h-full rounded-2xl shadow-xl shadow-black/10 isolate cursor-pointer"
      >
        <Link href={`/${post.slug}`} className="block absolute inset-0 z-20" aria-label={post.title.rendered} />
        
        {post.featured_image_url ? (
          <Image 
            src={post.featured_image_url} 
            alt={post.title.rendered} 
            fill 
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={true}
            unoptimized={true}
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 z-0" 
          />
        ) : (
          <div className="absolute inset-0 bg-primary/20 z-0" />
        )}
        
        {/* Beautiful Glassmorphism Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col z-30 pointer-events-none">
          {category && (
            <p className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em] mb-3 drop-shadow-md">
              {displayCategory}
            </p>
          )}
          <h2 
            className="font-serif font-bold text-white text-xl sm:text-2xl md:text-3xl leading-[1.2] mb-3 drop-shadow-lg group-hover:text-white/90 transition-colors"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="flex items-center gap-3 text-xs text-white/80 uppercase tracking-wider font-semibold drop-shadow-md">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          </div>
        </div>
      </motion.div>
    )
  }

  if (isTextOnly) {
    return (
      <motion.div 
        whileHover={{ x: 4 }}
        className="border-b border-border/40 last:border-b-0 py-3 group"
      >
        <Link href={`/${post.slug}`} className="flex flex-col gap-1.5">
          {category && (
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{displayCategory}</p>
          )}
          <h3 
            className="font-semibold font-serif text-xs leading-snug group-hover:text-primary transition-colors text-foreground line-clamp-3"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">
            {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
          </p>
        </Link>
      </motion.div>
    )
  }

  if (isCompact) {
    return (
      <motion.div 
        whileHover={{ x: 4 }}
        className="border-b border-border/50 last:border-b-0 overflow-hidden bg-transparent group"
      >
        <Link href={`/${post.slug}`} className="flex gap-4 py-4 items-start">
          <div className="flex-1 space-y-1">
            {category && (
              <p className="text-xs font-bold text-primary uppercase tracking-widest">{displayCategory}</p>
            )}
            <h3 
              className="font-semibold font-serif text-sm leading-tight group-hover:text-primary transition-colors text-foreground"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
              {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
            </p>
          </div>
          {post.featured_image_url && (
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-sm">
              <Image 
                src={post.featured_image_url} 
                alt={post.title.rendered} 
                fill 
                sizes="96px"
                unoptimized={true}
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
            </div>
          )}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div 
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`overflow-hidden group flex flex-col bg-card/40 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/5 shadow-sm hover:shadow-md hover:shadow-primary/10 transition-all duration-300 ${isFeatured ? 'col-span-full mb-6' : ''}`}
    >
      {post.featured_image_url && (
        <div className={`relative w-full overflow-hidden mb-2 ${isFeatured ? 'h-40 md:h-48' : 'h-32 md:h-36'} m-1.5 rounded-lg border border-white/10`}>
          <Link href={`/${post.slug}`} className="block relative w-full h-full">
              <Image 
                src={post.featured_image_url} 
                alt={post.title.rendered} 
                fill 
                sizes={isFeatured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                priority={isFeatured}
                unoptimized={true}
                className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      )}
      
      <div className="flex flex-col flex-1 px-4 pb-4">
        {category && (
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{displayCategory}</p>
        )}
        <Link href={`/${post.slug}`}>
          <h2 
            className={`font-serif font-semibold group-hover:text-primary transition-colors text-foreground mb-1.5 ${isFeatured ? 'text-base md:text-lg leading-[1.3] tracking-tight' : 'text-sm leading-snug line-clamp-3'}`}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </Link>
        
        {isFeatured && (
          <div 
            className="text-foreground/80 mb-2 font-serif text-xs leading-relaxed line-clamp-2"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        )}
        <div className="flex items-center gap-2 text-[9px] text-muted-foreground uppercase tracking-wider font-semibold mt-auto pt-2 w-full">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
        </div>
      </div>
    </motion.div>
  )
}
