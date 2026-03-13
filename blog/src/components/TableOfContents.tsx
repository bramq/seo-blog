'use client'

import { useEffect, useState } from 'react'
import type { TocItem } from '@/lib/toc'

export function TableOfContents({ headings }: { headings: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -70% 0px' }
    )

    for (const heading of headings) {
      const el = document.getElementById(heading.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
        Inhoudsopgave
      </p>
      <ul className="space-y-1 border-l border-border">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block border-l-2 py-1 text-sm transition-colors ${
                heading.level === 3 ? 'pl-6' : 'pl-4'
              } ${
                activeId === heading.id
                  ? 'border-accent text-accent font-medium'
                  : 'border-transparent text-muted hover:text-foreground hover:border-border'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function MobileToc({ headings }: { headings: TocItem[] }) {
  if (headings.length === 0) return null

  return (
    <details className="rounded border border-border bg-card p-4 lg:hidden">
      <summary className="cursor-pointer text-sm font-semibold text-foreground">
        Inhoudsopgave
      </summary>
      <ul className="mt-3 space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block py-1 text-sm text-muted transition-colors hover:text-foreground ${
                heading.level === 3 ? 'pl-4' : ''
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </details>
  )
}
