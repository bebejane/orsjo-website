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

type Props = {
	product: ProductPageDataProps['product'];
	shopify: ProductPageDataProps['shopify'];
};

export default function ProductShop({ product, shopify }: Props) {
	const allVariants = product?.models.map(({ variants }) => variants).flat() ?? [];
	const [addToCart, updating, error] = useCart(useShallow((state) => [state.addToCart, state.updating, state.error]));
	const [setShowCart] = useStore(useShallow((state) => [state.setShowCart]));
	const [hide, setHide] = useState(true);
	const [open, setOpen] = useState(false);
	const [showAddons, setShowAddons] = useState(false);
	const [showAccessories, setShowAccessories] = useState(false);
	const [selected, setSelected] = useState<any | null>(allVariants?.[0] ?? null);
	const [addons, setAddons] = useState<any[]>([]);
	const [totalPrice, setTotalPrice] = useState<MoneyV2>({ amount: 0, currencyCode: 'SEK' as CurrencyCode });
	const { width, height } = useWindowSize();
	const { scrolledPosition, viewportHeight } = useScrollInfo();
	const ref = useRef<HTMLDivElement>(null);
	const formRef = useRef<HTMLFormElement>(null);
	const selectedModel = product?.models.find(({ variants }) => variants.find((v) => v.id === selected?.id));
	const selectedShopifyVariant = shopify.product?.variants.edges.find((v) => v.node.sku && v.node.sku === selected?.articleNo.trim())?.node;

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
		const section = Array.from(document.querySelectorAll<HTMLElement>(`section`))?.at(-1);
		console.log(section);
		if (section) {
			const top = section.offsetTop;
			setHide(scrolledPosition + viewportHeight > top || scrolledPosition === 0);
			//setHide(scrolledPosition + viewportHeight > top);
		}
	}, [scrolledPosition]);

	function resetAll() {
		setOpen(false);
		setAddons([]);
		setShowAddons(false);
		setShowAccessories(false);
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
		if (addons.find((id) => id === variantId)) setAddons((addons) => addons.filter((id) => id !== variantId));
		else setAddons((addons) => [...addons, variantId]);
	}

	function handleSubmit(e: any) {
		e.preventDefault();

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

	const haveAvailableAddons = selectedModel.accessories?.length > 0 || selectedModel.lightsources?.length > 0;

	return (
		<>
			<div
				ref={ref}
				className={cn(s.shop, hide && s.hide)}
				onMouseEnter={() => setShowAccessories(true)}
				onMouseLeave={() => !showAddons && setShowAccessories(false)}
			>
				<header>
					<h3>Shop</h3>
					<span
						key={totalPrice.amount}
						className={s.price}
					>
						{formatPrice(totalPrice as MoneyV2)}
					</span>
				</header>
				<div className={cn(s.models, 'noscrollbar', open && open && s.open)}>
					{product.models
						//.filter((m) => m.variants.length > 0 && selectedModel && m.id !== selectedModel.id)
						.map(({ id, name, variants }) => (
							<div
								className={s.model}
								key={id}
							>
								<ul className={cn(s.variants)}>
									{variants.map((variant) => {
										const { id, articleNo, color, material, weight, feature, image, price } = variant;
										const shopifyVariant = shopify.product?.variants.edges.find((v) => v.node.sku === articleNo?.trim())?.node;

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
													<div className={s.thumb}>{shopifyVariant?.image && <img src={shopifyVariant?.image.url} />}</div>
													<span className={s.name}>
														<strong>{name?.name}</strong>
														&nbsp;
														{[color?.name, material?.name].filter(Boolean).join(', ')}
													</span>
													<span className={s.price}>{formatPrice(shopifyVariant?.price as MoneyV2)}</span>{' '}
												</div>
											</li>
										);
									})}
								</ul>
							</div>
						))}
				</div>

				<div
					className={cn(s.variant, open && s.top, showAddons && s.bottom)}
					onClick={() => setOpen(!open)}
				>
					<div
						className={cn(s.row, s.selected)}
						title={`${selectedModel?.name?.name ?? ''} ${[selected.color?.name, selected.material?.name].filter(Boolean).join(', ')}`}
					>
						<div className={s.thumb}>{selectedShopifyVariant?.image && <img src={selectedShopifyVariant?.image.url} />}</div>
						<span className={s.name}>
							<strong>{selectedModel?.name?.name}</strong>
							&nbsp;
							{[selected.color?.name, selected.material?.name].filter(Boolean).join(', ')}
						</span>
						<span className={s.price}></span>
						<button className={cn(s.dropdown, open && s.open)}>❯</button>
					</div>
				</div>

				<form
					className={cn(s.addons, !showAddons && s.hide)}
					onSubmit={handleSubmit}
					ref={formRef}
					id={'addons-form'}
					key={selectedShopifyVariant?.id}
				>
					<input
						type='hidden'
						name='model'
						value={selectedShopifyVariant?.id}
					/>
					<ul className={'noscrollbar'}>
						{selectedModel.accessories?.map(({ id, accessory }) => {
							const shopifyAccessory = shopify.accessories.find((p) => p?.tags.includes(accessory?.articleNo ?? ''));
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
										<span className={s.name}>
											<strong>{accessory?.name}</strong>
										</span>
										<span className={s.price}>{formatPrice(price as MoneyV2)}</span>
									</div>
								</li>
							);
						})}

						{selectedModel.lightsources?.map(({ id, lightsource, amount, included, optional }) => {
							const shopifyLightsource = shopify.lightsources.find((p) => p?.tags.includes(lightsource?.articleNo ?? ''));
							const price = shopifyLightsource?.variants.edges[0]?.node?.price;
							const variantId = shopifyLightsource?.variants.edges[0]?.node?.id;
							const image = shopifyLightsource?.variants.edges[0]?.node?.image;
							const title = `${lightsource?.name ?? ''} (${amount})`;

							return (
								<li
									key={id}
									className={cn(included && s.inactive)}
									data-variant={variantId}
									onClick={handleAddonClick}
									title={title}
								>
									<div className={cn(s.row, addons.find((id) => id === variantId) && s.selected)}>
										<span className={s.name}>
											<strong>{title}</strong>
										</span>
										<span className={s.price}>{!included ? formatPrice(price as MoneyV2) : 'Included'}</span>
									</div>
								</li>
							);
						})}
					</ul>
				</form>
				<div className={s.buttons}>
					<button
						type='button'
						className={cn(s.toggle, !showAccessories && !open && s.hide)}
						disabled={!haveAvailableAddons}
						onClick={() => setShowAddons(!showAddons)}
					>
						Accessories {!showAddons ? '+' : '-'}
					</button>
					<button
						type='submit'
						form='addons-form'
					>
						Add to cart
					</button>
				</div>
			</div>
		</>
	);
}
