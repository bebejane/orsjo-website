import React from "react";
import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";
import { colors, fontSize, spacing } from "../theme";
import SubHeading from "./SubHeading";
import Text from "./Text";
import Divider from "./Divider";


type HeaderProps = {
  loose?: boolean;
};

const Header: React.FC<HeaderProps> = ({ loose }) => {
  return (
    <>
      <MjmlSection paddingTop={spacing.s9} backgroundColor={colors.black}>
        <MjmlColumn width="100%">
          <mj-image width="45px"
            src="https://www.datocms-assets.com/62617/1673436119-logo_mail.png" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn width="100%">
          <SubHeading align="center" paddingTop={spacing.s6}>News from Örsjö Belysning</SubHeading>
          <Text paddingTop={spacing.s3} align="center" fontSize={fontSize.sm} color={colors.neutral500}>Open in Browser</Text>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <Divider></Divider>
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

export default Header;
