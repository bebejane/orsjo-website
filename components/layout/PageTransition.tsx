import styles from './PageTransition.module.scss'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import usePreviousRoute from '/lib/hooks/usePreviousRoute';
import { useEffect, useState } from 'react';

const duration = .4;
const pageTransition = {
	initial: {
		height: '100vh',
		opacity:1,
	},
	enter: {
		opacity: [1,0],
		transition:{ duration:duration*1, ease:'easeOut'},
		transitionEnd :{
			opacity:1,
			height:'0vh'
		}
	},
	exit: {
		height: ['0vh', '100vh'],
		transition:{ duration:duration, ease:'easeOut'},
		transitionEnd :{
			height:'100vh',
			opacity:1
		}
	},
	exitInstant:{
		transition:{ duration:0 },
		transitionEnd:{
			height:'0vh'
		}
	},
	enterInstant: {
		transition:{ duration:0 },
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
	const prevRoute = usePreviousRoute()
	
	const handleAnimationEvent = async (type, variant) => {
		
		if(typeof variant !== 'string') return 

		const isComplete = ['home', 'homeIntro', 'enter'].includes(variant) && type === 'complete'
		const isExiting = variant.startsWith('exit') && type === 'start'
		const didExit = variant.startsWith('exit') && type === 'complete'
		
		if(didExit)
			document.body.scrollIntoView({behavior:'instant'})
	}

	useEffect(() => { 
		const handleRouteChange = (url, { shallow }) => {
			const isSameSection = document.location.pathname.split('/')[1] === url.split('/')[1]
			
			setColor(!isSameSection ? pathToColor(url) : undefined)
		};
		router.events.on("routeChangeStart", handleRouteChange);
		return () => router.events.off("routeChangeStart", handleRouteChange)
	}, []);
	
	const enterAnimation = !prevRoute  ? "enterInstant" : "enter"
	const exitAnimation = !color ? "exitInstant" : "exit" 

	//console.log(enterAnimation, exitAnimation, prevRoute)
	
	return (
    <motion.div
			className={styles.pageTransition} 
			initial="initial" 
      animate={enterAnimation}
      exit={exitAnimation}
      variants={pageTransition} 
      onAnimationComplete={ (variant) => handleAnimationEvent('complete', variant)}
      onAnimationStart={(variant) => handleAnimationEvent('start', variant)}
			style={{backgroundColor:color ? `rgba(var(${color}))` : undefined}}
    >	
    </motion.div>
	)
}