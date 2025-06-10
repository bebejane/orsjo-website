'use client';

import s from './FullscreenMediaBlock.module.scss';
import React, { useRef } from 'react';
import { Image } from 'react-datocms';
import Link from '@/components/nav/Link';
import { VideoPlayer, ArrowLink } from '@/components';

export type LayoutProps = { data: FullscreenMediaBlockRecord };

export default function FullscreenMediaBlock({ data: { media, headline, linkRecord, subHeadline, makeDarker, readMore } }: LayoutProps) {
	const { __typename } = linkRecord;
	const path = __typename === 'DesignerRecord' ? 'designer' : linkRecord.__typename === 'AboutRecord' ? 'about' : 'products';

	//@ts-ignore
	const slug = `${path}/${linkRecord.__typename !== 'AboutRecord' ? linkRecord.slug : ''}`;
	const ref = useRef(null);

	return (
		<Link
			href={`/${slug}`}
			className={s.fullScreenImage}
			ref={ref}
			passHref={true}
		>
			{makeDarker && <div className={s.fadeTop}></div>}
			<div className={s.fade}></div>
			{!media.mimeType.includes('video') && media?.responsiveImage ? (
				<Image
					className={s.image}
					data={media?.responsiveImage}
					objectFit='cover'
					intersectionMargin={`0px 0px 2000px 0px`}
				/>
			) : (
				<VideoPlayer data={media} />
			)}
			<div className={s.wrapper}>
				<div className={s.headline}>
					<span className='medium'>{subHeadline}</span>
					<h1 className='start'>{headline}</h1>
					<ArrowLink
						hoverRef={ref}
						inverted={true}
					>
						{readMore}
					</ArrowLink>
				</div>
			</div>
		</Link>
	);
}
