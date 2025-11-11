'use client';

import { Button, ListBox, ListBoxItem, Popover, Select, SelectValue, Key } from 'react-aria-components';
import s from './CountrySelector.module.scss';
import cn from 'classnames';
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize, useClickAway } from 'react-use';
import { usePage } from '@/lib/context/page-provider';

type CountrySelectProps = {
	className?: string;
	localization: LocalizationQuery['localization'];
	currency?: boolean;
};

export default function CountrySelector({ className, localization: { availableCountries } }: CountrySelectProps) {
	const pathname = usePathname();
	const router = useRouter();
	const country = useLocale();
	const { inverted } = usePage();
	const [selectOpen, setSelectOpen] = useState(false);
	const { width, height } = useWindowSize();
	const [selectWidth, setSelectWidth] = useState(0);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const formRef = useRef<HTMLFormElement>(null);
	const popupRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setSelectWidth(buttonRef.current?.scrollWidth ? buttonRef.current?.scrollWidth : 0);
	}, [width, height]);

	useEffect(() => {
		setTimeout(() => {
			setSelectWidth(buttonRef.current?.scrollWidth ? buttonRef.current?.scrollWidth : 0);
		}, 100);
	}, []);

	const handleChange = (val: Key | null) => {
		if (!val) return;
		const newCountryCode = val.toString().toLowerCase();
		router.replace(pathname.replace(`/${country}`, '/'), { locale: newCountryCode });
		router.refresh();
	};
	const selectedCountry = availableCountries.find(({ isoCode }) => isoCode.toLowerCase() === country.toLowerCase());

	return (
		<form
			className={cn(s.form, className)}
			onSubmit={(e) => {
				e.preventDefault();
			}}
			ref={formRef}
			aria-label={'Select country'}
		>
			<Select className={cn('small', s.select)} onChange={handleChange} defaultOpen={false} aria-label='Select country'>
				<Button className={cn(s.button, inverted && s.inverted)} ref={buttonRef}>
					<SelectValue className={s.value} key={country}>
						{selectedCountry?.currency.isoCode}
					</SelectValue>
					<span aria-hidden='true' className={cn(s.arrow, 'symbol')}>
						{!selectOpen ? '›' : '›'}
					</span>
				</Button>
				<Popover placement='top right' className={s.popover} maxHeight={300} ref={popupRef} isNonModal={false}>
					<ListBox
						selectionMode={'single'}
						className={cn('small', s.options)}
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
									{name} <span className='small'>{currency.isoCode}</span>
								</ListBoxItem>
							))}
					</ListBox>
				</Popover>
			</Select>
		</form>
	);
}
