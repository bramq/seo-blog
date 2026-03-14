export const SITE_URL = process.env.SITE_URL || 'https://claudehandboek.com'
export const SITE_NAME = process.env.SITE_NAME || 'Claude Code Gids'
export const SITE_DESCRIPTION =
  process.env.SITE_DESCRIPTION ||
  'Tips, tricks en praktische toepassingen voor Claude Code - de AI coding assistent van Anthropic'

export const CATEGORIES = [
  { slug: 'aan-de-slag', name: 'Aan de slag', description: 'Eerste stappen met Claude Code' },
  { slug: 'tips-en-tricks', name: 'Tips & Tricks', description: 'Power user technieken' },
  { slug: 'workflows', name: 'Workflows', description: 'End-to-end development workflows' },
  { slug: 'mcp-servers', name: 'MCP Servers', description: 'Model Context Protocol integraties' },
  { slug: 'integraties', name: 'Integraties', description: 'IDE, CI/CD en tool integraties' },
  { slug: 'geavanceerd', name: 'Geavanceerd', description: 'Deep dives en geavanceerde patronen' },
] as const
