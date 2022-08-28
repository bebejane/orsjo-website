import styles from './FullscreenVideo.module.scss'
import React from 'react'
import { useEffect, useState, useRef, useCallback } from 'react'
import { useWindowSize } from 'rooks'
import { useInView } from 'react-intersection-observer'
import { VideoPlayer } from '/components'
import Link from 'next/link'

export type FullscreenVideoProps = { data: FullscreenVideoRecord }

export default function FullscreenVideo({ data: { video, text, link, linkText } }: FullscreenVideoProps) {

	return (
		<section className={styles.fullScreenVideo}>
			<Link scroll={false} href={link}>
				<a>
					<VideoPlayer data={video}/>
				</a>
			</Link>
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
		</section>
	)
}