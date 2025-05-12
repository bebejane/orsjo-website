import { Hr as Divider } from '@react-email/components';
import { colors, spacing } from './theme';

type DividerProps = React.ComponentProps<typeof Divider>;

const defaultProps = {
	borderColor: colors.white,
	borderWidth: '1px',
	paddingTop: spacing.s9,
	paddingBottom: spacing.s9,
};

export default function divider(props: DividerProps) {
	return <Divider {...defaultProps} {...props} />;
}
