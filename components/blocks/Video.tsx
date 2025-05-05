import styles from './Video.module.scss';
import React from 'react';
import { VideoPlayer } from '@/components';

export type VideoProps = { data: VideoRecord };

export default function Video({ data }: VideoProps) {
	return (
		<div className={styles.video}>
			<VideoPlayer data={data.video} />
		</div>
	);
}
