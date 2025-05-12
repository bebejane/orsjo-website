import { Row, Column } from '@react-email/components';

import { themeDefaults } from './theme';

type ListProps = {
	items: string[];
} & React.ComponentProps<typeof Row>;

export default function List({ items }: ListProps) {
	return (
		<>
			<table border={0} cellPadding={0} cellSpacing={0} role='presentation' width='100%'>
				{items.map((item, index) => (
					<tr key={index} className='text'>
						<td style={{ ...themeDefaults }} align='center' valign='top' width={25}>
							•
						</td>
						<td style={{ ...themeDefaults }}>{item}</td>
					</tr>
				))}
			</table>
		</>
	);
}
