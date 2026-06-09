'use client';

import s from './Shop.module.scss';
import cn from 'classnames';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
<<<<<<< HEAD
import { formatShopifyPrice, parseGid } from '@/lib/shopify/utils';
import { useWindowSize } from 'usehooks-ts';
import useCart, { useShallow } from '@/lib/shopify/hooks/useCart';
=======
import { formatGeinsPrice, getProductImageUrl } from '@/geins/utils';
import { useWindowSize } from 'usehooks-ts';
import useCart, { useShallow } from '@/geins/hooks/useCart';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import useStore from '@/lib/store';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { GoChevronLeft, GoChevronRight, GoX } from 'react-icons/go';
import AnimateHeight from 'react-animate-height';
<<<<<<< HEAD
import { generateProductTitle, parseProductModelName, deliveryDaysText } from '@/lib/utils';
=======
import { generateProductTitle, parseProductModelName } from '@/lib/utils';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import { RiCheckFill } from 'react-icons/ri';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { ProductPageDataProps } from '@/app/[locale]/products/utils';
import { Modal } from 'next-dato-utils/components';
import useIsDesktop from '@/lib/hooks/useIsDesktop';
<<<<<<< HEAD

type Props = {
	product: ProductPageDataProps['product'];
	shopify: ProductPageDataProps['shopify'];
	variantId?: string;
=======
import { sendGTMEvent } from '@next/third-parties/google';

type Props = {
	marketId: string;
	product: ProductPageDataProps['product'];
	geins: ProductPageDataProps['geins'];
	variantId?: number;
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	shipping: ShippingQuery['shipping'];
};

type Addon = {
	__typename: string;
	id: string;
	modelId: string;
<<<<<<< HEAD
	variantId: string;
	name: string;
	price?: MoneyV2;
=======
	variantId: number;
	name: string;
	price: number;
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	imageUrl?: string;
	quantity: number;
};

<<<<<<< HEAD
export default function ProductShop({ product, shopify, variantId, shipping }: Props) {
	const allVariants = product?.models.map(({ variants }) => variants).flat() ?? [];
	const allAddons = getAllAddons(product, shopify);

	const isDesktop = useIsDesktop();
	const [desktopStyles, setDesktopStyles] = useState<CSSProperties>({});
	const [addToCart, updating, error] = useCart(useShallow((state) => [state.addToCart, state.updating, state.error]));
=======
export default function ProductShop({ product, geins, variantId, shipping, marketId }: Props) {
	const allVariants = product?.models.map(({ variants }) => variants).flat() ?? [];
	const allAddons = getAllAddons(product, geins);
	const isDesktop = useIsDesktop();
	const [desktopStyles, setDesktopStyles] = useState<CSSProperties>({});
	const [cart, addToCart, updating, error] = useCart(
		useShallow((state) => [state.cart, state.addToCart, state.updating, state.error]),
	);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	const [setShowCart] = useStore(useShallow((state) => [state.setShowCart]));
	const [hide, setHide] = useState<boolean>(false);
	const [wasHidden, setWasHidden] = useState<boolean>(false);
	const [open, setOpen] = useState(false);
	const [expanded, setExpanded] = useState(false);
	const [showAddons, setShowAddons] = useState(false);
	const [addons, setAddons] = useState<Addon[]>([]);
	const [showAddonsButton, setShowAddonsButton] = useState(false);
	const [selected, setSelected] = useState<any | null>(null);
<<<<<<< HEAD
	const [totalPrice, setTotalPrice] = useState<MoneyV2>({ amount: 0, currencyCode: shopify.i18n.currencyCode });
	const selectedModel = product?.models.find(({ variants }) => variants.find((v) => v.id === selected?.id));
	const selectedModelAddons = allAddons.filter((a) => a.modelId === selectedModel?.id);
	const selectedShopifyVariant = shopify.product?.variants.edges.find(
		(v) => v.node.sku && v.node.sku === selected?.articleNo.trim()
	)?.node;

=======
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const selectedModel = product?.models.find(({ variants }) =>
		variants.find((v) => v.id === selected?.id),
	);
	const selectedModelAddons = allAddons.filter((a) => a.modelId === selectedModel?.id);
	const selectedGeinsVariant = geins.products?.find(
		(v) => v.articleNumber && v.articleNumber === selected?.articleNo.trim(),
	);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	const [modal, setModal] = useState<'show' | 'hide' | 'dismiss'>('hide');
	const { width, height } = useWindowSize();
	const { scrolledPosition, viewportHeight, documentHeight } = useScrollInfo();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!variantId) return setSelected(allVariants?.[0] ?? null);

<<<<<<< HEAD
		const shopifyVariant = shopify.product?.variants.edges.find((v) => parseGid(v.node.id) === variantId)?.node;
		if (shopifyVariant) {
			setSelected(allVariants.find((v) => v.articleNo?.trim() === shopifyVariant?.sku) ?? null);
=======
		const geinsVariant = geins.products?.find((v) => v.productId === variantId);

		if (geinsVariant) {
			setSelected(
				allVariants.find((v) => v.articleNo?.trim() === geinsVariant?.articleNumber) ?? null,
			);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
			setHide(false);
		}
	}, [variantId]);

	useEffect(() => {
<<<<<<< HEAD
=======
		sendGTMEvent({
			event: 'view_item',
			currency: cart?.summary?.total?.currency?.code,
			value: product?.title,
		});
	}, []);

	useEffect(() => {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		setOpen(false);
	}, [selected]);

	useEffect(() => {
		updateTotalPrice();
		setAddons([]);
<<<<<<< HEAD
	}, [selectedShopifyVariant]);
=======
	}, [selectedGeinsVariant]);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

	useEffect(() => {
		updateTotalPrice();
	}, [addons]);

	useEffect(() => {
		setWasHidden((hidden) => hidden || !hide);
	}, [hide]);

	useEffect(() => {
<<<<<<< HEAD
		const section = document.querySelector<HTMLElement>(`footer`);
		setHide(
			(hide) =>
				(!wasHidden && scrolledPosition === 0) ||
				scrolledPosition + viewportHeight > (section?.offsetTop || documentHeight - viewportHeight)
=======
		const lastSection = document.querySelector<HTMLElement>(`section:last-of-type`);

		setHide(
			(hide) =>
				(!wasHidden && scrolledPosition === 0) ||
				scrolledPosition + viewportHeight >
					(lastSection?.offsetTop || documentHeight - viewportHeight),
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		);
	}, [width, height, scrolledPosition, documentHeight, viewportHeight, wasHidden]);

	useEffect(() => {
		setDesktopStyles({
			marginTop: isDesktop ? `-${ref.current?.clientHeight}px` : undefined,
		});
	}, [hide, isDesktop, expanded, ref]);

	function resetAll() {
		setOpen(false);
		setAddons([]);
		setShowAddons(false);
		setShowAddonsButton(false);
		setModal('hide');
	}

	function updateTotalPrice() {
<<<<<<< HEAD
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
=======
		const variantsIds: number[] = [
			...addons.map((a) => a.variantId),
			selectedGeinsVariant?.productId,
		].filter(Boolean) as number[];

		const modelPrice = parseFloat(selectedGeinsVariant?.unitPrice?.sellingPriceIncVat ?? '0');
		const addonsPrice = variantsIds.reduce((acc, id) => {
			const accessory = geins.accessories.find((p) => p?.productId === id);
			const lightsource = geins.lightsources.find((p) => p?.productId === id);
			const lightsourcePrice = parseFloat(accessory?.unitPrice?.sellingPriceIncVat ?? '0');
			const accessoryPrice = parseFloat(lightsource?.unitPrice?.sellingPriceIncVat ?? '0');
			return acc + accessoryPrice + lightsourcePrice;
		}, 0);

		setTotalPrice(addonsPrice + modelPrice);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	}

	function handleToggleOpen(e: React.MouseEvent<HTMLElement>) {
		setOpen(!open);
		if (!isDesktop) setShowAddons(true);
	}

	function handleAddonClick(e: React.MouseEvent<HTMLElement>) {
		const id = (e.currentTarget as HTMLElement).id;
		const addon = allAddons.find((a) => a.id === id);
		if (!addon) throw new Error('Invalid addon id: ' + id);
		if (addons.find((a) => a.id === id)) setAddons((addons) => addons.filter((a) => a.id !== id));
<<<<<<< HEAD
		else setAddons((addons) => [...addons, addon]);
		setOpen(false);
	}

	function handleAddToCart(withoutLightsource?: boolean) {
		if (!selectedShopifyVariant || !selectedModel) return;
=======
		else {
			setAddons((addons) => [...addons, addon]);
			setShowAddons(false);
		}
		setOpen(false);
	}

	function handleAddToCartWithoutLightsource() {
		setModal('dismiss');
		handleAddToCart(true);
	}

	async function handleAddToCart(withoutLightsource?: boolean) {
		if (!selectedGeinsVariant || !selectedModel) return;
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

		const noLightsourceIncluded =
			selectedModel.lightsources.length && !selectedModel.lightsources.find((l) => l.included);
		const lightsourceAdded = addons.find((a) => a.modelId === selectedModel?.id);

		if (noLightsourceIncluded && modal !== 'dismiss' && !lightsourceAdded && !withoutLightsource) {
			setModal('show');
			return;
		}

<<<<<<< HEAD
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
=======
		const variants: CartItemInputType[] = [
			{
				skuId: selectedGeinsVariant?.skus?.[0]?.skuId ?? null,
				quantity: 1,
			},
			...addons.map((a) => ({ skuId: a.variantId, quantity: a.quantity })),
		].filter(({ skuId }) => skuId !== undefined);

		await addToCart(variants, marketId);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		setShowCart(true);
		resetAll();
	}

<<<<<<< HEAD
	function handleAddToCartWithoutLightsource() {
		setModal('dismiss');
		handleAddToCart(true);
	}

=======
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	if (!product || !selected || !selectedModel) return null;

	return (
		<>
			<div
				ref={ref}
				className={cn(s.shop, (hide || hide === null) && s.hide, expanded && s.wide)}
				style={desktopStyles}
				onMouseEnter={() => setShowAddonsButton(true)}
				onMouseLeave={() => !showAddons && setShowAddonsButton(false)}
			>
				<header>
<<<<<<< HEAD
					<h3>
						Shop {product.title} {addons.length > 0 && <span className={s.addons}>+ {addons.length}</span>}
					</h3>
					<span key={totalPrice.amount} className={s.price}>
						{formatShopifyPrice(totalPrice as MoneyV2)}
=======
					<h3 className='notranslate' translate='no'>
						Shop {product.title}{' '}
						{addons.length > 0 && <span className={s.addons}>+ {addons.length}</span>}
					</h3>
					<span key={totalPrice} className={s.price}>
						{formatGeinsPrice(totalPrice, marketId, cart?.summary?.total?.currency)}
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
					</span>
				</header>

				<hr />

				<AnimateHeight height={!open ? 0 : 'auto'} duration={400} style={{ position: 'relative' }}>
					<div id='models' className={cn(s.models)}>
						{product.models.map((model) => (
							<ul className={cn(s.variants)} key={model.id}>
								{model.variants.map((variant) => {
									const { id, articleNo } = variant;
<<<<<<< HEAD
									const shopifyVariant = shopify.product?.variants.edges.find(
										(v) => articleNo && v.node.sku === articleNo
									)?.node;
=======
									const geinsVariant = geins.products?.find(
										(v) => articleNo && v.articleNumber === articleNo,
									);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

									const title = generateProductTitle(product as ProductRecord, variant.id);
									const { name, description } = parseProductModelName(
										model as ProductModelRecord,
<<<<<<< HEAD
										variant as VariantRecord
									);

									let deliveryDays;
									if (variant.deliveryDays && ['short', 'medium', 'long'].includes(variant.deliveryDays))
										deliveryDays = shipping?.deliveryDays.find(({ time }) => time === variant.deliveryDays)?.text ?? '';
=======
										variant as VariantRecord,
									);

									let deliveryDays;

									if (
										variant.deliveryDays &&
										['short', 'medium', 'long'].includes(variant.deliveryDays)
									)
										deliveryDays =
											shipping?.deliveryDays.find(({ time }) => time === variant.deliveryDays)
												?.text ?? '';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

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
<<<<<<< HEAD
												<div className={s.thumb}>
													{shopifyVariant?.image && <img src={shopifyVariant?.image.url} />}
=======
												<div className={s.plusminus}>
													<AiOutlinePlus size={16} />
												</div>
												<div className={s.thumb}>
													{getProductImageUrl(geinsVariant as ProductType) && (
														<img src={getProductImageUrl(geinsVariant as ProductType)} />
													)}
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
												</div>
												<span className={s.name}>
													<strong>{name}</strong> {description}
												</span>
												{variant.deliveryDays && (
<<<<<<< HEAD
													<div className={cn(s.delivery, s[variant.deliveryDays])} title={deliveryDays} />
												)}
												<span className={s.price}>{formatShopifyPrice(shopifyVariant?.price as MoneyV2)}</span>{' '}
=======
													<div
														className={cn(s.delivery, s[variant.deliveryDays])}
														title={deliveryDays}
													/>
												)}
												<span className={s.price}>
													{formatGeinsPrice(
														geinsVariant?.unitPrice?.sellingPriceIncVat,
														marketId,
														geinsVariant?.unitPrice?.currency,
													)}
												</span>{' '}
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
											</div>
										</li>
									);
								})}
							</ul>
						))}
					</div>
				</AnimateHeight>

				<hr className={cn(!open && s.hide)} />

