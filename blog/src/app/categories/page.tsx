import type { Metadata } from 'next'
import Link from 'next/link'
import { CATEGORIES, SITE_NAME } from '@/lib/constants'
import { getPostsByCategory } from '@/lib/posts'

export const metadata: Metadata = {
  title: `Categorieën - ${SITE_NAME}`,
  description: 'Bekijk alle categorieën van Claude Code Gids',
}

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground">
          Categorieën
        </h1>
        <p className="mt-3 text-lg text-muted">
          Verken alle onderwerpen over Claude Code
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => {
          const postCount = getPostsByCategory(cat.slug).length
          return (
            <Link
              key={cat.slug}
              href={`/categorie/${cat.slug}`}
              className="group rounded border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <h2 className="font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                {cat.name}
              </h2>
              <p className="mt-2 text-sm text-muted">{cat.description}</p>
              <p className="mt-4 text-xs text-muted">
                {postCount} {postCount === 1 ? 'artikel' : 'artikelen'}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
