import "swiper/css";
import styles from './FeaturedStart.module.scss'
import cn from 'classnames'
import { FeaturedGallery } from '/components'
import { usePage } from "/lib/context/page";

export type ImageGalleryProps = { data: FeaturedRecord, fadeColor?: number[] }

export default function FeaturedStart({ data: { headline, items, id } }: ImageGalleryProps) {

	const { menu } = usePage()
	const isProducts = items[0].__typename === 'ProductRecord'

	return (
		<div className={cn(styles.featuredStart, styles[menu])}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h1 className={styles.headline}>
						{headline}
					</h1>
				</div>
				<div className={styles.gallery}>
					<FeaturedGallery
						id={id}
						arrowAlign="middle"
						inverted={true}
						theme="dark"
						fadeColor="--black"
						items={isProducts ? items as ProductRecord[] : items as ProjectRecord[]}
					/>
				</div>
			</div>
		</div>
	)
}