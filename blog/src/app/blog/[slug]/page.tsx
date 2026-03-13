import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { SITE_URL, SITE_NAME } from '@/lib/constants'
import { PostContent } from '@/components/PostContent'
import { JsonLd } from '@/components/JsonLd'
import { TableOfContents, MobileToc } from '@/components/TableOfContents'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified,
      authors: [post.author],
      images: post.image
        ? [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image ? `${SITE_URL}${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.lastModified,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  }

  const faqJsonLd =
    post.faqs && post.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null

  return (
    <>
      <JsonLd data={articleJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="lg:flex lg:gap-10">
          {/* TOC sidebar - desktop */}
          {post.headings.length > 0 && (
            <aside className="hidden w-64 shrink-0 lg:block">
              <TableOfContents headings={post.headings} />
            </aside>
          )}

          {/* Main content */}
          <article className="min-w-0 flex-1 max-w-3xl">
            {/* Mobile TOC */}
            {post.headings.length > 0 && (
              <MobileToc headings={post.headings} />
            )}

            <header className="mb-10 mt-6 lg:mt-0">
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
              <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-muted">{post.description}</p>
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
            </header>

            <PostContent html={post.content} />

            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-16">
                <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                  Veelgestelde vragen
                </h2>
                <div className="flex flex-col gap-4">
                  {post.faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="rounded border border-border bg-card p-4"
                    >
                      <summary className="cursor-pointer font-medium text-foreground">
                        {faq.question}
                      </summary>
                      <p className="mt-3 text-muted">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </div>
    </>
  )
}
