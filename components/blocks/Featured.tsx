
import styles from './Featured.module.scss'
import cn from 'classnames'
import { useRef, useState } from "react";
import { useLayout } from "/lib/context/layout";
import { FeatuedGallery } from '/components'
import { sectionId } from '/lib/utils';

export type FeaturedProps = { data: FeaturedRecord }

export default function Featured({ data: { headline, items: products, id } }: FeaturedProps) {
	
	const { layout, menu } = useLayout()
	
	return (
		<section className={cn(styles.featured, styles[menu])} {...sectionId(headline)}>
			<FeatuedGallery products={products} headline={headline} id={id}/>
		</section>
	)
}