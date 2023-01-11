import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";
import { Template } from "mailing-core";
import Button from "./components/Button";
import Header from "./components/Header";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import Footer from "./components/Footer";
import BaseLayout from "./components/BaseLayout";
import Text from "./components/Text";
import Divider from "./components/Divider";
import { spacing, fontSize, letterSpacing, textTransform, colors } from "./theme";

type AccountCreatedProps = { name: string };

const AccountCreated: Template<AccountCreatedProps> = ({ name }) => (
  <BaseLayout width={600} preview="Excited to help you enjoy great meals.">
    <Header loose />
    <MjmlSection cssClass="lg-gutter" paddingBottom={spacing.s9}>
      <MjmlColumn>
        <MjmlImage
          align="left"
          src="https://www.datocms-assets.com/62617/1673417732-ranka_vit.png"
        />
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection cssClass="gutter">
      <MjmlColumn>
        <SubHeading paddingBottom={spacing.s7}>Inbjudan</SubHeading>
        <Heading fontSize={fontSize.lg}>Frukostföreläsningar & förhandsvisning</Heading>
        <Text paddingTop={spacing.s7}>
          Starta din dag under Stockholm Design week med en riktigt designboost! Vi introducerar en nyhet varje morgon under veckan och bjuder samtidigt på en riktigt bra frukost från Fabrique stenugnsbageri.
          Varje morgon presenterar en av våra formgivare en ny produkt.
          <p>
            Tisdag 7 februari:         Sun badrumslampa av Addi<br />
            Onsdag 8 februari:         Ranka av Jonas Bohlin<br />
            Torsdag 9 februari:        Cake av Lars Bülow<br />
          </p>
        </Text>
        <Button href="https://www.mailing.run">Anmäl dig här</Button>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection>
      <MjmlColumn>
        <Divider></Divider>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection cssClass="green" backgroundColor={colors.green}>
      <MjmlColumn cssClass="green">
        <SubHeading cssClass="padding" paddingTop={spacing.s7} paddingBottom={spacing.s6} paddingLeft={spacing.s7} paddingRight={spacing.s7}>Inbjudan</SubHeading>
        <Text paddingRight={spacing.s7} paddingLeft={spacing.s7}>
          Starta din dag under Stockholm Design week med en riktigt designboost! Vi introducerar en nyhet varje morgon under veckan och bjuder samtidigt på en riktigt bra frukost från Fabrique stenugnsbageri.
        </Text>
        <Button href="https://www.mailing.run" paddingBottom={spacing.s7} paddingLeft={spacing.s7} paddingRight={spacing.s7}>Anmäl dig här</Button>
      </MjmlColumn>
      <MjmlColumn>
        <MjmlImage
          cssClass="lg-hidden"
          align="center"
          src="https://www.datocms-assets.com/62617/1667455852-vinge.jpg"
        />
      </MjmlColumn>

    </MjmlSection>
    <MjmlSection cssClass="lg-gutter" paddingBottom={spacing.s9}>
      <MjmlColumn>
        <Divider></Divider>
        <MjmlImage cssClass="margin"
          align="left"
          src="https://www.datocms-assets.com/62617/1673417732-ranka_vit.png"
        />
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection cssClass="gutter">
      <MjmlColumn>
        <SubHeading paddingBottom={spacing.s7}>Inbjudan</SubHeading>
        <Heading fontSize={fontSize.lg}>Frukostföreläsningar & förhandsvisning</Heading>
        <Text paddingTop={spacing.s7}>
          Starta din dag under Stockholm Design week med en riktigt designboost! Vi introducerar en nyhet varje morgon under veckan och bjuder samtidigt på en riktigt bra frukost från Fabrique stenugnsbageri.
          Varje morgon presenterar en av våra formgivare en ny produkt.
          <p>
            Tisdag 7 februari:         Sun badrumslampa av Addi<br />
            Onsdag 8 februari:         Ranka av Jonas Bohlin<br />
            Torsdag 9 februari:        Cake av Lars Bülow<br />
          </p>
        </Text>
        <Button href="https://www.mailing.run">Anmäl dig här</Button>
      </MjmlColumn>
    </MjmlSection>
    <Footer includeUnsubscribe />
  </BaseLayout >
);

AccountCreated.subject = ({ name }) => `Welcome to BookBook, ${name}!`;

export default AccountCreated;
