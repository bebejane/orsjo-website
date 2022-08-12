import styles from './factory-visit.module.scss'
import {  GetFactoryVisitDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { useState } from 'react';

export type DownloadsProps = { factoryVisit: FactoryVisitRecord }

export default function FactoryVisit({ factoryVisit }: DownloadsProps) {
	
	console.log(factoryVisit)
	return (
		<section className={styles.downloads}>
			<h1>{factoryVisit.title}</h1>
			<Markdown>
				{factoryVisit.intro}
			</Markdown>
		</section>
	)
}

FactoryVisit.layout = { layout:'normal', color:"--lightgrey", menu:'normal'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetFactoryVisitDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});