<<<<<<< HEAD
				<div className={cn(s.variant, (open || showAddons) && s.open)}>
=======
				<div id='variant' className={cn(s.variant, (open || showAddons) && s.open)}>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
					<div
						className={s.row}
						title={`${selectedModel?.name?.name ?? ''} ${[selected.color?.name, selected.material?.name, selected.feature?.name].filter(Boolean).join(', ')}`}
						onClick={handleToggleOpen}
					>
						<div className={s.thumb}>
<<<<<<< HEAD
							{selectedShopifyVariant?.image && <img src={selectedShopifyVariant?.image.url} />}
						</div>
						<span className={s.name}>
							<strong>
								{parseProductModelName(selectedModel as ProductModelRecord, selected as VariantRecord).name}
							</strong>
							&nbsp;
							{parseProductModelName(selectedModel as ProductModelRecord, selected as VariantRecord).description}
=======
							{getProductImageUrl(selectedGeinsVariant as ProductType) && (
								<img src={getProductImageUrl(selectedGeinsVariant as ProductType)} />
							)}
						</div>
						<span className={s.name}>
							<strong>
								{
									parseProductModelName(
										selectedModel as ProductModelRecord,
										selected as VariantRecord,
									).name
								}
							</strong>
							&nbsp;
							{
								parseProductModelName(
									selectedModel as ProductModelRecord,
									selected as VariantRecord,
								).description
							}
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
						</span>
						<span className={s.price}></span>
						<button className={cn(s.dropdown, open && s.open)}>❯</button>
					</div>

