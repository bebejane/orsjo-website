import styles from './FullscreenVideo.module.scss'
import React from 'react'
import { useEffect, useState, useRef, useCallback } from 'react'
import { useWindowSize } from 'rooks'
import { useInView } from 'react-intersection-observer'
import { Video } from '/components'
import Link from 'next/link'

export type FullscreenVideoProps = { data: FullscreenVideoRecord }

export default function FullscreenVideo({ data: { video, text, link, linkText } }: FullscreenVideoProps) {

	const [inViewRef, inView] = useInView();
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [active, setActive] = useState(false)
	const [quality, setQuality] = useState<String | null>(null)
	const { innerWidth } = useWindowSize()

	const setRefs = useCallback((node) => {
		videoRef.current = node;
		inViewRef(node);
	}, [inViewRef]);

	useEffect(() => {
		if(process.env.NODE_ENV === 'development') return console.log('video disabled in dev')
		
		if (!videoRef.current) return
		if (active)
			videoRef.current.play().catch((err) => { })
		else
			videoRef.current.pause();
	}, [active, quality])

	useEffect(() => { setActive(inView) }, [inView])
	useEffect(() => { setQuality(innerWidth ? innerWidth < 480 ? 'low' : innerWidth < 767 ? 'med' : 'high' : null) }, [innerWidth])

	return (
		<section className={styles.fullScreenVideo}>
			<Link scroll={false} href={link}>
				<a>
					<Video data={video}/>
					<div className={styles.textWrap}>
						<div className={styles.text}>
							<div>{text}</div>
							<div className={styles.link}>
								<span className="medium white">
									{linkText} <img src="/images/arrow.svg" className={styles.arrow} />
								</span>
							</div>
						</div>
					</div>
				</a>
			</Link>
		</section>
	)
}