import styles from './ImageLink.module.scss'
import { Image } from 'react-datocms'
import Link from 'next/link'
import { ArrowLink } from '/components'
import { useRef } from 'react'

export type LayoutProps = { data: ImageLinkRecord }

export default function ImageLink({ data: { firstImage, firstHeadline, firstLink, firstLinkText, secondImage, secondHeadline, secondLink, secondLinkText, }, data }: LayoutProps) {

	const refOne = useRef()
	const refTwo = useRef()


	return (
		<section className={styles.imageLink}>
			<Link scroll={false} href={firstLink}>
				<a ref={refOne}>
					<figure>
						<Image className={styles.image} data={firstImage?.responsiveImage} layout="fill" objectFit="cover" />
						<figcaption>
							<h1>{firstHeadline}</h1>
							<ArrowLink title={firstLinkText} hoverRef={refOne}/>
						</figcaption>
					</figure>
				</a>
			</Link>
			<Link scroll={false} href={secondLink}>
				<a ref={refTwo}>
					<figure>
						<Image className={styles.image} data={secondImage?.responsiveImage} layout="fill" objectFit="cover" />
						<figcaption>
							<h1>{secondHeadline}</h1>
							<ArrowLink title={secondLinkText} hoverRef={refTwo}/>
						</figcaption>
					</figure>
				</a>
			</Link>
		</section>
	)
}