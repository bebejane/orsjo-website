'use client';

import s from './ProductShop.module.scss';
import cn from 'classnames';
import { Section } from '@/components';
import React, { useEffect, useState } from 'react';
import { ProductPageDataProps } from './page';
import AddToCartButton from '@/components/shopify/AddToCartButton';
import { formatPrice } from '@/lib/shopify/utils';
import { useWindowSize } from 'usehooks-ts';

type Props = {
	product: ProductPageDataProps['product'];
	shopifyProduct: ProductPageDataProps['shopifyProduct'];
};

export default function ProductShop({ product, shopifyProduct }: Props) {
	const [toggles, setToggles] = useState<{ [id: string]: { open: boolean; height: number } }>({});
	const [open, setOpen] = useState(false);
	const allVariants = product?.models.map(({ variants }) => variants).flat() ?? [];
	const [selected, setSelected] = useState<any | null>(allVariants?.[0] ?? null);
	const selectedModel = product?.models.find(({ variants }) =>
		variants.find((v) => v.id === selected?.id)
	);
	const selectedShopifyVariant = shopifyProduct?.variants.edges.find(
		(v) => v.node.sku === selected?.articleNo
	)?.node;
	const { width, height } = useWindowSize();

	function toggle(id: string) {
		setToggles((state) => ({
			...state,
			[id]: { ...state[id], open: !state[id]?.open ? true : false },
		}));
	}

	useEffect(() => {
		const t = {};
		allVariants.forEach(
			(item) =>
				(t[item.id] = {
					...toggles[item.id],
					height: document.getElementById(`variant-${item.id}`)?.scrollHeight ?? 0,
				})
		);
		setToggles(t);
	}, [width, height]);

	useEffect(() => {
		setOpen(false);
	}, [selected]);

	function handleCheckbox(e: any) {
		e.stopPropagation();
	}

	if (!product || !selected || !selectedModel) return null;

	return (
		<>
			<div className={s.shop}>
				<header>
					<h3>Shop</h3>
					<span className={s.price}>
						{selectedShopifyVariant?.price.amount} {selectedShopifyVariant?.price.currencyCode}
					</span>
				</header>
				<div className={s.selected} onClick={() => setOpen(!open)}>
					<div className={s.row}>
						<img src={selected.image?.url ?? product.image?.url} />
						<span className={s.name}>{selectedModel?.name?.name}</span>&nbsp;
						<span className={s.colors}>
							{[selected.color?.name, selected.material?.name].filter(Boolean).join(', ')}
						</span>
						<button className={s.dropdown}>❯</button>
					</div>
				</div>

				<div className={cn(s.models, open && s.open)}>
					{product.models.map(({ id, name, variants, accessories, lightsources }) => (
						<div className={s.model} key={id}>
							<ul className={cn(s.variants)}>
								{variants.map((variant) => {
									const { id, articleNo, color, material, weight, feature, image, price } = variant;
									const shopifyVariant = shopifyProduct?.variants.edges.find(
										(v) => v.node.sku === articleNo
									)?.node;
									const haveAddons = accessories.length > 0 || lightsources.length > 0;

									return (
										<li
											className={cn(selected === id && s.selected)}
											key={id}
											id={`variant-${id}`}
											onClick={() => setSelected(variant)}
										>
											<div className={s.row}>
												<img src={image?.url ?? product.image?.url} />
												<span className={s.name}>{name?.name}</span>&nbsp;
												<span className={s.colors}>
													{[color?.name, material?.name].filter(Boolean).join(', ')}
												</span>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					))}
				</div>
				<form className={cn(s.form, open && s.hide)}>
					<ul className={cn(s.addons)}>
						{selectedModel.accessories?.map(({ id, product }) => {
							return (
								<li key={id}>
									<span>{product?.name}</span>
									<span className={s.articleNo}>{product?.articleNo}</span>
								</li>
							);
						})}
						{selectedModel.lightsources?.map(({ id, lightsource, amount, included, optional }) => {
							return (
								<li key={id}>
									<div className={s.row}>
										<img src={lightsource.image?.url ?? product.image?.url} />
										<span className={s.name}>{lightsource?.name}</span>
										<span className={s.colors}></span>
										<input type='checkbox' onClick={handleCheckbox} />
									</div>
								</li>
							);
						})}
					</ul>
					<AddToCartButton
						merchandiseId={selectedShopifyVariant?.id}
						quantity={1}
						label={'Add to cart'}
					/>
				</form>
			</div>
		</>
	);
}
