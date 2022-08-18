import styles from './ImageLink.module.scss'
import React from 'react'
import { Image } from 'react-datocms'
import Link from 'next/link'

type LayoutProps = { data: ImageLinkRecord }

export default function ImageLink({ data: { firstImage, firstHeadline, firstLink, firstLinkText, secondImage, secondHeadline, secondLink, secondLinkText, }, data }: LayoutProps) {

	return (
		<section className={styles.imageLink}>
			<Link scroll={false} href={firstLink}>
				<a>
					<figure>
						<Image className={styles.image} data={firstImage?.responsiveImage} layout="fill" objectFit="cover" />
						<figcaption>
							<h1>{firstHeadline}</h1>
							{firstLinkText}  <img src="/images/arrow.svg" className={styles.arrow} />
						</figcaption>
					</figure>
				</a>
			</Link>
			<Link scroll={false} href={secondLink}>
				<a>
					<figure>
						<Image className={styles.image} data={secondImage?.responsiveImage} layout="fill" objectFit="cover" />
						<figcaption>
							<h1>{secondHeadline}</h1>
							{secondLinkText}  <img src="/images/arrow.svg" className={styles.arrow} />
						</figcaption>
					</figure>
				</a>
			</Link>
		</section>
	)
}