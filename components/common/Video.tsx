import styles from './Video.module.scss'
import cn from 'classnames'
import { useEffect, useState, useRef, useCallback } from 'react'
import { useWindowSize } from 'rooks'
import { useInView } from 'react-intersection-observer'

export type VideoProps = { data: FileField, className?: string }

export default function Video({ data, className }: VideoProps) {

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
    <video
      className={cn(styles.video, className)}
      src={quality ? data.video[`mp4${quality}`] : undefined}
      ref={setRefs}
      playsInline
      muted
      loop={true}
      autoPlay={false}
      disablePictureInPicture={true}
      poster={data.video?.thumbnailUrl}
    />
	)
}