import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50">
      <Link href={`/blog/${post.slug}`}>
        <div className="flex items-center gap-3 text-sm text-muted">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('nl-NL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
          <span>&middot;</span>
          <span>{post.category}</span>
        </div>
        <h2 className="mt-3 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
          {post.title}
        </h2>
        <p className="mt-2 text-muted line-clamp-2">{post.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  )
}
