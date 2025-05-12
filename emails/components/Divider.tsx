import { MjmlDivider } from 'mjml-react';
import { colors, spacing } from './theme';

type DividerProps = React.ComponentProps<typeof MjmlDivider>;

const defaultProps = {
	borderColor: colors.white,
	borderWidth: '1px',
	paddingTop: spacing.s9,
	paddingBottom: spacing.s9,
};

export default function Divider(props: DividerProps) {
	return <MjmlDivider {...defaultProps} {...props} />;
}
