'use client';

import s from './Thumbnail.module.scss';
import cn from 'classnames';
import { Image } from 'react-datocms';
import Link from '@/components/nav/Link';
import { useState } from 'react';
import { format } from 'path';
import { formatPrice } from '@/lib/shopify/utils';

export type ThumbnailProps = {
	slug?: string;
	image: FileField;
	imageHover?: FileField;
	inverted?: boolean;
	title?: string;
	subtitle?: string;
	price?: string;
	className?: string;
	lazyload?: boolean;
	objectFit?: 'contain' | 'cover';
	markAsNew?: boolean;
	upcycled?: boolean;
	onClick?: () => void;
	theme?: 'dark' | 'light' | 'mid';
	type?: 'product' | 'project' | 'designer' | 'news' | 'staff' | 'material';
	showMarkAsNew?: boolean;
};

export default function Thumbnail({
	image,
	imageHover,
	slug,
	inverted,
	title,
	subtitle,
	price,
	markAsNew = false,
	upcycled = false,
	className,
	onClick,
	objectFit = 'contain',
	theme = 'light',
	type = 'product',
	showMarkAsNew = true,
	lazyload = true,
}: ThumbnailProps) {
	const [hovering, setHovering] = useState(false);
	const isTouch = typeof window !== 'undefined' && matchMedia('(hover: none), (pointer: coarse)').matches;
	const handleMouseOver = ({ type }) => !isTouch && setHovering(type === 'mouseenter');

	const content = (
		<>
			<figure>
				{image.responsiveImage && (
					<Image
						data={image.responsiveImage}
						className={s.image}
						layout={'fill'}
						fadeInDuration={100}
						intersectionMargin={`0px 0px 2000px 0px`}
						objectFit={objectFit as any}
					/>
				)}
				{imageHover && !isTouch && imageHover.responsiveImage && (
					<div className={cn(s.imageHover, hovering && s.show)}>
						<Image
							data={imageHover.responsiveImage}
							className={s.image}
							layout={'fill'}
							intersectionMargin={`0px 0px 2000px 0px`}
							objectFit={'cover'}
						/>
					</div>
				)}
				{upcycled && (
					<div className={s.upcycled}>
						<img src='/images/upcycled.svg' />
					</div>
				)}
			</figure>
			<figcaption>
				<span className={s.title}>
					{title} <span className={s.subtitle}>{subtitle}</span>
				</span>
				{price !== undefined && <span className={s.price}>{price}</span>}
			</figcaption>
		</>
	);

	return (
		<div
			className={cn(s.thumbnail, className, inverted && s.inverted, s[theme], s[type])}
			onMouseEnter={handleMouseOver}
			onMouseLeave={handleMouseOver}
			onClick={onClick}
		>
			{slug ? (
				<Link href={slug} className={s.wrap}>
					{content}
				</Link>
			) : (
				<div className={s.wrap}>{content}</div>
			)}

			{markAsNew && showMarkAsNew && (
				<div className={cn(s.markAsNew)}>
					<span>New</span>
				</div>
			)}
		</div>
	);
}

export type BaseThumbnailProps = {
	inverted?: boolean;
	className?: string;
	theme: 'dark' | 'light' | 'mid';
	showMarkAsNew?: boolean;
	lazyload?: boolean;
};

export type ProductThumbnailProps = BaseThumbnailProps & {
	product: ProductRecord;
	shopifyVariant?: ProductVariant | undefined;
};

export function ProductThumbnail({
	product,
	shopifyVariant,
	inverted,
	theme = 'dark',
	className,
	showMarkAsNew,
	lazyload,
}: ProductThumbnailProps) {
	return (
		<Thumbnail
			slug={`/products/${product.slug}`}
			image={product.image}
			imageHover={product.environmentImage}
			title={product.title}
			subtitle={product.designer?.name ? product.designer.name : undefined}
			price={formatPrice(shopifyVariant?.price as MoneyV2)}
			className={className}
			inverted={inverted}
			theme={theme}
			markAsNew={product.markAsNew}
			upcycled={product.upcycled}
			type='product'
			lazyload={lazyload}
			showMarkAsNew={showMarkAsNew}
		/>
	);
}

export type ProjectThumbnailProps = BaseThumbnailProps & {
	project: ProjectRecord;
};

export function ProjectThumbnail({
	project,
	inverted,
	theme = 'dark',
	className,
	showMarkAsNew,
	lazyload,
}: ProjectThumbnailProps) {
	return (
		<Thumbnail
			slug={`/professionals/projects/${project.slug}`}
			image={project.image}
			imageHover={project.secondaryImage as FileField}
			title={project.title}
			subtitle={project.location}
			inverted={inverted}
			className={className}
			theme={theme}
			type='project'
			lazyload={lazyload}
			showMarkAsNew={showMarkAsNew}
		/>
	);
}

export type DesignerThumbnailProps = BaseThumbnailProps & {
	designer: DesignerRecord;
};
export function DesignerThumbnail({
	designer,
	inverted,
	theme = 'dark',
	className,
	showMarkAsNew,
	lazyload,
}: DesignerThumbnailProps) {
	return (
		<Thumbnail
			slug={`/designers/${designer.slug}`}
			image={designer.image}
			title={designer.name as string}
			inverted={inverted}
			className={className}
			theme={theme}
			type='designer'
			lazyload={lazyload}
			showMarkAsNew={showMarkAsNew}
		/>
	);
}

export type NewsThumbnailProps = BaseThumbnailProps & {
	news: NewsRecord;
};
export function NewsThumbnail({
	news,
	inverted,
	theme = 'dark',
	className,
	showMarkAsNew,
	lazyload,
}: NewsThumbnailProps) {
	return (
		<Thumbnail
			slug={`/about/news/${news.slug}`}
			image={news.image as FileField}
			title={news.title}
			inverted={inverted}
			className={className}
			theme={theme}
			type='news'
			lazyload={lazyload}
			showMarkAsNew={showMarkAsNew}
		/>
	);
}

export type StaffThumbnailProps = BaseThumbnailProps & {
	staff: StaffRecord;
};
export function StaffThumbnail({
	staff,
	inverted,
	theme = 'dark',
	className,
	showMarkAsNew,
	lazyload,
}: StaffThumbnailProps) {
	return (
		<Thumbnail
			slug={`/contact#${staff.id}`}
			image={staff.image}
			title={staff.name}
			inverted={inverted}
			className={className}
			theme={theme}
			type='staff'
			lazyload={lazyload}
			showMarkAsNew={showMarkAsNew}
		/>
	);
}
