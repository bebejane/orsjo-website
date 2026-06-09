'use client';

import s from './FullscreenVideo.module.scss';
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import { VideoPlayer, ArrowLink } from '@/components';
import Link from '@/components/nav/Link';
import { useRef } from 'react';

export type FullscreenVideoProps = { data: FullscreenVideoRecord };

export default function FullscreenVideo({
	data: { video, text, link, linkText },
}: FullscreenVideoProps) {
	const ref = useRef(null);

	return (
<<<<<<< HEAD
		<section className={s.fullScreenVideo} ref={ref}>
			{link ? (
				<Link href={link} passHref={true}>
					<VideoPlayer data={video} />
				</Link>
			) : (
				<VideoPlayer data={video} />
			)}
			<div className={s.textWrap}>
				<div className={s.text}>
					<div>
						<h1 className='start'>{text}</h1>
					</div>
					<div className={s.link}>
						{link && linkText && (
							<Link href={link} passHref={true}>
=======
		<section ref={ref} className={s.fullScreenVideo} data-datocms-content-link-group>
			<div data-datocms-content-link-source={JSON.stringify(video)}>
				{link ? (
					<Link href={link} passHref={true}>
						<VideoPlayer data={video} />
					</Link>
				) : (
					<VideoPlayer data={video} />
				)}
			</div>
			<div className={s.textWrap}>
				<div className={s.text}>
					<div>
						<h1 className='start' data-datocms-content-link-boundary>
							{text}
						</h1>
					</div>
					<div className={s.link}>
						{link && linkText && (
							<Link href={link} passHref={true} data-datocms-content-link-boundary>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
								<span className='medium white'>
									<ArrowLink hoverRef={ref} inverted={true}>
										{linkText}
									</ArrowLink>
								</span>
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
