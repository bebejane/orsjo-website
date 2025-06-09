'use client';

import { Button, ListBox, ListBoxItem, Popover, Select, SelectValue, Key } from 'react-aria-components';
import s from './CountrySelector.module.scss';
import cn from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import useCountry from '@/lib/shopify/hooks/useCountry';
import { use, useEffect, useRef, useState } from 'react';
import { useWindowSize, useClickAway } from 'react-use';

export type Props = {
	className?: string;
	localization: LocalizationQuery['localization'];
	label?: string;
	modal?: boolean;
	currency?: boolean;
};

export default function CountrySelector({ className, label, modal = false, localization: { availableCountries } }: Props) {
	const pathname = usePathname();
	const router = useRouter();
	const country = useCountry();

	const [selectOpen, setSelectOpen] = useState(false);
	const { width, height } = useWindowSize();
	const [selectWidth, setSelectWidth] = useState(0);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const formRef = useRef<HTMLFormElement>(null);
	const popupRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setSelectWidth(buttonRef.current?.scrollWidth ? buttonRef.current?.scrollWidth - 10 : 0);
	}, [width, height]);

	useEffect(() => {
		setTimeout(() => {
			setSelectWidth(buttonRef.current?.scrollWidth ? buttonRef.current?.scrollWidth - 10 : 0);
		}, 100);
	}, []);

	const handleChange = (val: Key) => {
		const countryCode = val.toString();
		const path = `/${countryCode}${pathname.replace(`/${country.toLowerCase()}`, `/`)}`;
		const hash = window.location.hash ? '#' + window.location.hash : '';
		router.replace(`${path}${hash}`.toLowerCase());
	};

	const selectedCountry = availableCountries.find(({ isoCode }) => isoCode === country);

	return (
		<form
			className={cn(s.form, className)}
			onSubmit={(e) => {
				e.preventDefault();
			}}
			ref={formRef}
			aria-label={'Select country'}
		>
			<Select
				className={cn('small', s.select)}
				onSelectionChange={handleChange}
				defaultOpen={false}
			>
				<Button
					className={s.button}
					ref={buttonRef}
				>
					<SelectValue
						className={s.value}
						key={country}
					>
						{selectedCountry?.name} ({selectedCountry?.currency.isoCode})
					</SelectValue>
					<span
						aria-hidden='true'
						className={cn(s.arrow, 'symbol')}
					>
						{!selectOpen ? '›' : '›'}
					</span>
				</Button>
				<Popover
					placement='top left'
					className={s.popover}
					maxHeight={200}
					ref={popupRef}
				>
					<ListBox
						selectionMode={'single'}
						className={cn('small', s.options)}
						style={{ width: selectWidth }}
						items={availableCountries.map(({ isoCode, name, currency }) => ({
							id: isoCode,
							name: `${name} ${currency.isoCode}`,
						}))}
					>
						{availableCountries
							.sort((a, b) => (a.name > b.name ? 1 : -1))
							.map(({ isoCode, name, currency }, idx) => (
								<ListBoxItem
									id={isoCode}
									key={idx}
									className={cn(s.option, selectedCountry?.isoCode === isoCode && s.selected)}
								>
									{name} ({currency.isoCode})
								</ListBoxItem>
							))}
					</ListBox>
				</Popover>
			</Select>
		</form>
	);
}
