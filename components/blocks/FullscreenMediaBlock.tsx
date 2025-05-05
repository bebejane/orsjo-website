'use client';

import styles from './FullscreenMediaBlock.module.scss';
import React, { useRef } from 'react';
import { Image } from 'react-datocms';
import Link from 'next/link';
import { VideoPlayer, ArrowLink } from '@/components';

export type LayoutProps = { data: FullscreenMediaBlockRecord };

export default function FullscreenMediaBlock({
	data: { media, headline, linkRecord, subHeadline, makeDarker, readMore },
	data,
}: LayoutProps) {
	const { __typename } = linkRecord;
	const path =
		__typename === 'DesignerRecord'
			? 'designer'
			: linkRecord.__typename === 'AboutRecord'
			? 'about'
			: 'products';
	const slug = `${path}/${linkRecord.__typename !== 'AboutRecord' ? linkRecord.slug : ''}`;
	const ref = useRef(null);

	return (
		<Link
			scroll={false}
			href={`/${slug}`}
			className={styles.fullScreenImage}
			ref={ref}
			passHref={true}
		>
			{makeDarker && <div className={styles.fadeTop}></div>}
			<div className={styles.fade}></div>
			{!media.mimeType.includes('video') ? (
				<Image
					className={styles.image}
					data={media?.responsiveImage}
					layout='fill'
					objectFit='cover'
				/>
			) : (
				<VideoPlayer data={media} />
			)}
			<div className={styles.wrapper}>
				<div className={styles.headline}>
					<span className='medium'>{subHeadline}</span>
					<h1 className='start'>{headline}</h1>
					<ArrowLink hoverRef={ref} inverted={true}>
						{readMore}
					</ArrowLink>
				</div>
			</div>
		</Link>
	);
}
