export type Pricelist = {
	label: string;
	path: string;
	cover?: boolean;
};

export const pricelists: Pricelist[] = [
	{
		label: 'Full',
		path: 'full',
		cover: true,
	},
	{
		label: 'Light',
		path: 'light',
	},
	{
		label: 'Light (inc. vat)',
		path: 'light-with-tax',
	},
	{
		label: 'Inc. lightsource',
		path: 'with-lightsource',
	},
	{
		label: 'Without prices',
		path: 'noprice',
	},
];
