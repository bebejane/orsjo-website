import React from "react";
import { MjmlSection, MjmlColumn, MjmlText } from "mjml-react";
import { EMAIL_PREFERENCES_URL } from "mailing-core";
import { colors, fontSize, spacing } from "../theme";
import Divider from "./Divider";
import SubHeading from "./SubHeading";
import Text from "./Text";

type FooterProps = {
  includeUnsubscribe?: boolean;
};

export default function Footer({ includeUnsubscribe }: FooterProps) {
  return (
    <>
      <MjmlSection>
        <MjmlColumn>
          <Divider></Divider>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection paddingBottom={spacing.s10}>
        <MjmlColumn width="45px">
          <mj-image width="45px"
            src="https://www.datocms-assets.com/62617/1673342405-logo-email.png" />
        </MjmlColumn>
        <MjmlColumn width="555px">
          <Text align="right">
            <SubHeading align="right"><a textDecoration="none" href="https://www.orsjo.com">Website</a>  <a href="https://www.instagram.com/orsjo_belysning">Instagram</a>  <a href="https://www.facebook.com/orsjobelysning">Facebook</a></SubHeading>
          </Text>
          <Text paddingTop={spacing.s3} align="right" fontSize={fontSize.sm} color={colors.neutral500}>Unsubscribe</Text>
        </MjmlColumn>
      </MjmlSection>
    </>
  );
}
