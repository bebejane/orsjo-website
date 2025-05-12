import { Button } from '@react-email/components';
import {
	colors,
	fontSize,
	borderRadius,
	lineHeight,
	spacing,
	letterSpacing,
	textTransform,
} from './theme';

type ButtonProps = React.ComponentProps<typeof Button>;

export default function button(props: ButtonProps) {
	return (
		<>
			<Button
				className={'light-mode'}
				style={{
					lineHeight: lineHeight.tight,
					fontSize: fontSize.sm,
					height: spacing.s10,
					paddingLeft: spacing.s11,
					paddingRight: spacing.s11,
					width: '100%',
					//align: 'center',
					letterSpacing: letterSpacing.wide,
					textTransform: 'uppercase',
					//textTransform: textTransform.big,
					backgroundColor: colors.trasparent,
					color: colors.white,
					border: '1px solid white',
					borderRadius: borderRadius.base,
					...props,
				}}
			/>
		</>
	);
}
