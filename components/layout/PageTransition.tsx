import styles from './PageTransition.module.scss'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { usePreviousRoute } from 'dato-nextjs-utils/hooks'
import { useEffect, useState } from 'react';
import { useStore, shallow } from '/lib/store';

const duration = {
	enter: 0.5,
	exit: 0.5,
	instant: 0
}

const pageTransition = {
	initial: {
		height: '100vh',
		opacity: 1
	},
	enter: {
		opacity: [1, 0],
		transition: { duration: duration.enter, ease: 'easeIn' },
		transitionEnd: {
			opacity: 1,
			height: '0vh'
		}
	},
	exit: {
		height: ['0vh', '100vh'],
		transition: { duration: duration.exit, ease: 'easeOut' },

	},
	none: {
		transition: { duration: duration.instant },
		opacity: 1,
		height: '0vh'
	},
	exitInstant: {
		transition: { duration: duration.instant },
		opacity: [0, 1],
		transitionEnd: {
			height: '0vh',
			opacity: 1
		}
	},
	enterInstant: {
		opacity: [0, 1],
		transition: { duration: duration.instant },
		transitionEnd: {
			height: '0vh',
			opacity: 0
		}
	},
}

const pathToColor = (path) => {
	if (path.startsWith('/products')) return '--white'
	if (path.startsWith('/designers')) return '--green'
	if (path.startsWith('/professionals')) return '--gray'
	if (path.startsWith('/about')) return '--black'
	if (path.startsWith('/contact')) return '--beige'
	if (path.startsWith('/support')) return '--copper'
	if (path === '/') return '--black'
}

export default function PageTransition() {

	const router = useRouter()
	const [color, setColor] = useState(pathToColor(router.asPath))
	const prevRoute = usePreviousRoute();

	const [setTransitioning] = useStore((state) => [state.setTransitioning], shallow)

	const handleAnimationEvent = async (type, variant) => {

		if (typeof variant !== 'string') return

		if (variant.startsWith('exit'))
			setTransitioning(type === 'start')
	}

	useEffect(() => {
		const handleRouteChange = (url, { shallow }) => {
			const isSameSection = document.location.pathname.split('/')[1] === url.split('/')[1]
			setColor(!isSameSection ? pathToColor(url) : undefined)
		};
		router.events.on("routeChangeStart", handleRouteChange);
		return () => router.events.off("routeChangeStart", handleRouteChange)
	}, [router.events, setColor]);


	const enterAnimation = !prevRoute ? "none" : !color ? "enterInstant" : "enter"
	const exitAnimation = !color ? "exitInstant" : "exit"

	return (
		<motion.div
			className={styles.pageTransition}
			variants={pageTransition}
			initial="initial"
			animate={enterAnimation}
			exit={exitAnimation}
			onAnimationComplete={(variant) => handleAnimationEvent('complete', variant)}
			onAnimationStart={(variant) => handleAnimationEvent('start', variant)}
			//@ts-ignore
			style={{ backgroundColor: color ? `rgba(var(${color}))` : undefined }}
		>
		</motion.div>
	)
}