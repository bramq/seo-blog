import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostsByCategory } from '@/lib/posts'
import { CATEGORIES, SITE_NAME } from '@/lib/constants'
import { PostCard } from '@/components/PostCard'

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const category = CATEGORIES.find((c) => c.slug === params.slug)
  if (!category) return {}

  return {
    title: `${category.name} - ${SITE_NAME}`,
    description: category.description,
  }
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string }
}) {
  const category = CATEGORIES.find((c) => c.slug === params.slug)
  if (!category) notFound()

  const posts = getPostsByCategory(params.slug)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground">
          {category.name}
        </h1>
        <p className="mt-3 text-lg text-muted">{category.description}</p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted">
          Nog geen artikelen in deze categorie. Binnenkort meer!
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
