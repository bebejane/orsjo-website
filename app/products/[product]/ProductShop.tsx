'use client';

import s from './ProductShop.module.scss';
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { ProductPageDataProps } from './page';
import { formatPrice } from '@/lib/shopify/utils';
import { useWindowSize } from 'usehooks-ts';
import useCart, { useShallow } from '@/lib/shopify/hooks/useCart';
import useStore from '@/lib/store';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import AnimateHeight from 'react-animate-height';

type Props = {
	product: ProductPageDataProps['product'];
	shopify: ProductPageDataProps['shopify'];
	variantId?: string;
};

export default function ProductShop({ product, shopify, variantId }: Props) {
	const allVariants = product?.models.map(({ variants }) => variants).flat() ?? [];
	const [addToCart, updating, error] = useCart(
		useShallow((state) => [state.addToCart, state.updating, state.error])
	);
	const [setShowCart] = useStore(useShallow((state) => [state.setShowCart]));
	const [hide, setHide] = useState<boolean>(false);
	const [wasHidden, setWasHidden] = useState<boolean>(false);
	const [open, setOpen] = useState(false);
	const [expanded, setExpanded] = useState(false);
	const [showAddons, setShowAddons] = useState(false);
	const [showAccessoriesButton, setShowAccessoriesButton] = useState(false);
	const [selected, setSelected] = useState<any | null>(allVariants?.[0] ?? null);
	const [addons, setAddons] = useState<any[]>([]);
	const [totalPrice, setTotalPrice] = useState<MoneyV2>({
		amount: 0,
		currencyCode: 'SEK' as CurrencyCode,
	});
	const { width, height } = useWindowSize();
	const { scrolledPosition, viewportHeight, documentHeight } = useScrollInfo();
	const ref = useRef<HTMLDivElement>(null);
	const formRef = useRef<HTMLFormElement>(null);
	const selectedModel = product?.models.find(({ variants }) =>
		variants.find((v) => v.id === selected?.id)
	);
	const selectedShopifyVariant = shopify.product?.variants.edges.find(
		(v) => v.node.sku && v.node.sku === selected?.articleNo.trim()
	)?.node;

	useEffect(() => {
		if (!variantId) return;
		const shopifyVariant = shopify.product?.variants.edges.find(
			(v) => v.node.id.split('/').pop() === variantId
		)?.node;
		if (shopifyVariant) {
			setSelected(allVariants.find((v) => v.articleNo?.trim() === shopifyVariant?.sku) ?? null);
			setHide(false);
		}
	}, [variantId]);

	useEffect(() => {
		setOpen(false);
	}, [selected]);

	useEffect(() => {
		updateTotalPrice();
		setAddons([]);
	}, [selectedShopifyVariant]);

	useEffect(() => {
		updateTotalPrice();
	}, [addons]);

	useEffect(() => {
		setWasHidden((hidden) => hidden || !hide);
	}, [hide]);

	useEffect(() => {
		const section = document.querySelector<HTMLElement>(`footer`);
		setHide(
			(hide) =>
				(!wasHidden && scrolledPosition === 0) ||
				scrolledPosition + viewportHeight > (section?.offsetTop || documentHeight - viewportHeight)
		);
	}, [width, height, scrolledPosition, documentHeight, viewportHeight, wasHidden]);

	function resetAll() {
		setOpen(false);
		setAddons([]);
		setShowAddons(false);
		setShowAccessoriesButton(false);
	}

	function updateTotalPrice() {
		const variantsIds: string[] = [...addons, selectedShopifyVariant?.id].filter(Boolean);
		const modelPrice = parseFloat(selectedShopifyVariant?.price.amount ?? '0');
		const addonsPrice = variantsIds.reduce((acc, id) => {
			const accessory = shopify.accessories.find((p) => p?.variants.edges[0].node.id === id);
			const lightsource = shopify.lightsources.find((p) => p?.variants.edges[0].node.id === id);
			const lightsourcePrice = parseFloat(accessory?.variants.edges[0].node.price.amount ?? '0');
			const accessoryPrice = parseFloat(lightsource?.variants.edges[0].node.price.amount ?? '0');
			return acc + accessoryPrice + lightsourcePrice;
		}, 0);

		setTotalPrice({ amount: addonsPrice + modelPrice, currencyCode: 'SEK' as CurrencyCode });
	}

	function handleAddonClick(e: React.MouseEvent<HTMLLIElement>) {
		const variantId = (e.currentTarget as HTMLElement).dataset.variant;
		if (!variantId) throw new Error('Invalid variant id');
		if (addons.find((id) => id === variantId))
			setAddons((addons) => addons.filter((id) => id !== variantId));
		else setAddons((addons) => [...addons, variantId]);
	}

	function handleAddToCart(e: any) {
		if (!selectedShopifyVariant) return;

		const variantsIds: string[] = [selectedShopifyVariant.id, ...addons];

		addToCart(
			variantsIds.reverse().map((id) => ({
				merchandiseId: id,
				quantity: 1,
			})),
			'SE'
		);
		setShowCart(true);
		resetAll();
	}

	if (!product || !selected || !selectedModel) return null;

	const availableAddons =
		(selectedModel.accessories?.length ?? 0) +
		selectedModel.lightsources.filter(({ included }) => !included).length;

	return (
		<div
			ref={ref}
			className={cn(s.shop, (hide || hide === null) && s.hide, expanded && s.wide)}
			onMouseEnter={() => setShowAccessoriesButton(true)}
			onMouseLeave={() => !showAddons && setShowAccessoriesButton(false)}
		>
			<header>
				<h3>Shop {product.title}</h3>
				<span key={totalPrice.amount} className={s.price}>
					{formatPrice(totalPrice as MoneyV2)}
				</span>
			</header>
			<div className={s.line} />
			<AnimateHeight height={!open ? 0 : 'auto'} duration={400} style={{ position: 'relative' }}>
				<div id='models' className={cn(s.models)}>
					{product.models.map(({ id, name, variants }) => (
						<ul className={cn(s.variants)} key={id}>
							{variants.map((variant) => {
								const { id, articleNo, color, material, weight, feature, image, price } = variant;
								const shopifyVariant = shopify.product?.variants.edges.find(
									(v) => v.node.sku === articleNo?.trim()
								)?.node;

								return (
									<li
										className={cn(selected?.id === id && s.selected)}
										key={id}
										id={`variant-${id}`}
										title={`${name?.name ?? ''} ${[color?.name, material?.name].filter(Boolean).join(', ')}`}
										onClick={() => {
											setSelected(variant);
											if (variant.id === selected?.id) setOpen(false);
										}}
									>
										<div className={s.row}>
											<div className={s.thumb}>
												{shopifyVariant?.image && <img src={shopifyVariant?.image.url} />}
											</div>
											<span className={s.name}>
												<strong>{name?.name}</strong>
												&nbsp;
												{[color?.name, material?.name].filter(Boolean).join(', ')}
											</span>
											<span className={s.price}>
												{formatPrice(shopifyVariant?.price as MoneyV2)}
											</span>{' '}
										</div>
									</li>
								);
							})}
						</ul>
					))}
				</div>
			</AnimateHeight>
			<div className={cn(s.line, !open && s.hide)} />
			<div className={cn(s.variant, (open || showAddons) && s.open)} onClick={() => setOpen(!open)}>
				<div
					className={cn(s.row)}
					title={`${selectedModel?.name?.name ?? ''} ${[selected.color?.name, selected.material?.name].filter(Boolean).join(', ')}`}
				>
					<div className={s.thumb}>
						{selectedShopifyVariant?.image && <img src={selectedShopifyVariant?.image.url} />}
					</div>
					<span className={s.name}>
						<strong>{selectedModel?.name?.name}</strong>
						&nbsp;
						{[selected.color?.name, selected.material?.name].filter(Boolean).join(', ')}
					</span>
					<span className={s.price}></span>
					<button className={cn(s.dropdown, open && s.open)}>❯</button>
				</div>
			</div>
			<div className={cn(s.line)} />
			<div id={'addons'} className={cn(s.addons)} key={selectedShopifyVariant?.id}>
				<input type='hidden' name='model' value={selectedShopifyVariant?.id} />
				<AnimateHeight height={!showAddons || availableAddons === 0 ? 0 : 'auto'} duration={400}>
					<ul>
						{selectedModel.accessories?.map(({ id, accessory }) => {
							const shopifyAccessory = shopify.accessories.find((p) =>
								p?.tags.includes(accessory?.articleNo ?? '')
							);
							const price = shopifyAccessory?.variants.edges[0]?.node?.price;
							const variantId = shopifyAccessory?.variants.edges[0]?.node?.id;
							const image = shopifyAccessory?.variants.edges[0]?.node?.image;

							return (
								<li
									key={id}
									data-variant={variantId}
									onClick={handleAddonClick}
									title={accessory?.name ?? undefined}
								>
									<div className={cn(s.row, addons.find((id) => id === variantId) && s.selected)}>
										<div className={s.thumb}></div>
										<span className={s.name}>
											<strong>{accessory?.name}</strong>
										</span>
										<span className={s.price}>{formatPrice(price as MoneyV2)}</span>
									</div>
								</li>
							);
						})}

						{selectedModel.lightsources
							?.filter(({ included }) => !included)
							.map(({ id, lightsource, amount, included, optional }) => {
								const shopifyLightsource = shopify.lightsources.find((p) =>
									p?.tags.includes(lightsource?.articleNo ?? '')
								);
								const price = shopifyLightsource?.variants.edges[0]?.node?.price;
								const variantId = shopifyLightsource?.variants.edges[0]?.node?.id;
								const image = shopifyLightsource?.variants.edges[0]?.node?.image;
								const title = `${lightsource?.name ?? ''} ${amount ? `(${amount} pcs)` : ''}`;

								return (
									<li
										key={id}
										className={cn(included && s.inactive)}
										data-variant={variantId}
										onClick={handleAddonClick}
										title={title}
									>
										<div className={cn(s.row, addons.find((id) => id === variantId) && s.selected)}>
											<div className={s.thumb}></div>
											<span className={s.name}>
												<strong>{title}</strong>
											</span>
											<span className={s.price}>
												{!included ? formatPrice(price as MoneyV2) : 'Included'}
											</span>
										</div>
									</li>
								);
							})}
					</ul>
				</AnimateHeight>
			</div>

			<div className={s.buttons}>
				<AnimateHeight
					height={(!showAccessoriesButton && !open) || availableAddons === 0 ? 0 : 'auto'}
					duration={200}
				>
					<button
						id='accessories-button'
						type='button'
						className={cn('h3', s.accessories, s.toggle)}
						disabled={availableAddons === 0}
						onClick={() => setShowAddons(!showAddons)}
					>
						Accessories {!showAddons ? '+' : '–'}
					</button>
				</AnimateHeight>
				<button id='add-to-cart-button' onClick={handleAddToCart} className={s.addToCart}>
					Add to cart
				</button>
			</div>
			<div className={s.expand}>
				<button
					type='button'
					className={cn(s.toggle, s.expand)}
					onClick={() => setExpanded(!expanded)}
				>
					{expanded ? <GoChevronLeft size={16} /> : <GoChevronRight size={16} />}
				</button>
			</div>
		</div>
	);
}
