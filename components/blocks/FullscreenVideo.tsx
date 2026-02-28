'use client';

import s from './FullscreenVideo.module.scss';
import React from 'react';
import { VideoPlayer, ArrowLink } from '@/components';
import Link from '@/components/nav/Link';
import { useRef } from 'react';

export type FullscreenVideoProps = { data: FullscreenVideoRecord };

export default function FullscreenVideo({
	data: { video, text, link, linkText },
}: FullscreenVideoProps) {
	const ref = useRef(null);

	return (
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
