import React from "react";
import Text from "./Text";
import Heading from "./Heading";
import { fontFamily, lineHeight, fontWeight, fontSize, letterSpacing, textTransform } from "../theme";

type SubHeadingProps = React.ComponentProps<typeof Text>;

const defaultProps = {

};

export default function SubHeading(props: SubHeadingProps) {
  return (
    <Heading fontSize={fontSize.sm} letterSpacing={letterSpacing.wide} textTransform={textTransform.big} >
      <Text {...defaultProps} {...props}>
        {props.children}
      </Text>
    </Heading>
  );
}
