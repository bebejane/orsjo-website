'use client';

import ps from './page.module.scss';
import s from './Specifications.module.scss';
import cn from 'classnames';
import { SectionListItem } from '@/components';
import { chunkArray } from '@/lib/utils';
import { useState, useEffect, useMemo } from 'react';
import Link from '@/components/nav/Link';
import React from 'react';
import { ProductPageDataProps } from '../utils';
import useStore, { useShallow } from '@/lib/store';

type Props = {
	product: ProductPageDataProps['product'];
	drawings: ProductPageDataProps['drawings'];
	specsCols: ProductPageDataProps['specsCols'];
};

export default function ProductIntro({ product, drawings, specsCols }: Props) {
	const singleModel = product?.models?.length === 1;
	const [list, setList] = useState({ specifications: false, downloads: false });
	const [setGallery, setGalleryId] = useStore(useShallow((state) => [state.setGallery, state.setGalleryId]));

	const handleGalleryClick = (type: string, id: string) => {
		setGallery({
			images: drawings,
			index: 0,
			padImagesWithTitle: true,
		});
		setGalleryId(id);
	};

	return (
		<SectionListItem
			title={'Specifications'}
			className={cn(ps.listItemContent, ps.top)}
			selected={list.specifications === true}
			onToggle={() => setList({ ...list, specifications: !list.specifications })}
			idx={0}
			total={2}
		>
			<ul className={s.specifications}>
				{specsCols.map(({ label, value, linebreaks, slug }, idx) => {
					const text = linebreaks
						? value.split('\n').map((el, idx) => (
								<React.Fragment key={idx}>
									{el}
									<br />
								</React.Fragment>
							))
						: value;
					return (
						<li key={idx} data-linebreaks={linebreaks}>
							<span>{label}</span>
							<span>{!slug ? text : <Link href={slug}>{text}</Link>}</span>
						</li>
					);
				})}
			</ul>
			<div className={cn(ps.section, ps.articles)}>
				<header>
					<span>Art no</span>
					<span>Model</span>
					<span>Art no</span>
					<span>Model</span>
				</header>
				<div className={cn(ps.content, !singleModel && ps.multi)}>
					{product?.models.map(({ id, name, variants, lightsources, accessories }, midx) => {
						const art: any[] = variants.map((v) => ({
							articleNo: v.articleNo,
							label: [v.color?.name, v.material?.name, v.feature?.name].filter((el) => el).join(', '),
						}));

						const access = accessories
							.filter((el) => el.accessory)
							.map((a) => ({
								articleNo: a?.accessory?.articleNo,
								label: a.accessory?.name,
							}));

						const light = lightsources
							.filter((el) => el.lightsource)
							.map((l) => ({
								articleNo: l.lightsource.articleNo,
								label: `${l.lightsource.name} (need ${l.amount})`,
								included: l.included,
								optional: l.optional,
								amount: l.amount,
							}));

						const cols = art.concat(access).concat(light);
						const rows = chunkArray(cols, 2);

						if (singleModel) {
							return rows.map((row: any[], idx: number) => (
								<ul key={`${id}-${idx}`}>
									<li>
										<span>{row[0].articleNo}</span>
										<span>{row[0].label}</span>
										<span>{row[1]?.articleNo}</span>
										<span>{row[1]?.label}</span>
									</li>
								</ul>
							));
						}

						return (
							<ul key={id}>
								<li className={s.subheader}>
									<span></span>
									<span>
										{product.title} {name?.name}
									</span>
								</li>
								{rows.map((row: any, idx) => (
									<React.Fragment key={`${id}-${idx}`}>
										<li key={`${id}-${idx}-c1`}>
											<span>{row[0].articleNo}</span>
											<span>{row[0].label}</span>
										</li>
										<li key={`${id}-${idx}-c2`}>
											<span>{row[1]?.articleNo}</span>
											<span>{row[1]?.label}</span>
										</li>
									</React.Fragment>
								))}
							</ul>
						);
					})}
				</div>
			</div>

			<div className={cn(ps.section, s.dimensions)}>
				<span>Dimensions</span>
				<button onClick={() => handleGalleryClick('drawings', drawings[0].id)} disabled={drawings.length === 0}>
					{drawings.length ? <>View drawing{drawings.length > 1 && 's'} + </> : <>No drawings available</>}
				</button>
			</div>
		</SectionListItem>
	);
}
