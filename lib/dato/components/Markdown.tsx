import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'
import Link from "next/link";
import truncateMarkdown  from 'markdown-truncate'
import remarkBreaks from 'remark-breaks'
import type { UrlObject } from 'url';

type MarkdownProps = {
  children?: string, 
  truncate?: number, 
  className?:string, 
  sentances?:number
}

type AnchorProp = {children:[any], href: UrlObject }

const truncateSentances = (markdown, limit: number) => {
  if(!markdown) return markdown
  const sentances = markdown.split('.')
  return sentances.length >= limit  ? sentances.slice(0,limit).join(' ') +  '...' : markdown
}

const Markdown = ({ children , truncate, className, sentances } : MarkdownProps) => {
  if(!children) return null

  const content = !truncate ? sentances ? truncateSentances(children, sentances) :  children : truncateMarkdown(children, {limit:truncate, ellipsis:true})

  return (
    <ReactMarkdown 
      remarkPlugins={[gfm, remarkBreaks]} 
      className={className}
      // eslint-disable-next-line react/no-children-prop
      children={content}
      components={{
        // @ts-ignore
        a: ({ children, href } : AnchorProp) => 
          <Link 
            scroll={false} 
            href={href} 
            prefetch={false}
          >
            <a>{children[0]}</a>
          </Link>
      }}
    />
  )
}

export default Markdown;

