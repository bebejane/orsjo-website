import Text from './Text';
import {
	fontFamily,
	lineHeight,
	fontWeight,
	fontSize,
	letterSpacing,
	textTransform,
} from './theme';

type HeadingProps = React.ComponentProps<typeof Text>;

const defaultProps = {
	fontFamily: fontFamily.sans,
	fontWeight: fontWeight.normal,
	lineHeight: lineHeight.tight,
	fontSize: fontSize.lg,
	letterSpacing: letterSpacing.normal,
	textTransform: textTransform.normal,
};

export default function Heading(props: HeadingProps) {
	return (
		<Text {...defaultProps} {...props}>
			{props.children}
		</Text>
	);
}
