import { NewsCard } from "@/components/ui/news-card"
import { Category, Post } from "@/types"

interface CategoryTemplateProps {
  category: Category
  posts: Post[]
}

export function CategoryTemplate({ category, posts }: CategoryTemplateProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 border-b border-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">{category.name}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl font-serif">
          Stay informed with the latest developments, market trends, and policy updates in the {category.name.toLowerCase()} sector.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))
        ) : (
          <p className="col-span-full py-12 text-muted-foreground font-serif">
            No articles found in this category.
          </p>
        )}
      </div>
    </div>
  )
}
