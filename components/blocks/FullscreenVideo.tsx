import styles from './FullscreenVideo.module.scss'
import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Image } from 'react-datocms'
import Link from 'next/link'

type LayoutProps = { data: FullscreenVideoRecord }

export default function FullscreenVideo({ data: { video, text, link, linkText, } }: LayoutProps) {
	
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [active, setActive] = useState(false)

	const play = ()=> {
		videoRef.current.currentTime = 0;
		videoRef.current.play().catch((err) => {})
	}
	
	useEffect(() => {
		if (!videoRef.current ) return
		if (active){
			videoRef.current.play().catch((err) => {})
		} else {
			videoRef.current.pause();
		}
	}, [active])

	return (
		<section className={styles.fullScreenVideo}>
			<Link href={link}>
				<a>
					<video
						playsInline
						muted
						loop={true}
						src={video.url}
						ref={videoRef}
						autoPlay={true}
						disablePictureInPicture={true}
						poster={video.video?.thumbnailUrl}
					/>
					<div className={styles.textWrap}>
						<div className={styles.text}>
							<div>{text}</div>
							<div className={styles.link}>
								{linkText} <img src="/images/arrow.svg" className={styles.arrow}/>
							</div>
						</div>
					</div>
				</a>
			</Link>
		</section>
	)
}