'use client';

import s from './Shop.module.scss';
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { formatPrice } from '@/lib/shopify/utils';
import { useWindowSize } from 'usehooks-ts';
import useCart, { useShallow } from '@/lib/shopify/hooks/useCart';
import useStore from '@/lib/store';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { GoChevronLeft, GoChevronRight, GoX } from 'react-icons/go';
import AnimateHeight from 'react-animate-height';
import { generateProductTitle, formatProductColor, parseProductModelName, deliveryDaysText } from '@/lib/utils';
import { RiCheckFill } from 'react-icons/ri';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';
import { ProductPageDataProps } from '@/app/products/utils';
import Modal from '@/components/layout/Modal';

type Props = {
	product: ProductPageDataProps['product'];
	shopify: ProductPageDataProps['shopify'];
	variantId?: string;
};

type Addon = {
	__typename: string;
	id: string;
	modelId: string;
	variantId: string;
	name: string;
	price?: MoneyV2;
	imageUrl?: string;
	quantity: number;
};

export default function ProductShop({ product, shopify, variantId }: Props) {
	const allVariants = product?.models.map(({ variants }) => variants).flat() ?? [];
	const allAddons = getAllAddons(product, shopify);

	const [addToCart, updating, error] = useCart(useShallow((state) => [state.addToCart, state.updating, state.error]));
	const [setShowCart] = useStore(useShallow((state) => [state.setShowCart]));
	const [hide, setHide] = useState<boolean>(false);
	const [wasHidden, setWasHidden] = useState<boolean>(false);
	const [open, setOpen] = useState(false);
	const [expanded, setExpanded] = useState(false);
	const [showAddons, setShowAddons] = useState(false);
	const [addons, setAddons] = useState<Addon[]>([]);
	const [showAddonsButton, setShowAddonsButton] = useState(false);
	const [selected, setSelected] = useState<any | null>(null);
	const [totalPrice, setTotalPrice] = useState<MoneyV2>({ amount: 0, currencyCode: shopify.i18n.currencyCode });
	const [modal, setModal] = useState<'show' | 'hide' | 'dismiss'>('hide');
	const { width, height } = useWindowSize();
	const { scrolledPosition, viewportHeight, documentHeight } = useScrollInfo();
	const ref = useRef<HTMLDivElement>(null);

	const selectedModel = product?.models.find(({ variants }) => variants.find((v) => v.id === selected?.id));
	const selectedModelAddons = allAddons.filter((a) => a.modelId === selectedModel?.id);
	const selectedShopifyVariant = shopify.product?.variants.edges.find(
		(v) => v.node.sku && v.node.sku === selected?.articleNo.trim()
	)?.node;

	useEffect(() => {
		if (!variantId) return setSelected(allVariants?.[0] ?? null);

		const shopifyVariant = shopify.product?.variants.edges.find((v) => v.node.id.split('/').pop() === variantId)?.node;

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
		setShowAddonsButton(false);
		setModal('hide');
	}

	function updateTotalPrice() {
		const variantsIds: string[] = [...addons.map((a) => a.variantId), selectedShopifyVariant?.id].filter(
			Boolean
		) as string[];

		const modelPrice = parseFloat(selectedShopifyVariant?.price.amount ?? '0');
		const addonsPrice = variantsIds.reduce((acc, id) => {
			const accessory = shopify.accessories.find((p) => p?.variants.edges[0].node.id === id);
			const lightsource = shopify.lightsources.find((p) => p?.variants.edges[0].node.id === id);
			const lightsourcePrice = parseFloat(accessory?.variants.edges[0].node.price.amount ?? '0');
			const accessoryPrice = parseFloat(lightsource?.variants.edges[0].node.price.amount ?? '0');
			return acc + accessoryPrice + lightsourcePrice;
		}, 0);

		setTotalPrice({ amount: addonsPrice + modelPrice, currencyCode: shopify.i18n.currencyCode });
	}

	function handleAddonClick(e: React.MouseEvent<HTMLElement>) {
		const id = (e.currentTarget as HTMLElement).id;
		const addon = allAddons.find((a) => a.id === id);
		if (!addon) throw new Error('Invalid addon id: ' + id);
		if (addons.find((a) => a.id === id)) setAddons((addons) => addons.filter((a) => a.id !== id));
		else setAddons((addons) => [...addons, addon]);
		setOpen(false);
	}

	function handleAddToCart(withoutLightsource?: boolean) {
		if (!selectedShopifyVariant || !selectedModel) return;

		const noLightsourceIncluded =
			selectedModel.lightsources.length && !selectedModel.lightsources.find((l) => l.included);
		const lightsourceAdded = addons.find((a) => a.modelId === selectedModel?.id);

		if (noLightsourceIncluded && modal !== 'dismiss' && !lightsourceAdded && !withoutLightsource) {
			setModal('show');
			return;
		}

		const variants: { id: string; quantity: number }[] = [
			{ id: selectedShopifyVariant.id, quantity: 1 },
			...addons.map((a) => ({ id: a.variantId, quantity: a.quantity })),
		];

		addToCart(
			variants.reverse().map(({ id, quantity }) => ({
				merchandiseId: id,
				quantity,
			})),
			shopify.i18n.countryCode
		);
		setShowCart(true);
		resetAll();
	}

	function handleAddToCartWithoutLightsource() {
		setModal('dismiss');
		handleAddToCart(true);
	}

	if (!product || !selected || !selectedModel) return null;

	return (
		<>
			<div
				ref={ref}
				className={cn(s.shop, (hide || hide === null) && s.hide, expanded && s.wide)}
				onMouseEnter={() => setShowAddonsButton(true)}
				onMouseLeave={() => !showAddons && setShowAddonsButton(false)}
			>
				<header>
					<h3>
						Shop {product.title} {addons.length > 0 && <span className={s.addons}>+{addons.length}</span>}
					</h3>
					<span key={totalPrice.amount} className={s.price}>
						{formatPrice(totalPrice as MoneyV2)}
					</span>
				</header>

				<hr />

				<AnimateHeight height={!open ? 0 : 'auto'} duration={400} style={{ position: 'relative' }}>
					<div id='models' className={cn(s.models)}>
						{product.models.map((model) => (
							<ul className={cn(s.variants)} key={model.id}>
								{model.variants.map((variant) => {
									const { id, articleNo, color, material, feature } = variant;
									const shopifyVariant = shopify.product?.variants.edges.find(
										(v) => articleNo && v.node.sku === articleNo
									)?.node;

									const title = generateProductTitle(product as ProductRecord, variant.id);
									const { name, description } = parseProductModelName(
										model as ProductModelRecord,
										variant as VariantRecord
									);

									return (
										<li
											className={cn(selected?.id === id && s.selected)}
											key={id}
											id={`variant-${id}`}
											title={title}
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
													<strong>
														{(() => {
															if (name) {
																const cleaned = name
																	.replace(/\s+RAL\s+\d+\s+structure$/i, '')
																	.replace(/\s+RAL\s+\d+$/i, '')
																	.replace(/\s+structure$/i, '')
																	.trim();

																return cleaned;
															}
															return name;
														})()}
													</strong>{' '}
													{description}
												</span>
												{variant.deliveryDays && (
													<div
														className={cn(s.delivery, s[variant.deliveryDays])}
														title={deliveryDaysText[variant.deliveryDays]?.full}
													/>
												)}
												<span className={s.price}>{formatPrice(shopifyVariant?.price as MoneyV2)}</span>{' '}
											</div>
										</li>
									);
								})}
							</ul>
						))}
					</div>
				</AnimateHeight>

				<hr className={cn(!open && s.hide)} />

				<div className={cn(s.variant, (open || showAddons) && s.open)}>
					<div
						className={cn(s.row)}
						title={`${selectedModel?.name?.name ?? ''} ${[selected.color?.name, selected.material?.name, selected.feature?.name].filter(Boolean).join(', ')}`}
						onClick={() => setOpen(!open)}
					>
						<div className={s.thumb}>
							{selectedShopifyVariant?.image && <img src={selectedShopifyVariant?.image.url} />}
						</div>
						<span className={s.name}>
							<strong>
								{parseProductModelName(selectedModel as ProductModelRecord, selected as VariantRecord)
									.name?.replace(/\s+RAL\s+\d+\s+structure$/i, '')
									.replace(/\s+RAL\s+\d+$/i, '')
									.replace(/\s+structure$/i, '')
									.trim()}
							</strong>
							&nbsp;
							{parseProductModelName(selectedModel as ProductModelRecord, selected as VariantRecord).description}
						</span>
						<span className={s.price}></span>
						<button className={cn(s.dropdown, open && s.open)}>❯</button>
					</div>

					{addons.map(({ id, name, variantId, price, imageUrl }, idx) => {
						return (
							<div
								key={idx}
								className={cn(s.row, s.addon, addons.find((a) => a.variantId === variantId) && s.selected)}
								id={id}
								onClick={() => setAddons((addons) => addons.filter((a) => a.id !== id))}
								title={name}
							>
								<div className={s.plusminus}>
									<AiOutlineClose size={16} />
								</div>

								<div className={s.thumb}>{imageUrl && <img src={imageUrl} />}</div>
								<span className={s.name}>
									<strong>{name}</strong>
								</span>
							</div>
						);
					})}
				</div>

				<hr />

				<div id={'addons'} className={cn(s.addons)} key={selectedShopifyVariant?.id}>
					<input type='hidden' name='model' value={selectedShopifyVariant?.id} />
					<AnimateHeight height={!showAddons || allAddons.length === 0 ? 0 : 'auto'} duration={400}>
						<ul>
							{selectedModelAddons
								?.filter((a) => addons.find(({ id }) => a.id === id) === undefined)
								.map(({ id, name, variantId, price, quantity, imageUrl }) => {
									const isSelected = addons.find((a) => a.variantId === variantId) !== undefined;
									return (
										<li key={id} id={id} onClick={handleAddonClick} title={name}>
											<div
												className={cn(
													s.row,
													s.addon,
													addons.find((a) => isSelected && s.selected)
												)}
											>
												<div className={cn(s.plusminus, isSelected && s.hide)}>
													<AiOutlinePlus size={16} />
												</div>
												<div className={cn(s.check, isSelected && s.checked)}>
													{isSelected && <RiCheckFill size={16} color='var(--black)' />}
												</div>
												<div className={s.thumb}>{imageUrl && <img src={imageUrl} />}</div>
												<span className={s.name}>
													<strong>{name}</strong>
												</span>
												<span className={s.price}>{formatPrice(price as MoneyV2, quantity)}</span>
											</div>
										</li>
									);
								})}
						</ul>
					</AnimateHeight>
				</div>

				<div className={s.buttons}>
					<AnimateHeight
						height={(!showAddonsButton && !open) || selectedModelAddons.length === 0 ? 0 : 'auto'}
						duration={200}
					>
						<button
							id='accessories-button'
							type='button'
							className={cn('h3', s.accessories, s.toggle)}
							disabled={allAddons.length === 0 || addons.length === selectedModelAddons.length}
							onClick={() => setShowAddons(!showAddons)}
						>
							Accessories {!showAddons ? '+' : '–'}
						</button>
					</AnimateHeight>
					<button id='add-to-cart-button' onClick={() => handleAddToCart(false)} className={s.addToCart}>
						Add to cart
					</button>
				</div>
				<div className={s.expand}>
					<button type='button' className={cn(s.toggle, s.expand)} onClick={() => setExpanded(!expanded)}>
						{expanded ? <GoChevronLeft size={16} /> : <GoChevronRight size={16} />}
					</button>
				</div>
			</div>

			{modal === 'show' && (
				<Modal>
					<div className={s.modal}>
						<div className={s.wrap}>
							<h3>Please Note</h3>
							<h4>This product is sold without light source.</h4>
							<form>
								<button
									type='button'
									onClick={() => {
										setModal('dismiss');
										setShowAddons(true);
										setShowAddonsButton(true);
									}}
								>
									Add light source
								</button>
								<button type='button' onClick={handleAddToCartWithoutLightsource}>
									Continue without light source
								</button>
							</form>
							<button className={s.close} onClick={() => setModal('hide')}>
								<img src={'/images/close.svg'} alt='close' />
							</button>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
}

function getAllAddons(product: ProductPageDataProps['product'], shopify: ProductPageDataProps['shopify']): Addon[] {
	return product?.models
		.map(({ id: modelId, accessories, lightsources }) => [
			...accessories.map(({ __typename, id, accessory }) => ({
				__typename,
				id,
				modelId,
				variantId: shopify.accessories.find((p) => p?.variants.edges[0].node.sku === accessory?.articleNo)?.variants
					.edges[0].node.id,
				name: `1 x ${accessory?.name}`,
				price: shopify.accessories.find((p) => p?.variants.edges[0].node.sku === accessory?.articleNo)?.variants
					.edges[0].node.price,
				imageUrl: shopify.accessories.find((p) => p?.variants.edges[0].node.sku === accessory?.articleNo)?.variants
					.edges[0].node.image?.url,
				quantity: 1,
			})),
			...lightsources
				.filter(({ included }) => !included)
				.map(({ __typename, id, lightsource, amount }) => ({
					__typename,
					id,
					modelId,
					variantId: shopify.lightsources.find((p) => p?.variants.edges[0].node.sku === lightsource?.articleNo)
						?.variants.edges[0].node.id,
					name: `${amount} x ${lightsource?.name}`,
					price: shopify.lightsources.find((p) => p?.variants.edges[0].node.sku === lightsource?.articleNo)?.variants
						.edges[0].node.price,
					imageUrl: shopify.lightsources.find((p) => p?.variants.edges[0].node.sku === lightsource?.articleNo)?.variants
						.edges[0].node.image?.url,
					quantity: amount,
				})),
		])
		.flat() as Addon[];
}
