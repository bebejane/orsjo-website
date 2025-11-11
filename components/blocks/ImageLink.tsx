'use client';

import s from './ImageLink.module.scss';
import { Image } from 'react-datocms';
import { ArrowLink } from '@/components';
import { useRef } from 'react';
import Link from '@/components/nav/Link';

export type LayoutProps = { data: ImageLinkRecord };

export default function ImageLink({
	data: {
		firstImage,
		firstHeadline,
		firstLink,
		firstLinkText,
		secondImage,
		secondHeadline,
		secondLink,
		secondLinkText,
	},
}: LayoutProps) {
	const refOne = useRef(null);
	const refTwo = useRef(null);

	return (
		<section className={s.imageLink}>
			<Link href={firstLink ?? '/'} ref={refOne} passHref={true}>
				<figure>
					{firstImage?.responsiveImage && (
						<Image
							className={s.image}
							data={firstImage?.responsiveImage}
							layout='fill'
							objectFit='cover'
							intersectionMargin={`0px 0px 200% 0px`}
						/>
					)}
					<figcaption>
						<h1>{firstHeadline}</h1>
						{firstLinkText && (
							<ArrowLink hoverRef={refOne} inverted={true}>
								{firstLinkText}
							</ArrowLink>
						)}
					</figcaption>
				</figure>
			</Link>
			<Link href={secondLink ?? '/'} ref={refTwo} passHref={true}>
				<figure>
					{secondImage?.responsiveImage && (
						<Image className={s.image} data={secondImage?.responsiveImage} layout='fill' objectFit='cover' />
					)}

					<figcaption>
						<h1>{secondHeadline}</h1>
						{secondLinkText && (
							<ArrowLink hoverRef={refTwo} inverted={true}>
								{secondLinkText}
							</ArrowLink>
						)}
					</figcaption>
				</figure>
			</Link>
		</section>
	);
}
