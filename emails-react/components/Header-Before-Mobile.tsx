import { Section, Column, Img } from '@react-email/components';
import { colors, spacing, fontSize } from './theme';
import SubHeading from './SubHeading';
import Text from './Text';
import Divider from './Divider';

type HeaderProps = {
	loose?: boolean;
};

const Header: React.FC<HeaderProps> = ({ loose }) => {
	return (
		<>
			<Section style={{ paddingTop: spacing.s10 }} className='lg-hidden'>
				<Column width='45px'>
					<Img width='45px' src='https://www.datocms-assets.com/62617/1673342405-logo-email.png' />
				</Column>
				<Column width='555px'>
					<Text style={{ textAlign: 'right' }}>
						<SubHeading style={{ textAlign: 'right' }}>News from Örsjö Belysning</SubHeading>
					</Text>
					<Text
						style={{
							paddingTop: spacing.s3,
							textAlign: 'right',
							fontSize: fontSize.sm,
							color: colors.neutral500,
						}}
					>
						Open in Browser
					</Text>
				</Column>
			</Section>
			<Section
				style={{ paddingTop: spacing.s10, backgroundColor: colors.black }}
				className='sm-hidden'
			>
				<Column width='100%'>
					<Img width='45px' src='https://www.datocms-assets.com/62617/1673342405-logo-email.png' />
				</Column>
				<Column width='100%'>
					<SubHeading style={{ textAlign: 'center', paddingTop: spacing.s6 }}>
						News from Örsjö Belysning
					</SubHeading>
					<Text
						style={{
							textAlign: 'center',
							fontSize: fontSize.sm,
							color: colors.neutral500,
							paddingTop: spacing.s3,
						}}
					>
						Open in Browser
					</Text>
				</Column>
			</Section>
			<Section>
				<Column>
					<Divider></Divider>
				</Column>
			</Section>
		</>
	);
};

export default Header;
