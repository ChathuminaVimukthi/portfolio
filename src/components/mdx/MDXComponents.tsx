import type { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'

function slugify(str: string) {
  return str.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
}

export const mdxComponents = {
  h2: ({ children }: ComponentPropsWithoutRef<'h2'>) => (
    <h2 id={slugify(children as string)} className="text-2xl font-semibold text-primary mt-8 mb-4 scroll-mt-20">
      {children}
    </h2>
  ),
  h3: ({ children }: ComponentPropsWithoutRef<'h3'>) => (
    <h3 id={slugify(children as string)} className="text-xl font-medium text-primary mt-6 mb-3 scroll-mt-20">
      {children}
    </h3>
  ),
  a: ({ href, children }: ComponentPropsWithoutRef<'a'>) => {
    const isExternal = href?.startsWith('http')
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:opacity-80">
          {children}
        </a>
      )
    }
    return (
      <Link href={href ?? '/'} className="text-accent underline underline-offset-2 hover:opacity-80">
        {children}
      </Link>
    )
  },
  blockquote: ({ children }: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className="border-l-4 border-accent pl-4 italic text-secondary my-6">
      {children}
    </blockquote>
  ),
  strong: ({ children }: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="text-primary font-semibold">{children}</strong>
  ),
  p: ({ children }: ComponentPropsWithoutRef<'p'>) => (
    <p className="text-primary leading-7 mb-4">{children}</p>
  ),
  ul: ({ children }: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc list-outside pl-6 mb-4 space-y-1 text-primary">{children}</ul>
  ),
  ol: ({ children }: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal list-outside pl-6 mb-4 space-y-1 text-primary">{children}</ol>
  ),
  hr: () => <hr className="border-border my-8" />,
  img: ({ src, alt }: ComponentPropsWithoutRef<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt ?? ''} className="rounded-lg max-w-full h-auto my-6" />
  ),
}
