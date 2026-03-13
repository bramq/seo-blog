import type { Metadata } from 'next'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Over - ${SITE_NAME}`,
  description:
    'Claude Code Gids is dé Nederlandstalige bron voor tips, tricks en praktische toepassingen van Claude Code.',
}

export default function OverPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground">
        Over Claude Code Gids
      </h1>

      <div className="mt-8 space-y-6 text-muted">
        <p>
          <strong className="text-foreground">Claude Code Gids</strong> is dé
          Nederlandstalige bron voor alles over Claude Code — de AI-powered
          coding assistent van Anthropic. We helpen developers om het maximale
          uit deze tool te halen.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-foreground">
          Wat is Claude Code?
        </h2>
        <p>
          Claude Code is een command-line tool van Anthropic waarmee je AI
          direct in je development workflow integreert. Het kan code schrijven,
          refactoren, debuggen, tests maken, en complete features implementeren
          — allemaal vanuit je terminal of IDE.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-foreground">
          Voor wie is deze site?
        </h2>
        <p>
          Of je nu net begint met Claude Code of al een ervaren gebruiker bent,
          hier vind je praktische handleidingen, workflow tips, en diepgaande
          artikelen over geavanceerde features zoals MCP Servers, custom
          integraties en meer.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-foreground">
          Wat vind je hier?
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Stap-voor-stap handleidingen om te beginnen met Claude Code</li>
          <li>Tips & tricks voor een snellere development workflow</li>
          <li>Geavanceerde workflows en automatiseringen</li>
          <li>MCP Server configuraties en integraties</li>
          <li>IDE integraties en tool-koppelingen</li>
          <li>Best practices en design patterns</li>
        </ul>
      </div>
    </div>
  )
}
