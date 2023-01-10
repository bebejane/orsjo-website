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
      <MjmlSection paddingTop={spacing.s10}>
        <MjmlColumn width="45px">
          <mj-image width="45px"
            src="https://www.datocms-assets.com/62617/1673342405-logo-email.png" />
        </MjmlColumn>
        <MjmlColumn width="555px">
          <Text align="right">
            <SubHeading align="right">News from Örsjö Belysning</SubHeading>
          </Text>
          <Text paddingTop={spacing.s3} align="right" fontSize={fontSize.sm} color={colors.neutral500}>Open in Browser</Text>
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
