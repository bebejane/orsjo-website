import styles from './Text.module.scss'
import React from 'react'
import cn from 'classnames'
import Link from 'next/link';
import { StructuredText } from 'react-datocms';
import type { StructuredText as StructuredTextType } from 'datocms-structured-text-utils';
import { usePage } from '/lib/context/page';

export type TextBlockProps = { data: TextRecord & {
  text:  StructuredTextType
}}

export default function Text({ data: { text }} : TextBlockProps) {

  const { menu } = usePage()
  
	return (
		<div className={cn(styles.text, menu === 'inverted' && styles.inverted)}>
			<StructuredText 
        data={text}
        renderInlineRecord={({ record }) => {
          switch (record.__typename) {
            case 'ProductRecord':
							return <Link scroll={false} href={`/products/${record.slug}`}>{record.title}</Link>
            case 'ProjectRecord':
              return <Link scroll={false} href={`/professionals/projects/${record.slug}`}>{record.title}</Link>
						case 'DesignerRecord':
							return <Link scroll={false} href={`/designers/${record.slug}`}>{record.name}</Link>
            default:
              return null;
          }
        }}
        renderLinkToRecord={({ record, children, transformedMeta }) => {
          switch (record.__typename) {
            case 'ProductRecord':
							return <Link scroll={false} href={`/products/${record.slug}`}><a>{children}</a></Link>
            case 'ProjectRecord':
              return <Link scroll={false} href={`/professionals/projects/${record.slug}`}><a>{children}</a></Link>
						case 'DesignerRecord':
							return <Link scroll={false} href={`/designers/${record.slug}`}><a>{children}</a></Link>
            default:
              return null;
          }
        }}
        renderText={(text)=>{
          // Replace nbsp
          return text?.replace(/\s/g, ' ');
        }}
			/>
			
		</div>

	)
}