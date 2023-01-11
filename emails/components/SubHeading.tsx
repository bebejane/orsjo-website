import React from "react";
import Text from "./Text";
import { fontFamily, lineHeight, fontWeight, fontSize, letterSpacing, textTransform, textAlign } from "../theme";

type SubHeadingProps = React.ComponentProps<typeof Text>;

const defaultProps = {
  fontFamily: fontFamily.sans,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.tight,
  fontSize: fontSize.sm,
  letterSpacing: letterSpacing.wide,
  textTransform: textTransform.big,
  //align: textAlign.left,
};

export default function SubHeading(props: SubHeadingProps) {
  return (
    <Text {...defaultProps} {...props}>
      {props.children}
    </Text>
  );
}
