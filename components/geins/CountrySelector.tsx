'use client';

import {
	Button,
	ListBox,
	ListBoxItem,
	Popover,
	Select,
	SelectValue,
	Key,
} from 'react-aria-components';
import s from './CountrySelector.module.scss';
import cn from 'classnames';
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useRef } from 'react';
import { usePage } from '@/lib/context/page-provider';

type CountrySelectProps = {
	className?: string;
	markets: MarketType[];
	currency?: boolean;
};

export default function CountrySelector({ className, markets }: CountrySelectProps) {
	const pathname = usePathname();
	const router = useRouter();
	const locale = useLocale();
	const { inverted } = usePage();
	const buttonRef = useRef<HTMLButtonElement>(null);
	const formRef = useRef<HTMLFormElement>(null);
	const popupRef = useRef<HTMLDivElement>(null);

	const handleChange = (val: Key | null) => {
		if (!val) return;
		const newCountryCode = val.toString().toLowerCase();
		router.replace(pathname.replace(`/${locale}`, '/'), { locale: newCountryCode });
		router.refresh();
	};

	const selectedCountry = markets.find(
		(c) => c.country?.code.toLowerCase() === locale.toLowerCase(),
	);

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
				onChange={handleChange}
				defaultOpen={false}
				aria-label='Select country'
			>
				<Button className={cn(s.button, inverted && s.inverted)} ref={buttonRef}>
					<SelectValue className={s.value} key={locale}>
						{selectedCountry?.currency?.code}
					</SelectValue>
					<span aria-hidden='true' className={cn(s.arrow, 'symbol')}>
						›
					</span>
				</Button>
				<Popover
					placement='top right'
					className={s.popover}
					maxHeight={300}
					ref={popupRef}
					isNonModal={false}
				>
					<ListBox
						selectionMode={'single'}
						className={cn('small', s.options)}
						items={markets.map(({ country, currency }) => ({
							id: country?.code,
							name: `${country?.name} ${currency?.code}`,
						}))}
					>
						{markets
							.sort((a, b) =>
								a.country && b.country && a.country?.name > b.country?.name ? 1 : -1 || 1,
							)
							.map(({ country, currency }, idx) => (
								<ListBoxItem
									id={country?.code}
									key={idx}
									className={cn(
										s.option,
										selectedCountry?.country?.code.toLowerCase() === country?.code.toLowerCase() &&
											s.selected,
									)}
								>
									{country?.name} <span className='small'>{currency?.code}</span>
								</ListBoxItem>
							))}
					</ListBox>
				</Popover>
			</Select>
		</form>
	);
}
