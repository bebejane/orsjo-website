'use client';

import styles from './Underlay.module.scss';
import cn from 'classnames';
import { useStore, useShallow } from '@/lib/store';

export default function Underlay(props) {
	const [showSiteSearch, showSubMenu] = useStore(
		useShallow((state) => [state.showSiteSearch, state.showSubMenu])
	);
	return (
		<div className={cn(styles.underlay, (showSiteSearch || showSubMenu) && styles.show)}></div>
	);
}
