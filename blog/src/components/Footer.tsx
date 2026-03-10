import { SITE_NAME } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-4xl px-4 py-8 text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} {SITE_NAME}. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  )
}
