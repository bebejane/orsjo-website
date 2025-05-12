import { MjmlButton } from 'mjml-react';
import {
	colors,
	fontSize,
	borderRadius,
	lineHeight,
	spacing,
	letterSpacing,
	textTransform,
} from './theme';

type ButtonProps = React.ComponentProps<typeof MjmlButton>;

export default function Button(props: ButtonProps) {
	return (
		<>
			<MjmlButton
				lineHeight={lineHeight.tight}
				fontSize={fontSize.sm}
				height={spacing.s10}
				paddingLeft={spacing.s11}
				paddingRight={spacing.s11}
				width='100%'
				align='center'
				letterSpacing={letterSpacing.wide}
				textTransform={textTransform.big}
				backgroundColor={colors.trasparent}
				color={colors.white}
				border='1px solid white'
				cssClass='light-mode'
				borderRadius='0px'
				{...props}
				paddingTop={spacing.s7}
			/>
		</>
	);
}
