import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'
import { SITE_NAME, SITE_DESCRIPTION, CATEGORIES } from '@/lib/constants'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {SITE_NAME}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          {SITE_DESCRIPTION}
        </p>
        <p className="mt-2 max-w-2xl text-muted">
          Ontdek hoe je Claude Code optimaal inzet voor je development workflow,
          van eerste stappen tot geavanceerde integraties.
        </p>
      </section>

      {/* Recente artikelen */}
      <section className="mb-16">
        <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
          Laatste artikelen
        </h2>
        {posts.length === 0 ? (
          <p className="text-muted">
            Nog geen artikelen gepubliceerd. Binnenkort verschijnt hier de eerste content!
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 6).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* Categorieën */}
      <section>
        <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
          Categorieën
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categorie/${cat.slug}`}
              className="group rounded border border-border bg-card p-5 transition-colors hover:border-accent/50"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                {cat.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
