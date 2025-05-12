import { Text as TextComponent } from '@react-email/components';

type TextProps = {
	maxWidth?: number;
} & React.ComponentProps<typeof TextComponent>;

export default function Text({ children, maxWidth, ...props }: TextProps) {
	if (maxWidth) {
		return (
			<TextComponent {...props} className='text'>
				<div style={{ maxWidth }}>{children}</div>
			</TextComponent>
		);
	} else
		return (
			<TextComponent {...props} className='text'>
				{children}
			</TextComponent>
		);
}
