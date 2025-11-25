import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";
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
      <MjmlSection >
        <MjmlColumn width="100%">
          <MjmlImage width="45px"
            src="https://www.datocms-assets.com/62617/1673342405-logo-email.png" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection paddingBottom={spacing.s10}>
        <MjmlColumn width="100%" paddingTop={spacing.s6}>
          <SubHeading align="center">
            <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/orsjo_belysning">Instagram</a> &nbsp; <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.orsjo.com">Website</a> &nbsp; <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.facebook.com/orsjobelysning">Facebook</a>
          </SubHeading>
          {includeUnsubscribe && <Text paddingTop={spacing.s3} align="center" fontSize={fontSize.sm} color={colors.neutral500}>Unsubscribe</Text>}
        </MjmlColumn>
      </MjmlSection>
    </>
  );
}
