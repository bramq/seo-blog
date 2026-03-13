import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import readingTime from 'reading-time'
import { extractToc, type TocItem } from './toc'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

export interface PostFrontmatter {
  title: string
  description: string
  date: string
  lastModified: string
  author: string
  category: string
  tags: string[]
  image: string
  imageAlt: string
  published: boolean
  faqs?: { question: string; answer: string }[]
}

export interface PostMeta extends PostFrontmatter {
  slug: string
  readingTime: string
}

export interface Post extends PostMeta {
  content: string
  headings: TocItem[]
}

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
}

export function getAllPosts(): PostMeta[] {
  const files = getMarkdownFiles()

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const filePath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContents)
      const frontmatter = data as PostFrontmatter

      if (!frontmatter.published) return null

      return {
        ...frontmatter,
        slug,
        readingTime: readingTime(content).text,
      } as PostMeta
    })
    .filter((post): post is PostMeta => post !== null)

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug)
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  return getAllPosts().filter(
    (p) =>
      p.category
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/&/g, 'en') === categorySlug
  )
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8')
  const { data, content: rawContent } = matter(fileContents)
  const frontmatter = data as PostFrontmatter

  if (!frontmatter.published) return null

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypePrettyCode, { theme: 'github-dark' })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(rawContent)

  const html = result.toString()

  return {
    ...frontmatter,
    slug,
    readingTime: readingTime(rawContent).text,
    content: html,
    headings: extractToc(html),
  }
}
