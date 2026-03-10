import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          {SITE_NAME}
        </h1>
        <p className="mt-4 text-lg text-muted">{SITE_DESCRIPTION}</p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-foreground">
          Laatste artikelen
        </h2>
        {posts.length === 0 ? (
          <p className="text-muted">Nog geen artikelen gepubliceerd.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
