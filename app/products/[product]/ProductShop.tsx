'use client';

import s from './ProductShop.module.scss';
import cn from 'classnames';
import { Section } from '@/components';
import React, { useEffect, useRef, useState } from 'react';
import { ProductPageDataProps } from './page';
import { formatPrice } from '@/lib/shopify/utils';
import { useWindowSize } from 'usehooks-ts';
import useCart, { useShallow } from '@/lib/shopify/hooks/useCart';

type Props = {
	product: ProductPageDataProps['product'];
	shopify: ProductPageDataProps['shopify'];
};

export default function ProductShop({ product, shopify }: Props) {
	const [addToCart] = useCart(
		useShallow((state) => [state.addToCart, state.updating, state.error])
	);
	const [toggles, setToggles] = useState<{ [id: string]: { open: boolean; height: number } }>({});
	const [open, setOpen] = useState(false);
	const allVariants = product?.models.map(({ variants }) => variants).flat() ?? [];
	const [selected, setSelected] = useState<any | null>(allVariants?.[0] ?? null);
	const [variants, setVariants] = useState<any[]>([allVariants?.[0]]);
	const formRef = useRef<HTMLFormElement>(null);

	const selectedModel = product?.models.find(({ variants }) =>
		variants.find((v) => v.id === selected?.id)
	);
	const selectedShopifyVariant = shopify.product?.variants.edges.find(
		(v) => v.node.sku === selected?.articleNo
	)?.node;

	const [totalPrice, setTotalPrice] = useState<number>(0);
	const { width, height } = useWindowSize();

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

	useEffect(() => {
		updateTotalPrice();
	}, [selectedShopifyVariant]);

	function updateTotalPrice() {
		const variantsIds: string[] = [];
		const variantsElements = formRef.current?.querySelectorAll<HTMLInputElement>(
			'input[type=checkbox]:checked'
		);
		variantsElements?.forEach(
			(el) => el.dataset.variant && el.checked && variantsIds.push(el.dataset.variant)
		);
		const modelPrice = parseFloat(selectedShopifyVariant?.price.amount ?? '0');
		const addonsPrice = variantsIds.reduce((acc, id) => {
			const accessory = shopify.accessories.find((p) => p?.id === id);
			const lightsource = shopify.lightsources.find((p) => p?.id === id);
			const lightsourcePrice = parseFloat(accessory?.variants.edges[0].node.price.amount ?? '0');
			const accessoryPrice = parseFloat(lightsource?.variants.edges[0].node.price.amount ?? '0');
			return acc + accessoryPrice + lightsourcePrice;
		}, 0);

		setTotalPrice(addonsPrice + modelPrice);
	}

	function handleAddonChange(e: React.ChangeEvent<HTMLInputElement>) {
		e.stopPropagation();
		updateTotalPrice();
	}

	function handleSubmit(e: any) {
		e.preventDefault();
		if (!selectedShopifyVariant) return;

		console.log(selectedShopifyVariant);
		const variantsIds: string[] = [selectedShopifyVariant.id];
		const variantsElements = formRef.current?.querySelectorAll<HTMLInputElement>(
			'input[type=checkbox]:checked'
		);
		variantsElements?.forEach(
			(el) => el.dataset.variant && el.checked && variantsIds.push(el.dataset.variant)
		);

		console.log(variantsIds);

		addToCart(
			variantsIds.reverse().map((id) => ({ merchandiseId: id, quantity: 1 })),
			'SE'
		);
	}

	if (!product || !selected || !selectedModel) return null;

	return (
		<>
			<div className={s.shop}>
				<header>
					<h3>Shop</h3>
					<span className={s.price}>
						{totalPrice} {selectedShopifyVariant?.price.currencyCode}
					</span>
				</header>

				<div className={s.variant} onClick={() => setOpen(!open)}>
					<div className={s.row}>
						<div className={s.thumb}>
							{selected.image?.url && <img src={selected.image?.url} />}
						</div>
						<span className={s.name}>
							<strong>{selectedModel?.name?.name}</strong>
							{[selected.color?.name, selected.material?.name].filter(Boolean).join(', ')}
						</span>
						<span className={s.price}></span>
						<button className={s.dropdown}>❯</button>
					</div>
				</div>

				<div className={cn(s.models, open && s.open)}>
					{product.models.map(({ id, name, variants }) => (
						<div className={s.model} key={id}>
							<ul className={cn(s.variants)}>
								{variants.map((variant) => {
									const { id, articleNo, color, material, weight, feature, image, price } = variant;
									return (
										<li
											className={cn(selected?.id === id && s.selected)}
											key={id}
											id={`variant-${id}`}
											onClick={() => setSelected(variant)}
										>
											<div className={s.row}>
												<div className={s.thumb}>{image?.url && <img src={image?.url} />}</div>
												<span className={s.name}>
													<strong>{name?.name}</strong>
													&nbsp;
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

				<form
					className={cn(s.form, open && s.hide)}
					onSubmit={handleSubmit}
					ref={formRef}
					key={selectedShopifyVariant?.id}
				>
					<input type='hidden' name='model' value={selectedShopifyVariant?.id} />
					<ul className={cn(s.addons)}>
						{selectedModel.accessories?.map(({ id, product }) => {
							const shopifyAccessory = shopify.accessories.find((p) =>
								p?.tags.includes(product?.articleNo ?? '')
							);

							const price = shopifyAccessory?.variants.edges[0]?.node?.price;
							const variantId = shopifyAccessory?.variants.edges[0]?.node?.id;

							return (
								<li key={id}>
									<div className={s.row}>
										<div className={s.thumb}></div>
										<span className={s.name}>
											<strong>{product?.name}</strong>
										</span>
										<span className={s.price}>
											{price?.amount} {price?.currencyCode}
										</span>
										<div className={s.checkbox}>
											<input
												type='checkbox'
												name='addons'
												data-variant={variantId}
												onChange={handleAddonChange}
											/>
										</div>
									</div>
								</li>
							);
						})}

						{selectedModel.lightsources?.map(({ id, lightsource, amount, included, optional }) => {
							const shopifyLightsource = shopify.lightsources.find((p) =>
								p?.tags.includes(lightsource?.articleNo ?? '')
							);

							const price = shopifyLightsource?.variants.edges[0]?.node?.price;
							const variantId = shopifyLightsource?.variants.edges[0]?.node?.id;

							return (
								<li key={id}>
									<div className={s.row}>
										<div className={s.thumb}>
											{lightsource.image?.url && <img src={lightsource.image?.url} />}
										</div>
										<span className={s.name}>
											<strong>{lightsource?.name}</strong>
										</span>
										<span className={s.price}>
											{price?.amount} {price?.currencyCode}
										</span>
										<div className={s.checkbox}>
											<input
												key={`${id}-${lightsource.id}`}
												type='checkbox'
												name='addons'
												data-variant={variantId}
												onChange={handleAddonChange}
												disabled={included}
												checked={included || undefined}
											/>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
					<button type='submit'>Add to cart</button>
				</form>
			</div>
		</>
	);
}
