'use client';

import s from './Shop.module.scss';
import cn from 'classnames';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { formatGeinsPrice, getProductImageUrl } from '@/geins/utils';
import { useWindowSize } from 'usehooks-ts';
import useCart, { useShallow } from '@/geins/hooks/useCart';
import useStore from '@/lib/store';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { GoChevronLeft, GoChevronRight, GoX } from 'react-icons/go';
import AnimateHeight from 'react-animate-height';
import { generateProductTitle, parseProductModelName, deliveryDaysText } from '@/lib/utils';
import { RiCheckFill } from 'react-icons/ri';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { ProductPageDataProps } from '@/app/[locale]/products/utils';
import { Modal } from 'next-dato-utils/components';
import useIsDesktop from '@/lib/hooks/useIsDesktop';

type Props = {
	product: ProductPageDataProps['product'];
	geins: ProductPageDataProps['geins'];
	variantId?: number;
	shipping: ShippingQuery['shipping'];
};

type Addon = {
	__typename: string;
	id: string;
	modelId: string;
	variantId: number;
	name: string;
	price: number;
	imageUrl?: string;
	quantity: number;
};

export default function ProductShop({ product, geins, variantId, shipping }: Props) {
	const countryCode = geins.i18n.countryCode;
	const allVariants = product?.models.map(({ variants }) => variants).flat() ?? [];
	const allAddons = getAllAddons(product, geins);
	const isDesktop = useIsDesktop();
	const [desktopStyles, setDesktopStyles] = useState<CSSProperties>({});
	const [cart, addToCart, updating, error] = useCart(
		useShallow((state) => [state.cart, state.addToCart, state.updating, state.error]),
	);
	const [setShowCart] = useStore(useShallow((state) => [state.setShowCart]));
	const [hide, setHide] = useState<boolean>(false);
	const [wasHidden, setWasHidden] = useState<boolean>(false);
	const [open, setOpen] = useState(false);
	const [expanded, setExpanded] = useState(false);
	const [showAddons, setShowAddons] = useState(false);
	const [addons, setAddons] = useState<Addon[]>([]);
	const [showAddonsButton, setShowAddonsButton] = useState(false);
	const [selected, setSelected] = useState<any | null>(null);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const selectedModel = product?.models.find(({ variants }) =>
		variants.find((v) => v.id === selected?.id),
	);
	const selectedModelAddons = allAddons.filter((a) => a.modelId === selectedModel?.id);
	const selectedGeinsVariant = geins.products?.find(
		(v) => v.articleNumber && v.articleNumber === selected?.articleNo.trim(),
	);

	const [modal, setModal] = useState<'show' | 'hide' | 'dismiss'>('hide');
	const { width, height } = useWindowSize();
	const { scrolledPosition, viewportHeight, documentHeight } = useScrollInfo();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!variantId) return setSelected(allVariants?.[0] ?? null);

		const geinsVariant = geins.products?.find((v) => v.productId === variantId);
		if (geinsVariant) {
			setSelected(
				allVariants.find((v) => v.articleNo?.trim() === geinsVariant?.articleNumber) ?? null,
			);
			setHide(false);
		}
	}, [variantId]);

	useEffect(() => {
		setOpen(false);
	}, [selected]);

	useEffect(() => {
		updateTotalPrice();
		setAddons([]);
	}, [selectedGeinsVariant]);

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
				scrolledPosition + viewportHeight > (section?.offsetTop || documentHeight - viewportHeight),
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
		else setAddons((addons) => [...addons, addon]);
		setOpen(false);
	}

	function handleAddToCart(withoutLightsource?: boolean) {
		if (!selectedGeinsVariant || !selectedModel) return;

		const noLightsourceIncluded =
			selectedModel.lightsources.length && !selectedModel.lightsources.find((l) => l.included);
		const lightsourceAdded = addons.find((a) => a.modelId === selectedModel?.id);

		if (noLightsourceIncluded && modal !== 'dismiss' && !lightsourceAdded && !withoutLightsource) {
			setModal('show');
			return;
		}

		const variants: CartItemInputType[] = [
			{
				skuId: selectedGeinsVariant?.skus?.[0]?.skuId ?? null,
				quantity: 1,
			},
			...addons.map((a) => ({ skuId: a.variantId, quantity: a.quantity })),
		];

		variants
			.filter(({ skuId }) => skuId !== undefined)
			.reverse()
			.forEach((item) => addToCart(item, countryCode));

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
				style={desktopStyles}
				onMouseEnter={() => setShowAddonsButton(true)}
				onMouseLeave={() => !showAddons && setShowAddonsButton(false)}
			>
				<header>
					<h3>
						Shop {product.title}{' '}
						{addons.length > 0 && <span className={s.addons}>+ {addons.length}</span>}
					</h3>
					<span key={totalPrice} className={s.price}>
						{formatGeinsPrice(totalPrice, geins.i18n.currencyCode)}
					</span>
				</header>

				<hr />

				<AnimateHeight height={!open ? 0 : 'auto'} duration={400} style={{ position: 'relative' }}>
					<div id='models' className={cn(s.models)}>
						{product.models.map((model) => (
							<ul className={cn(s.variants)} key={model.id}>
								{model.variants.map((variant) => {
									const { id, articleNo } = variant;
									const geinsVariant = geins.products?.find(
										(v) => articleNo && v.articleNumber === articleNo,
									);

									const title = generateProductTitle(product as ProductRecord, variant.id);
									const { name, description } = parseProductModelName(
										model as ProductModelRecord,
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
													{getProductImageUrl(geinsVariant as ProductType) && (
														<img src={getProductImageUrl(geinsVariant as ProductType)} />
													)}
												</div>
												<span className={s.name}>
													<strong>{name}</strong> {description}
												</span>
												{variant.deliveryDays && (
													<div
														className={cn(s.delivery, s[variant.deliveryDays])}
														title={deliveryDays}
													/>
												)}
												<span className={s.price}>
													{formatGeinsPrice(
														geinsVariant?.unitPrice?.sellingPriceIncVat,
														geinsVariant?.unitPrice?.currency?.code,
													)}
												</span>{' '}
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
						className={s.row}
						title={`${selectedModel?.name?.name ?? ''} ${[selected.color?.name, selected.material?.name, selected.feature?.name].filter(Boolean).join(', ')}`}
						onClick={handleToggleOpen}
					>
						<div className={s.thumb}>
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
						</span>
						<span className={s.price}>
							{formatGeinsPrice(
								selectedGeinsVariant?.unitPrice?.sellingPriceIncVat,
								selectedGeinsVariant?.unitPrice?.currency?.code,
							)}
						</span>
						<button className={cn(s.dropdown, open && s.open)}>❯</button>
					</div>

					{addons.map(({ id, name, variantId, imageUrl }, idx) => {
						return (
							<div
								key={idx}
								className={cn(
									s.row,
									s.addon,
									addons.find((a) => a.variantId === variantId) && s.selected,
								)}
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

				<div id={'addons'} className={cn(s.addons)} key={selectedGeinsVariant?.productId}>
					<input type='hidden' name='model' value={selectedGeinsVariant?.productId} />
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
													addons.find((a) => isSelected && s.selected),
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
												<span className={s.price}>
													{formatGeinsPrice(price, geins.i18n.currencyCode, quantity)}
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
					<button
						id='add-to-cart-button'
						onClick={() => handleAddToCart(false)}
						className={s.addToCart}
					>
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

function getAllAddons(
	product: ProductPageDataProps['product'],
	geins: ProductPageDataProps['geins'],
): Addon[] {
	return product?.models
		.map(({ id: modelId, accessories, lightsources }) => [
			...accessories.map(({ __typename, id, accessory }) => ({
				__typename,
				id,
				modelId,
				variantId: geins.accessories.find((p) => p?.articleNumber === accessory?.articleNo)
					?.skus?.[0]?.skuId,
				name: `1 x ${accessory?.name}`,
				price: geins.accessories.find((p) => p?.articleNumber === accessory?.articleNo)?.unitPrice
					?.regularPriceIncVat,
				imageUrl: getProductImageUrl(
					geins.accessories.find((p) => p?.articleNumber === accessory?.articleNo) as ProductType,
				),

				quantity: 1,
			})),
			...lightsources
				.filter(({ included }) => !included)
				.map(({ __typename, id, lightsource, amount }) => ({
					__typename,
					id,
					modelId,
					variantId: geins.lightsources.find((p) => p?.articleNumber === lightsource?.articleNo)
						?.skus?.[0]?.skuId,
					name: `${amount} x ${lightsource?.name}`,
					price: geins.lightsources.find((p) => p?.articleNumber === lightsource?.articleNo)
						?.unitPrice?.regularPriceIncVat,
					imageUrl: getProductImageUrl(
						geins.lightsources.find(
							(p) => p?.articleNumber === lightsource?.articleNo,
						) as ProductType,
					),
					quantity: amount,
				})),
		])
		.flat() as Addon[];
}
