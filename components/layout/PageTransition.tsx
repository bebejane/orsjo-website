import styles from './PageTransition.module.scss'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import usePreviousRoute from '/lib/hooks/usePreviousRoute';
import { useEffect, useState } from 'react';
import { useStore } from '/lib/store';

const duration = {
	enter: 0.5,
	exit: 0.3,
	instant: 0
}

const pageTransition = {
	initial: {
		height: '100vh',
		opacity: 1
	},
	enter: {
		opacity: [1,0],
		transition:{ duration:duration.enter, ease:'easeIn'},
		transitionEnd :{
			opacity:1,
			height:'0vh'
		}
	},
	exit: {
		height: ['0vh', '100vh'],
		transition:{ duration:duration.exit, ease:'easeOut'},
		transitionEnd :{
			
		}
	},
	none:{
		transition:{ duration:duration.instant},
		opacity:1,
		height:'0vh'
	},
	exitInstant:{
		transition:{ duration:duration.instant },
		opacity:[0,1],
		transitionEnd:{
			height:'0vh',
			opacity:1
		}
	},
	enterInstant: {
		opacity:[0,1],
		transition:{ duration:duration.instant},
		transitionEnd:{
			height:'0vh',
			opacity:0
		}
	},
}

const pathToColor = (path) => {
	if(path.startsWith('/products')) return '--white'
	if(path.startsWith('/designers')) return '--warm-gray'
	if(path.startsWith('/professionals')) return '--gray'
	if(path.startsWith('/about')) return '--black'
	if(path.startsWith('/contact')) return '--red'
	if(path.startsWith('/support')) return '--copper'
	if(path === '/') return '--black'
}

export default function PageTransition(){
	
	const router = useRouter()
	const [color, setColor] = useState(pathToColor(router.asPath))
	const prevRoute = usePreviousRoute();

	const [transitioning, setTransitioning] = useStore((state)=> [state.transitioning, state.setTransitioning])
	
	const handleAnimationEvent = async (type, variant) => {
		
		if(typeof variant !== 'string') return 
		
		const isComplete = ['enter'].includes(variant) && type === 'complete'
		const isExiting = variant.startsWith('exit') && type === 'start'
		const didExit = variant.startsWith('exit') && type === 'complete'
		
		if(didExit) 
			setTimeout(()=>window.scrollTo({ top: 0, behavior: 'instant' }), 100);
		if(variant === 'exit') 
			setTransitioning(type === 'start')
	}

	useEffect(() => { 
		const handleRouteChange = (url, { shallow }) => {
			const isSameSection = document.location.pathname.split('/')[1] === url.split('/')[1]
			setColor(!isSameSection ? pathToColor(url) : undefined)
		};
		router.events.on("routeChangeStart", handleRouteChange);
		return () => router.events.off("routeChangeStart", handleRouteChange)
	}, []);
	
	const enterAnimation = !prevRoute ? "none" : !color ? "enterInstant" : "enter"
	const exitAnimation = !color ? "exitInstant" : "exit" 
	//console.log(enterAnimation, exitAnimation, prevRoute)
	
	return (
    <motion.div
			className={styles.pageTransition} 
			variants={pageTransition} 
			initial="initial" 
      animate={enterAnimation}
      exit={exitAnimation}
      onAnimationComplete={ (variant) => handleAnimationEvent('complete', variant)}
      onAnimationStart={(variant) => handleAnimationEvent('start', variant)}
			style={{backgroundColor:color ? `rgba(var(${color}))` : undefined}}
    >
    </motion.div>
	)
}