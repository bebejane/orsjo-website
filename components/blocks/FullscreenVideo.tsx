'use client';

import s from './FullscreenVideo.module.scss';
import React from 'react';
import { VideoPlayer, ArrowLink } from '@/components';
import Link from 'next/link';
import { useRef } from 'react';

export type FullscreenVideoProps = { data: FullscreenVideoRecord };

export default function FullscreenVideo({
	data: { video, text, link, linkText },
}: FullscreenVideoProps) {
	const ref = useRef(null);

	return (
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
