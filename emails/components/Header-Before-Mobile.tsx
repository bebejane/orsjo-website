import { MjmlSection, MjmlColumn, MjmlImage } from 'mjml-react';
import { colors, fontSize, spacing } from './theme';
import SubHeading from './SubHeading';
import Text from './Text';
import Divider from './Divider';

type HeaderProps = {
	loose?: boolean;
};

const Header: React.FC<HeaderProps> = ({ loose }) => {
	return (
		<>
			<MjmlSection paddingTop={spacing.s10} cssClass='lg-hidden'>
				<MjmlColumn width='45px'>
					<MjmlImage
						width='45px'
						src='https://www.datocms-assets.com/62617/1673342405-logo-email.png'
					/>
				</MjmlColumn>
				<MjmlColumn width='555px'>
					<Text align='right'>
						<SubHeading align='right'>News from Örsjö Belysning</SubHeading>
					</Text>
					<Text
						paddingTop={spacing.s3}
						align='right'
						fontSize={fontSize.sm}
						color={colors.neutral500}
					>
						Open in Browser
					</Text>
				</MjmlColumn>
			</MjmlSection>
			<MjmlSection paddingTop={spacing.s10} backgroundColor={colors.black} cssClass='sm-hidden'>
				<MjmlColumn width='100%'>
					<MjmlImage
						width='45px'
						src='https://www.datocms-assets.com/62617/1673342405-logo-email.png'
					/>
				</MjmlColumn>
				<MjmlColumn width='100%'>
					<SubHeading align='center' paddingTop={spacing.s6}>
						News from Örsjö Belysning
					</SubHeading>
					<Text
						paddingTop={spacing.s3}
						align='center'
						fontSize={fontSize.sm}
						color={colors.neutral500}
					>
						Open in Browser
					</Text>
				</MjmlColumn>
			</MjmlSection>
			<MjmlSection>
				<MjmlColumn>
					<Divider></Divider>
				</MjmlColumn>
			</MjmlSection>
		</>
	);
};

export default Header;