<<<<<<< HEAD
					{addons.map(({ id, name, variantId, imageUrl }, idx) => {
						return (
							<div
								key={idx}
								className={cn(s.row, s.addon, addons.find((a) => a.variantId === variantId) && s.selected)}
								id={id}
								onClick={() => setAddons((addons) => addons.filter((a) => a.id !== id))}
								title={name}
=======
					{addons.map(({ id, name, variantId, price, imageUrl }) => {
						return (
							<div
								key={id}
								id={id}
								onClick={() => setAddons((addons) => addons.filter((a) => a.id !== id))}
								title={name}
								className={cn(
									s.row,
									s.addon,
									addons.find((a) => a.variantId === variantId) && s.selected,
								)}
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
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

<<<<<<< HEAD
				<div id={'addons'} className={cn(s.addons)} key={selectedShopifyVariant?.id}>
					<input type='hidden' name='model' value={selectedShopifyVariant?.id} />
=======
				<div id={'addons'} className={cn(s.addons)}>
					<input type='hidden' name='model' value={selectedGeinsVariant?.productId} />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
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
<<<<<<< HEAD
													addons.find((a) => isSelected && s.selected)
=======
													addons.find((a) => isSelected && s.selected),
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
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
<<<<<<< HEAD
												<span className={s.price}>{formatShopifyPrice(price as MoneyV2, quantity)}</span>
=======
												<span className={s.price}>
													{formatGeinsPrice(
														price,
														marketId,
														cart?.summary?.total?.currency,
														quantity,
													)}
												</span>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
											</div>
										</li>
									);
								})}
						</ul>
					</AnimateHeight>
				</div>

				<div className={s.buttons}>
					<AnimateHeight
<<<<<<< HEAD
						height={(!showAddonsButton && !open) || selectedModelAddons.length === 0 ? 0 : 'auto'}
=======
						height={
							(!showAddonsButton && !open && isDesktop) || selectedModelAddons.length === 0
								? 0
								: 'auto'
						}
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
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
<<<<<<< HEAD
					<button id='add-to-cart-button' onClick={() => handleAddToCart(false)} className={s.addToCart}>
=======
					<button
						id='add-to-cart-button'
						onClick={() => handleAddToCart(false)}
						className={s.addToCart}
					>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
						Add to cart
					</button>
				</div>
				<div className={s.expand}>
<<<<<<< HEAD
					<button type='button' className={cn(s.toggle, s.expand)} onClick={() => setExpanded(!expanded)}>
=======
					<button
						type='button'
						className={cn(s.toggle, s.expand)}
						onClick={() => setExpanded(!expanded)}
					>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
						{expanded ? <GoChevronLeft size={16} /> : <GoChevronRight size={16} />}
					</button>
				</div>
			</div>

			{modal === 'show' && (
				<Modal>
					<div className={s.modal} role='alert'>
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
							<button className={s.close} onClick={() => setModal('hide')} aria-label='Close'>
								<img src={'/images/close.svg'} alt='close' />
							</button>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
}

<<<<<<< HEAD
function getAllAddons(product: ProductPageDataProps['product'], shopify: ProductPageDataProps['shopify']): Addon[] {
=======
function getAllAddons(
	product: ProductPageDataProps['product'],
	geins: ProductPageDataProps['geins'],
): Addon[] {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	return product?.models
		.map(({ id: modelId, accessories, lightsources }) => [
			...accessories.map(({ __typename, id, accessory }) => ({
				__typename,
				id,
				modelId,
<<<<<<< HEAD
				variantId: shopify.accessories.find((p) => p?.variants.edges[0].node.sku === accessory?.articleNo)?.variants
					.edges[0].node.id,
				name: `1 x ${accessory?.name}`,
				price: shopify.accessories.find((p) => p?.variants.edges[0].node.sku === accessory?.articleNo)?.variants
					.edges[0].node.price,
				imageUrl: shopify.accessories.find((p) => p?.variants.edges[0].node.sku === accessory?.articleNo)?.variants
					.edges[0].node.image?.url,
=======
				variantId: geins.accessories.find((p) => p?.articleNumber === accessory?.articleNo)
					?.skus?.[0]?.skuId,
				name: `1 x ${accessory?.name}`,
				price: geins.accessories.find((p) => p?.articleNumber === accessory?.articleNo)?.unitPrice
					?.sellingPriceIncVat,
				imageUrl: getProductImageUrl(
					geins.accessories.find((p) => p?.articleNumber === accessory?.articleNo) as ProductType,
				),

>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
				quantity: 1,
			})),
			...lightsources
				.filter(({ included }) => !included)
				.map(({ __typename, id, lightsource, amount }) => ({
					__typename,
					id,
					modelId,
<<<<<<< HEAD
					variantId: shopify.lightsources.find((p) => p?.variants.edges[0].node.sku === lightsource?.articleNo)
						?.variants.edges[0].node.id,
					name: `${amount} x ${lightsource?.name}`,
					price: shopify.lightsources.find((p) => p?.variants.edges[0].node.sku === lightsource?.articleNo)?.variants
						.edges[0].node.price,
					imageUrl: shopify.lightsources.find((p) => p?.variants.edges[0].node.sku === lightsource?.articleNo)?.variants
						.edges[0].node.image?.url,
=======
					variantId: geins.lightsources.find((p) => p?.articleNumber === lightsource?.articleNo)
						?.skus?.[0]?.skuId,
					name: `${amount} x ${lightsource?.name}`,
					price: geins.lightsources.find((p) => p?.articleNumber === lightsource?.articleNo)
						?.unitPrice?.sellingPriceIncVat,
					imageUrl: getProductImageUrl(
						geins.lightsources.find(
							(p) => p?.articleNumber === lightsource?.articleNo,
						) as ProductType,
					),
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
					quantity: amount,
				})),
		])
		.flat() as Addon[];
}
