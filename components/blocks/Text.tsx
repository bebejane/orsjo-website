import s from './Text.module.scss';
import React from 'react';
import cn from 'classnames';
import Link from '@/components/nav/Link';
import { StructuredText } from 'react-datocms';
import type { StructuredText as StructuredTextType } from 'datocms-structured-text-utils';
import { usePage } from '@/lib/context/page-provider';

export type TextBlockProps = {
	data: TextRecord & {
		text: StructuredTextType;
	};
};

export default function Text({ data: { text } }: TextBlockProps) {
	const { inverted } = usePage();

	return (
<<<<<<< HEAD
		<div className={cn(s.text, inverted && s.inverted)}>
=======
		<div className={cn(s.text, inverted && s.inverted)} data-datocms-content-link-group>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
			<StructuredText
				data={text}
				renderInlineRecord={({ record }) => {
					switch (record.__typename) {
						case 'ProductRecord':
							return (
								<Link href={`/products/${record.slug}`} passHref={true}>
									{record.title as string}
								</Link>
							);
						case 'ProjectRecord':
							return (
								<Link href={`/professionals/projects/${record.slug}`} passHref={true}>
									{record.title as string}
								</Link>
							);
						case 'DesignerRecord':
							return (
								<Link href={`/designers/${record.slug}`} passHref={true}>
									{record.name as string}
								</Link>
							);
						default:
							return null;
					}
				}}
				renderLinkToRecord={({ record, children, transformedMeta }) => {
					switch (record.__typename) {
						case 'ProductRecord':
							return (
								<Link href={`/products/${record.slug}`} passHref={true}>
									{children}
								</Link>
							);
						case 'ProjectRecord':
							return (
								<Link href={`/professionals/projects/${record.slug}`} passHref={true}>
									{children}
								</Link>
							);
						case 'DesignerRecord':
							return (
								<Link href={`/designers/${record.slug}`} passHref={true}>
									{children}
								</Link>
							);
						default:
							return null;
					}
				}}
<<<<<<< HEAD
				renderText={(text) => {
					// Replace nbsp
					return text?.replace(/\s/g, ' ');
				}}
=======
				// renderText={(text) => {
				// 	// Replace nbsp
				// 	//return text?.replace(/\s/g, ' ');
				// }}
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
			/>
		</div>
	);
}
