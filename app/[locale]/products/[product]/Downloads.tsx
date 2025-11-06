'use client';

import ps from './page.module.scss';
import s from './Downloads.module.scss';
import cn from 'classnames';
import { SectionListItem, Icon } from '@/components';
import { useState } from 'react';
import React from 'react';
import { ProductPageDataProps } from '../utils';

type Props = {
	files: ProductPageDataProps['files'];
};

export default function ProductIntro({ files }: Props) {
	const [list, setList] = useState({ specifications: false, downloads: false });

	return (
		<>
			<SectionListItem
				title={'Downloads'}
				className={cn(ps.listItemContent)}
				selected={list.downloads === true}
				idx={1}
				total={2}
				onToggle={() => setList({ ...list, downloads: !list.downloads })}
			>
				<ul className={s.downloads}>
					{files.map(({ href, type, label, download }, idx) => (
						<li key={idx}>
							<a href={href} target='_new'>
								<Icon type={type} label={label} disabled={!href} download={download} />
							</a>
						</li>
					))}
				</ul>
			</SectionListItem>
		</>
	);
}
