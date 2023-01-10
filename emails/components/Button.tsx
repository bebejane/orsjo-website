import React from "react";
import { MjmlButton } from "mjml-react";

import { colors, fontSize, borderRadius, lineHeight, spacing, letterSpacing, textTransform } from "../theme";

type ButtonProps = React.ComponentProps<typeof MjmlButton>;

export default function Button(props: ButtonProps) {
  return (
    <>
      <MjmlButton
        lineHeight={lineHeight.tight}
        fontSize={fontSize.sm}
        height={spacing.s8}
        letterSpacing={letterSpacing.wide}
        textTransform={textTransform.big}
        align="left"
        backgroundColor={colors.black}
        color={colors.white}
        border="1px solid white"
        cssClass="light-mode"
        borderRadius="0px"
        {...props}
      />
    </>
  );
}
