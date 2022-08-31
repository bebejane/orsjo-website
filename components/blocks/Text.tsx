import styles from './Text.module.scss'
import React from 'react'
import { StructuredText, renderNodeRule, renderMarkRule } from 'react-datocms';
import Link from 'next/link';
export type TextBlockProps = { data: TextRecord }

export default function Text({ data: { text }} : TextBlockProps) {
	
	return (
		<div className={styles.text}>
			<StructuredText 
				data={text}
        renderInlineRecord={({ record }) => {
          switch (record.__typename) {
            case 'ProductRecord':
							return <Link scroll={false} href={`/products/${record.slug}`}>{record.title}</Link>
							break;
            case 'ProjectRecord':
              return <Link scroll={false} href={`/professionals/projects/${record.slug}`}>{record.title}</Link>
              break;
						case 'DesignerRecord':
							return <Link scroll={false} href={`/designers/${record.slug}`}>{record.name}</Link>
							break;
            default:
              return null;
          }
        }}
        renderLinkToRecord={({ record, children, transformedMeta }) => {
          switch (record.__typename) {
            case 'ProductRecord':
							return <Link scroll={false} href={`/products/${record.slug}`}><a>{children}</a></Link>
							break;
            case 'ProjectRecord':
              return <Link scroll={false} href={`/professionals/projects/${record.slug}`}><a>{children}</a></Link>
              break;
						case 'DesignerRecord':
							return <Link scroll={false} href={`/designers/${record.slug}`}><a>{children}</a></Link>
							break;
            default:
              return null;
          }
        }}
        renderText={(text)=>{
          // Replace nbsp
          return text?.replace(/\s/g, ' ');
        }}
			>
			</StructuredText>
		</div>

	)
}