import s from './Video.module.scss';
import React from 'react';
import { VideoPlayer } from '@/components';

export type VideoProps = { data: VideoRecord };

export default function Video({ data }: VideoProps) {
	return (
		<div className={s.video}>
			<VideoPlayer data={data.video} />
		</div>
	);
}
