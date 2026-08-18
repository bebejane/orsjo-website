import '@/pricelist/styles/index.scss';

export const dynamic = 'force-dynamic';

export default async function CatalogueLayout({ children }: LayoutProps<'/pricelist'>) {
	return (
		<html lang='en-US'>
			<body id='root'>{children}</body>
		</html>
	);
}
