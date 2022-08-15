import styles from './FullscreenVideo.module.scss'
import React from 'react'
import { useEffect, useState, useRef, useCallback } from 'react'
import { useWindowSize } from 'rooks'
import { useInView } from 'react-intersection-observer'
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
		//return console.log('video disabled')
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
			<Link href={link}>
				<a>
					<video
						src={quality ? video.video[`mp4${quality}`] : undefined}
						ref={setRefs}
						playsInline
						muted
						loop={true}
						autoPlay={false}
						disablePictureInPicture={true}
						poster={video.video?.thumbnailUrl}
					/>
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