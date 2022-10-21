import styles from './FullscreenVideo.module.scss'
import React from 'react'
import { VideoPlayer, ArrowLink } from '/components'
import Link from 'next/link'
import { useRef } from 'react'

export type FullscreenVideoProps = { data: FullscreenVideoRecord }

export default function FullscreenVideo({ data: { video, text, link, linkText } }: FullscreenVideoProps) {

	const ref = useRef()

	return (
		<section className={styles.fullScreenVideo} ref={ref}>
			<Link scroll={false} href={link}>
				<a>
					<VideoPlayer data={video} />
				</a>
			</Link>
			<div className={styles.textWrap}>
				<div className={styles.text}>
					<div><h1 className="start">{text}</h1></div>
					<div className={styles.link}>
						<Link scroll={false} href={link}>
							<a>
								<span className="medium white">
									<ArrowLink hoverRef={ref} inverted={true}>{linkText}</ArrowLink>
								</span>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}