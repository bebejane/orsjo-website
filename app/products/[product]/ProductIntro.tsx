'use client';

import s from './ProductIntro.module.scss';
import cn from 'classnames';
import { Block, Section, TextReveal } from '@/components';
import { recordImages, dedupeImages, styleVariables } from '@/lib/utils';
import { useStore, useShallow } from '@/lib/store';
import { Image } from 'react-datocms';
import { useState, useEffect, useMemo } from 'react';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { Markdown } from 'next-dato-utils/components';
import React from 'react';
import { ProductPageDataProps } from './page';
import { useMediaQuery } from 'usehooks-ts';

type Props = {
	product: ProductPageDataProps['product'];
	drawings: ProductPageDataProps['drawings'];
};

export default function ProductIntro({ product, drawings }: Props) {
	const [imageLoaded, setImageLoaded] = useState(false);
	const [setGallery, setGalleryId] = useStore(
		useShallow((state) => [state.setGallery, state.setGalleryId])
	);
	const { scrolledPosition, viewportHeight } = useScrollInfo();
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`);
	const [list, setList] = useState({ specifications: false, downloads: false });
	const [pictureStyle, setPictureStyle] = useState({ paddingBottom: '4em' });

	const images = useMemo(() => {
		const imgs = product?.image
			? [product.image, ...(product?.productGallery || [])]
			: [...(product?.productGallery || [])];
		return dedupeImages([
			...imgs.map((block) => recordImages(block)).reduce((acc, curr) => acc.concat(curr), []),
		]);
	}, [product]);

	const handleGalleryClick = (type: string, id: string) => {
		setGallery({
			images: type === 'product' ? images : drawings,
			index: 0,
			padImagesWithTitle: true,
		});
		setGalleryId(id);
	};

	useEffect(() => {
		// Toggle specs/downloads on sidebar click
		const handleHashChange = (e: any) => {
			const {
				location: { hash, href },
			} = window;

			setList((l) => ({
				...l,
				specifications: href.endsWith('specifications') || l.specifications,
				downloads: href.endsWith('downloads') || l.downloads,
			}));
		};

		document.addEventListener('hashchange', handleHashChange);
		return () => document.removeEventListener('hashchange', handleHashChange);
	}, []);

	useEffect(() => {
		setGallery({ images, padImagesWithTitle: true });
	}, [images, setGallery]);

	useEffect(() => {
		const scale = Math.max(0, (viewportHeight - scrolledPosition * 4) / viewportHeight);
		setPictureStyle({ paddingBottom: `${4 * scale}em` });
	}, [viewportHeight, scrolledPosition, setPictureStyle, isMobile]);

	if (!product) return null;

	return (
		<>
			<Section name='Introduction' className={s.product} top={true}>
				<div className={s.intro} onClick={() => handleGalleryClick('product', product.image?.id)}>
					{product.image?.responsiveImage && (
						<Image
							data={product.image.responsiveImage}
							fadeInDuration={700}
							objectFit={'contain'}
							imgClassName={cn(s.image, imageLoaded && s.loaded)}
							imgStyle={!isMobile ? pictureStyle : undefined}
							placeholderStyle={!isMobile ? pictureStyle : undefined}
							onLoad={() => setImageLoaded(true)}
						/>
					)}
					<div className={cn(s.overlay, s.show)}>
						<div className={s.text}>
							<h1 className={s.title}>
								<TextReveal>{product.title}</TextReveal>
							</h1>
							<h1 className={s.designer}>
								<TextReveal block={true}>
									by {formatDesignerName(product.designer?.name as string)}
								</TextReveal>
							</h1>
							<h3 className={s.type}>
								<TextReveal>
									{product.categories.map(({ name }, idx) => name).join(isMobile ? '\n' : ', ')}
								</TextReveal>
							</h3>
						</div>
						{product.upcycled && (
							<div className={s.upcycled}>
								<img src='/images/upcycled-logo.svg' />
							</div>
						)}
					</div>
				</div>
			</Section>
			<Section className={s.description}>
				{product.description && <Markdown content={product.description} />}
			</Section>
			<Section>
				{product.productGallery.map((block, idx) => (
					<Block
						key={idx}
						data={block}
						onClick={(id: string) => handleGalleryClick('product', id)}
						first={idx === 0}
					/>
				))}
			</Section>
		</>
	);
}

const formatDesignerName = (name?: string) => {
	if (!name) return '';
	const words = name?.split(' ');
	const rows: any = [];

	for (let i = words.length - 1; i >= 0; i -= 2) {
		const row = [words[i]];
		if (i - 1 >= 0) row.push(words[i - 1]);
		rows.push(row);
	}
	return rows.reverse().map((el: string[], i) => (
		<React.Fragment key={i}>
			{el.reverse().join(' ')}
			{i < rows.length - 1 && <br />}
		</React.Fragment>
	));
};
