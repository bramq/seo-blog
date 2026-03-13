import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

export function Header() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="font-serif text-xl font-bold text-foreground transition-colors hover:text-accent"
        >
          {SITE_NAME}
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/categories"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Categorieën
          </Link>
          <Link
            href="/over"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Over
          </Link>
        </div>
      </nav>
    </header>
  )
}
