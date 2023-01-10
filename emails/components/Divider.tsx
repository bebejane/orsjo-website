import React from "react";
import { MjmlDivider } from "mjml-react";
import { colors, spacing } from "../theme";

type DividerProps = React.ComponentProps<typeof MjmlDivider>;

const defaultProps = {
  borderColor: colors.white,
  borderWidth: "1px",
  paddingTop: spacing.s10,
  paddingBottom: spacing.s10,
};

export default function Divider(props: DividerProps) {
  return <MjmlDivider {...defaultProps} {...props} />;
}
