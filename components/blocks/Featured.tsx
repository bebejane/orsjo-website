import styles from './Featured.module.scss'
import cn from 'classnames'
import { useLayout } from "/lib/context/layout";
import { FeaturedGallery } from '/components'

export type FeaturedProps = { data: FeaturedRecord }

export default function Featured({ data: { headline, items: products, id } }: FeaturedProps) {
	
	const { menu } = useLayout()
	
	return (
		<div className={cn(styles.featured, styles[menu])}>
			<FeaturedGallery 
				items={products as ProductRecord[]} 
				headline={headline} 
				id={id} 
				theme="dark"
			/>
		</div>
	)
}