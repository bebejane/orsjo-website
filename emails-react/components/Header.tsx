import { Section, Column, Img } from '@react-email/components';
import { colors, fontSize, spacing } from './theme';
import SubHeading from './SubHeading';
import Text from './Text';
import Divider from './Divider';

type HeaderProps = {
	loose?: boolean;
	openInBrowser?: boolean;
	title?: string;
};

const Header: React.FC<HeaderProps> = ({ loose, title, openInBrowser = false }) => {
	return (
		<>
			<Section
				style={{ paddingTop: spacing.s10, backgroundColor: colors.black }}
				className='lg-hidden'
			>
				<Column width='100%'>
					<Img width='45px' src='https://www.datocms-assets.com/62617/1673342405-logo-email.png' />
				</Column>
			</Section>
			<Section>
				<Column width='100%'>
					<SubHeading style={{ textAlign: 'center', paddingTop: spacing.s6 }}>{title}</SubHeading>
					{openInBrowser && (
						<Text
							style={{
								paddingTop: spacing.s3,
								textAlign: 'center',
								fontSize: fontSize.sm,
								color: colors.neutral500,
							}}
						>
							Open in Browser
						</Text>
					)}
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
