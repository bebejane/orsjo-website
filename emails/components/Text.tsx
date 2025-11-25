import { Text as ExtendedText, TextProps } from '@react-email/components';

type Props = TextProps & {
	maxWidth?: number;
};

export default function Text({ children, maxWidth, ...props }: Props) {
	if (maxWidth) {
		return (
			<ExtendedText {...props} className='text'>
				<div style={{ ...props.style, maxWidth }}>{children}</div>
			</ExtendedText>
		);
	} else
		return (
			<ExtendedText {...props} className='text'>
				{children}
			</ExtendedText>
		);
}
