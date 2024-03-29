import styles from './Text.module.scss'
import React from 'react'
import cn from 'classnames'
import Link from 'next/link';
import { StructuredText } from 'react-datocms';
import type { StructuredText as StructuredTextType } from 'datocms-structured-text-utils';
import { usePage } from '/lib/context/page';

export type TextBlockProps = {
  data: TextRecord & {
    text: StructuredTextType
  }
}

export default function Text({ data: { text } }: TextBlockProps) {

  const { menu } = usePage()

  return (
    <div className={cn(styles.text, menu === 'inverted' && styles.inverted)}>
      <StructuredText
        data={text}
        renderInlineRecord={({ record }) => {
          switch (record.__typename) {
            case 'ProductRecord':
              return <Link scroll={false} href={`/products/${record.slug}`} passHref={true}>{record.title as string}</Link>
            case 'ProjectRecord':
              return <Link scroll={false} href={`/professionals/projects/${record.slug}`} passHref={true}>{record.title as string}</Link>
            case 'DesignerRecord':
              return <Link scroll={false} href={`/designers/${record.slug}`} passHref={true}>{record.name as string}</Link>
            default:
              return null;
          }
        }}
        renderLinkToRecord={({ record, children, transformedMeta }) => {
          switch (record.__typename) {
            case 'ProductRecord':
              return <Link scroll={false} href={`/products/${record.slug}`} passHref={true}>{children}</Link>
            case 'ProjectRecord':
              return <Link scroll={false} href={`/professionals/projects/${record.slug}`} passHref={true}>{children}</Link>
            case 'DesignerRecord':
              return <Link scroll={false} href={`/designers/${record.slug}`} passHref={true}>{children}</Link>
            default:
              return null;
          }
        }}
        renderText={(text) => {
          // Replace nbsp
          return text?.replace(/\s/g, ' ');
        }}
      />

    </div>

  )
}