'use client';

import s from './template.module.scss';
import { motion } from 'framer-motion';
//import { usePreviousRoute } from 'next-dato-utils/hooks';
import { useEffect, useState } from 'react';
import { useStore, useShallow } from '@/lib/store';
import { usePathname } from 'next/navigation';
import useDownloadTracker from '@lib/hooks/useDownloadTracker';

const duration = {
	enter: 0.5,
	exit: 0.5,
	instant: 0,
};

const pageTransition = {
	initial: {
		height: '100vh',
		opacity: 1,
	},
	enter: {
		opacity: [1, 0],
		transition: { duration: duration.enter, ease: 'easeIn' },
		transitionEnd: {
			opacity: 1,
			height: '0vh',
		},
	},
	exit: {
		height: ['0vh', '100vh'],
		transition: { duration: duration.exit, ease: 'easeOut' },
	},
	none: {
		transition: { duration: duration.instant },
		opacity: 1,
		height: '0vh',
	},
	exitInstant: {
		transition: { duration: duration.instant },
		opacity: [0, 1],
		transitionEnd: {
			height: '0vh',
			opacity: 1,
		},
	},
	enterInstant: {
		opacity: [0, 1],
		transition: { duration: duration.instant },
		transitionEnd: {
			height: '0vh',
			opacity: 0,
		},
	},
};

const pathToColor = (path) => {
	if (path.startsWith('/products')) return '--white';
	if (path.startsWith('/designers')) return '--green';
	if (path.startsWith('/professionals')) return '--gray';
	if (path.startsWith('/about')) return '--black';
	if (path.startsWith('/contact')) return '--beige';
	if (path.startsWith('/support')) return '--copper';
	if (path === '/') return '--black';
};

export default function Template({ children }: { children: React.ReactNode }) {
	useDownloadTracker();

	const pathname = usePathname();
	const [color, setColor] = useState(pathToColor(pathname));
	const prevRoute = null; //usePreviousRoute();

	const [setTransitioning] = useStore(useShallow((state) => [state.setTransitioning]));

	const handleAnimationEvent = async (type, variant) => {
		console.log(type, variant);
		if (typeof variant !== 'string') return;

		if (variant.startsWith('exit')) setTransitioning(type === 'start');
	};

	useEffect(() => {
		const isSameSection = document.location.pathname.split('/')[1] === pathname.split('/')[1];
		setColor(!isSameSection ? pathToColor(pathname) : undefined);
	}, [pathname, setColor]);

	const enterAnimation = 'enter'; //!prevRoute ? 'none' : !color ? 'enterInstant' : 'enter';
	const exitAnimation = 'exit'; //!color ? 'exitInstant' : 'exit';

	return (
		<motion.div
			className={s.pageTransition}
			variants={pageTransition}
			initial='initial'
			animate={enterAnimation}
			exit={exitAnimation}
			onAnimationComplete={(variant) => handleAnimationEvent('complete', variant)}
			onAnimationStart={(variant) => handleAnimationEvent('start', variant)}
			style={{ backgroundColor: color ? `var(${color})` : undefined }}
		>
			{children}
		</motion.div>
	);
}
