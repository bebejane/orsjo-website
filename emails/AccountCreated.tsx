import React from "react";
import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";
import { Template } from "mailing-core";
import Button from "./components/Button";
import Header from "./components/Header";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import Footer from "./components/Footer";
import BaseLayout from "./components/BaseLayout";
import Text from "./components/Text";
import { spacing, fontSize, letterSpacing, textTransform } from "./theme";

type AccountCreatedProps = { name: string };

const AccountCreated: Template<AccountCreatedProps> = ({ name }) => (
  <BaseLayout width={600} preview="Excited to help you enjoy great meals.">
    <Header loose />
    <MjmlSection cssClass="lg-gutter" paddingBottom={spacing.s9}>
      <MjmlColumn>
        <MjmlImage
          align="left"
          src="https://s3.amazonaws.com/lab.campsh.com/bb-hero%402x.jpg"
        />
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection cssClass="gutter">
      <MjmlColumn>
        <SubHeading paddingBottom={spacing.s7}>Nytt projekt</SubHeading>
        <Heading fontSize={fontSize.lg}>Aira av Jonas Bohlin</Heading>
        <Text paddingTop={spacing.s7} paddingBottom={spacing.s7}>
          Örsjö Belysning och Folkform fortsätter sitt samarbete och lanserar Plissé White Edition. I den skulpturala serien armaturer helt i vit textil utmanas plisseringens finkänsliga konst.

          Lampan blev nyligen utsedd till ”Årets Belysning 2022” av tidningen Residence med motiveringen: ”Ett sofistikerat ljussmycke som lyfter in det försummade plisseringshantverket i ett samtida sammanhang”.

          Plissé White Edition finns på i vårt uppdaterade showroom på B3 som nu är öppet för besök igen.
        </Text>
        <Button href="https://www.mailing.run">Läs mer</Button>
      </MjmlColumn>
    </MjmlSection>
    <Footer includeUnsubscribe />
  </BaseLayout>
);

AccountCreated.subject = ({ name }) => `Welcome to BookBook, ${name}!`;

export default AccountCreated;
