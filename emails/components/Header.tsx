import { MjmlSection, MjmlColumn, MjmlImage } from 'mjml-react';
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
			<MjmlSection paddingTop={spacing.s9} backgroundColor={colors.black}>
				<MjmlColumn width='100%'>
					<MjmlImage
						width='45px'
						src='https://www.datocms-assets.com/62617/1673342405-logo-email.png'
					/>
				</MjmlColumn>
			</MjmlSection>
			<MjmlSection>
				<MjmlColumn width='100%'>
					<SubHeading align='center' paddingTop={spacing.s6}>
						{title}
					</SubHeading>
					{openInBrowser && (
						<Text
							paddingTop={spacing.s3}
							align='center'
							fontSize={fontSize.sm}
							color={colors.neutral500}
						>
							Open in Browser
						</Text>
					)}
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
