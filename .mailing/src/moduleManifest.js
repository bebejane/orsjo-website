var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// mailing.config.json
var mailing_config_default = {
  typescript: true,
  emailsDir: "./emails",
  outDir: "./emails/previews_html",
  anonymousId: "6342ca0b-93db-48c3-9938-223ebdebcc94"
};

// emails/index.ts
import * as dotenv from "../../node_modules/dotenv/lib/main.js";
import nodemailer from "../../node_modules/nodemailer/lib/nodemailer.js";
import { buildSendMail } from "../../node_modules/mailing-core/dist/mailing-core.cjs.js";
dotenv.config({ path: `${process.cwd()}/.env.local` });
var opt = {
  port: process.env.SMTP_PORT,
  host: process.env.SMTP_SERVER,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD
  },
  secure: false
};
var transport = nodemailer.createTransport(opt);
var sendMail = buildSendMail({
  transport,
  defaultFrom: "dev@konst-teknik.se",
  configPath: "./mailing.config.json"
});
var emails_default = sendMail;

// emails/AccountCreated.tsx
import { MjmlSection as MjmlSection3, MjmlColumn as MjmlColumn3, MjmlImage as MjmlImage3 } from "../../node_modules/mjml-react/dist/src/index.js";

// emails/components/Button.tsx
import { MjmlButton } from "../../node_modules/mjml-react/dist/src/index.js";

// emails/theme.ts
var colors = {
  black: "#000",
  white: "#FFF",
  green: "#1b5b44",
  neutral100: "#F5F5F5",
  neutral200: "#EEE",
  neutral400: "#888",
  neutral500: "#777",
  neutral600: "#666",
  neutral800: "#444",
  trasparent: "transparent"
};
var fontSize = {
  xs: 12,
  sm: 12,
  base: 17,
  lg: 24,
  xl: 30
};
var lineHeight = {
  tight: "125%",
  relaxed: "140%"
};
var fontWeight = {
  normal: 400,
  bold: 700
};
var letterSpacing = {
  normal: "0em",
  wide: ".1em"
};
var textTransform = {
  normal: "none",
  big: "uppercase"
};
var fontFamily = {
  sans: 'Indivisible, Inter, -apple-system, BlinkMacSystemFont, Helvetica, Arial, "Segoe UI", sans-serif'
};
var spacing = {
  s0: 0,
  s1: 4,
  s3: 8,
  s4: 12,
  s5: 16,
  s6: 20,
  s7: 24,
  s8: 32,
  s9: 40,
  s10: 48,
  s11: 56,
  s12: 72
};
var screens = {
  xs: "480px",
  sm: "640px"
};
var themeDefaults = {
  fontFamily: fontFamily.sans,
  lineHeight: lineHeight.relaxed,
  fontWeight: fontWeight.normal,
  fontSize: fontSize.base,
  color: colors.white,
  padding: 0
};

// emails/components/Button.tsx
function Button(props) {
  return <><MjmlButton
    lineHeight={lineHeight.tight}
    fontSize={fontSize.sm}
    height={spacing.s10}
    paddingLeft={spacing.s11}
    paddingRight={spacing.s11}
    width="100%"
    align="center"
    letterSpacing={letterSpacing.wide}
    textTransform={textTransform.big}
    backgroundColor={colors.trasparent}
    color={colors.white}
    border="1px solid white"
    cssClass="light-mode"
    borderRadius="0px"
    {...props}
    paddingTop={spacing.s7}
  /></>;
}

// emails/components/Header.tsx
import { MjmlSection, MjmlColumn, MjmlImage } from "../../node_modules/mjml-react/dist/src/index.js";

// emails/components/Text.tsx
import { MjmlText } from "../../node_modules/mjml-react/dist/src/index.js";
function Text({ children, maxWidth, ...props }) {
  if (maxWidth) {
    return <MjmlText {...props} cssClass="text"><div style={{ maxWidth }}>{children}</div></MjmlText>;
  } else
    return <MjmlText {...props} cssClass="text">{children}</MjmlText>;
}

// emails/components/SubHeading.tsx
var defaultProps = {
  fontFamily: fontFamily.sans,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.tight,
  fontSize: fontSize.sm,
  letterSpacing: letterSpacing.wide,
  textTransform: textTransform.big
};
function SubHeading(props) {
  return <Text {...defaultProps} {...props}>{props.children}</Text>;
}

// emails/components/Divider.tsx
import { MjmlDivider } from "../../node_modules/mjml-react/dist/src/index.js";
var defaultProps2 = {
  borderColor: colors.white,
  borderWidth: "1px",
  paddingTop: spacing.s9,
  paddingBottom: spacing.s9
};
function Divider(props) {
  return <MjmlDivider {...defaultProps2} {...props} />;
}

// emails/components/Header.tsx
var Header = ({ loose, title, openInBrowser = false }) => {
  return <>
    <MjmlSection paddingTop={spacing.s9} backgroundColor={colors.black}><MjmlColumn width="100%"><MjmlImage
      width="45px"
      src="https://www.datocms-assets.com/62617/1673342405-logo-email.png"
    /></MjmlColumn></MjmlSection>
    <MjmlSection><MjmlColumn width="100%">
      <SubHeading align="center" paddingTop={spacing.s6}>{title}</SubHeading>
      {openInBrowser && <Text paddingTop={spacing.s3} align="center" fontSize={fontSize.sm} color={colors.neutral500}>Open in Browser</Text>}
    </MjmlColumn></MjmlSection>
    <MjmlSection><MjmlColumn><Divider /></MjmlColumn></MjmlSection>
  </>;
};
var Header_default = Header;

// emails/components/Heading.tsx
var defaultProps3 = {
  fontFamily: fontFamily.sans,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.tight,
  fontSize: fontSize.lg,
  letterSpacing: letterSpacing.normal,
  textTransform: textTransform.normal
};
function Heading(props) {
  return <Text {...defaultProps3} {...props}>{props.children}</Text>;
}

// emails/components/Footer.tsx
import { MjmlSection as MjmlSection2, MjmlColumn as MjmlColumn2, MjmlImage as MjmlImage2 } from "../../node_modules/mjml-react/dist/src/index.js";
function Footer({ includeUnsubscribe }) {
  return <>
    <MjmlSection2><MjmlColumn2><Divider /></MjmlColumn2></MjmlSection2>
    <MjmlSection2><MjmlColumn2 width="100%"><MjmlImage2
      width="45px"
      src="https://www.datocms-assets.com/62617/1673342405-logo-email.png"
    /></MjmlColumn2></MjmlSection2>
    <MjmlSection2 paddingBottom={spacing.s10}><MjmlColumn2 width="100%" paddingTop={spacing.s6}>
      <SubHeading align="center">
        <a style={{ textDecoration: "none", color: "white" }} href="https://www.instagram.com/orsjo_belysning">Instagram</a>
        {" \xA0 "}
        <a style={{ textDecoration: "none", color: "white" }} href="https://www.orsjo.com">Website</a>
        {" \xA0 "}
        <a style={{ textDecoration: "none", color: "white" }} href="https://www.facebook.com/orsjobelysning">Facebook</a>
      </SubHeading>
      {includeUnsubscribe && <Text paddingTop={spacing.s3} align="center" fontSize={fontSize.sm} color={colors.neutral500}>Unsubscribe</Text>}
    </MjmlColumn2></MjmlSection2>
  </>;
}

// emails/components/BaseLayout.tsx
import {
  Mjml,
  MjmlBody,
  MjmlHead,
  MjmlFont,
  MjmlStyle,
  MjmlAttributes,
  MjmlAll,
  MjmlRaw,
  MjmlPreview
} from "../../node_modules/mjml-react/dist/src/index.js";
function BaseLayout({
  width,
  children,
  preview
}) {
  return <Mjml>
    <MjmlHead>
      {preview && <MjmlPreview>{preview}</MjmlPreview>}
      <MjmlRaw>
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
      </MjmlRaw>
      <MjmlFont
        name="Inter"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700"
      />
      <MjmlFont
        name="Indivisible"
        href="https://www.orsjo.com/fonts/mail.css"
      />
      <MjmlAttributes><MjmlAll {...themeDefaults} /></MjmlAttributes>
      <MjmlStyle>{`

            .ExternalClass p, 
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td
            {line-height: 100%} 

          body {
            -webkit-font-smoothing: antialiased;
            background: ${colors.black};
            color: ${colors.white};
          }
          
          table, td {
            -webkit-font-smoothing: antialiased;
            background: ${colors.black};
            color: ${colors.white};
          }

          span {
            color: ${colors.white} !important;
          }

          p {
            margin: 0 !important;
          }

          a {
            color: ${colors.white} !important;
            text-underline-offset: 2px;
          }
          .gutter {
            padding-left: ${spacing.s7}px;
            padding-right: ${spacing.s7}px;
          }
          .margin {
            padding-left: ${spacing.s7}px !important;
            padding-right: ${spacing.s7}px !important;
          }
          .green td {
            background: ${colors.green} !important;
          }
          .padding {
            padding-left: ${spacing.s7}px !important;
            padding-right: ${spacing.s7}px !important;
          }
          }
          .no-wrap {
            white-space: nowrap;
          }
          .dark-mode {
            display: none;
            max-width: 0px;
            max-height: 0px;
            overflow: hidden;
            mso-hide: all;
          }
          .hidden {
            display: none;
            max-width: 0px;
            max-height: 0px;
            overflow: hidden;
            mso-hide: all;
          }
          .lg-hidden {
            display: none;
            max-width: 0px;
            max-height: 0px;
            overflow: hidden;
            mso-hide: all;
          }

          /* Large screens */
          @media (min-width:${screens.xs}) {
            .lg-gutter {
              padding-left: ${spacing.s7}px !important;
              padding-right: ${spacing.s7}px !important;
            }

            .margin {
              padding-left: ${spacing.s12}px !important;
              padding-right: ${spacing.s12}px !important;
            }

            .sm-hidden {
              display: none;
              max-width: 0px;
              max-height: 0px;
              overflow: hidden;
              mso-hide: all;
            }
            .lg-hidden {
              display: block !important;
              max-width: none !important;
              max-height: none !important;
              overflow: visible !important;
              mso-hide: none !important;
            }
          }
      `}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor={colors.black} width={width}>{children}</MjmlBody>
  </Mjml>;
}

// emails/AccountCreated.tsx
var AccountCreated = ({ name }) => <BaseLayout width={600} preview="Excited to help you enjoy great meals.">
  <Header_default loose />
  <MjmlSection3 cssClass="lg-gutter" paddingBottom={spacing.s9}><MjmlColumn3><MjmlImage3
    align="left"
    src="https://www.datocms-assets.com/62617/1673417732-ranka_vit.png"
  /></MjmlColumn3></MjmlSection3>
  <MjmlSection3 paddingLeft={spacing.s7} paddingRight={spacing.s7}><MjmlColumn3>
    <SubHeading paddingBottom={spacing.s7}>Inbjudan</SubHeading>
    <Heading fontSize={fontSize.lg}>{"Frukostf\xF6rel\xE4sningar & f\xF6rhandsvisning"}</Heading>
    <Text paddingTop={spacing.s7}>
      {"Starta din dag under Stockholm Design week med en riktigt designboost! Vi introducerar en nyhet varje morgon under veckan och bjuder samtidigt p\xE5 en riktigt bra frukost fr\xE5n Fabrique stenugnsbageri. Varje morgon presenterar en av v\xE5ra formgivare en ny produkt."}
      <p>
        {"Tisdag 7 februari:         Sun badrumslampa av Addi"}
        <br />
        {"Onsdag 8 februari:         Ranka av Jonas Bohlin"}
        <br />
        {"Torsdag 9 februari:        Cake av Lars B\xFClow"}
        <br />
      </p>
    </Text>
    <Button href="https://www.mailing.run">{"Anm\xE4l dig h\xE4r"}</Button>
  </MjmlColumn3></MjmlSection3>
  <MjmlSection3><MjmlColumn3><Divider /></MjmlColumn3></MjmlSection3>
  <MjmlSection3 cssClass="green" backgroundColor={colors.green}>
    <MjmlColumn3><MjmlImage3
      align="center"
      src="https://www.datocms-assets.com/62617/1667455852-vinge.jpg"
    /></MjmlColumn3>
    {"      "}
    <MjmlColumn3 cssClass="green">
      <SubHeading cssClass="padding" paddingTop={spacing.s7} paddingBottom={spacing.s6} paddingLeft={spacing.s7} paddingRight={spacing.s7}>Inbjudan</SubHeading>
      <Text paddingRight={spacing.s7} paddingLeft={spacing.s7}>{"Starta din dag under Stockholm Design week med en riktigt designboost! Vi introducerar en nyhet varje morgon under veckan och bjuder samtidigt p\xE5 en riktigt bra frukost fr\xE5n Fabrique stenugnsbageri."}</Text>
      <Button href="https://www.mailing.run" paddingBottom={spacing.s7} paddingLeft={spacing.s7} paddingRight={spacing.s7}>{"Anm\xE4l dig h\xE4r"}</Button>
    </MjmlColumn3>
  </MjmlSection3>
  <MjmlSection3 cssClass="lg-gutter" paddingBottom={spacing.s9}><MjmlColumn3>
    <Divider />
    <MjmlImage3
      cssClass="margin"
      align="left"
      src="https://www.datocms-assets.com/62617/1673417732-ranka_vit.png"
    />
  </MjmlColumn3></MjmlSection3>
  <MjmlSection3 paddingLeft={spacing.s7} paddingRight={spacing.s7}><MjmlColumn3>
    <SubHeading paddingBottom={spacing.s7}>Inbjudan</SubHeading>
    <Heading fontSize={fontSize.lg}>{"Frukostf\xF6rel\xE4sningar & f\xF6rhandsvisning"}</Heading>
    <Text paddingTop={spacing.s7}>
      {"Starta din dag under Stockholm Design week med en riktigt designboost! Vi introducerar en nyhet varje morgon under veckan och bjuder samtidigt p\xE5 en riktigt bra frukost fr\xE5n Fabrique stenugnsbageri. Varje morgon presenterar en av v\xE5ra formgivare en ny produkt."}
      <p>
        {"Tisdag 7 februari:         Sun badrumslampa av Addi"}
        <br />
        {"Onsdag 8 februari:         Ranka av Jonas Bohlin"}
        <br />
        {"Torsdag 9 februari:        Cake av Lars B\xFClow"}
        <br />
      </p>
    </Text>
    <Button href="https://www.mailing.run">{"Anm\xE4l dig h\xE4r"}</Button>
  </MjmlColumn3></MjmlSection3>
  <Footer includeUnsubscribe />
</BaseLayout>;
AccountCreated.subject = ({ name }) => `Welcome to BookBook, ${name}!`;
var AccountCreated_default = AccountCreated;

// emails/ContactAutoReply.tsx
import { MjmlSection as MjmlSection4, MjmlColumn as MjmlColumn4 } from "../../node_modules/mjml-react/dist/src/index.js";
var ContactAutoReply = ({ name }) => <BaseLayout width={600} preview="Thanks for contacting us.">
  <Header_default loose title={"\xD6rsj\xF6 Belysning"} openInBrowser={false} />
  <MjmlSection4 paddingLeft={spacing.s7} paddingRight={spacing.s7}><MjmlColumn4>
    <Heading fontSize={fontSize.lg}>{"Tack f\xF6r ditt meddelande!"}</Heading>
    <Text paddingTop={spacing.s7}>
      {"Vi \xE5terkommer med svar s\xE5 snart vi har m\xF6jlighet."}
      <br />
      <br />
      {"Notera att vi tyv\xE4rr inte kan hantera fr\xE5gor kring v\xE5ra produkter fr\xE5n privatpersoner. V\xE4nligen kontakta ist\xE4llet n\xE5gon av v\xE5ra "}
      <a href="https://www.orsjo.com/contact#retailers">{"\xE5terf\xF6rs\xE4ljare"}</a>
      {". Du hittar \xE4ven de vanligaste fr\xE5gorna kring v\xE5ra produkter med svar p\xE5 v\xE5r "}
      <a href="https://www.orsjo.com/support/faq">FAQ-sida</a>
      {"."}
      <br />
      <br />
      {"H\xE4lsningar"}
      <br />
      {"\xD6rsj\xF6 Belysning AB"}
    </Text>
  </MjmlColumn4></MjmlSection4>
  <MjmlSection4 paddingLeft={spacing.s7} paddingRight={spacing.s7}><MjmlColumn4><Divider /></MjmlColumn4></MjmlSection4>
  <MjmlSection4 paddingLeft={spacing.s7} paddingRight={spacing.s7}><MjmlColumn4>
    <Heading fontSize={fontSize.lg}>Thank you for your message!</Heading>
    <Text paddingTop={spacing.s7}>
      {"We will get back to you as soon as possible."}
      <br />
      <br />
      {"Note that we are unable to handle questions regarding our products from private persons. If you reach out as a private person we kindly ask you to contact an "}
      <a href="https://www.orsjo.com/contact#retailers">{"\xD6rsj\xF6 retailer"}</a>
      {". If you reach out as a professional buyer or retailer please fell free to directly contact anyone in our "}
      <a href="https://www.orsjo.com/contact#people">sales team</a>
      {"."}
      <br />
      <br />
      {"Regards"}
      <br />
      {"\xD6rsj\xF6 Belysning AB"}
    </Text>
  </MjmlColumn4></MjmlSection4>
  <Footer />
</BaseLayout>;
ContactAutoReply.subject = ({ name }) => `Thanks for contacting \xD6rsj\xF6, ${name}!`;
var ContactAutoReply_default = ContactAutoReply;

// emails/NewSignIn.tsx
import { MjmlSection as MjmlSection5, MjmlColumn as MjmlColumn5, MjmlSpacer } from "../../node_modules/mjml-react/dist/src/index.js";
var NewSignIn = ({
  name,
  headline,
  body,
  bulletedList
}) => {
  return <BaseLayout width={352}>
    <Header_default />
    <MjmlSection5 cssClass="gutter"><MjmlColumn5>
      <Divider paddingTop={spacing.s3} paddingBottom={spacing.s3} />
      <Heading
        paddingTop={spacing.s7}
        paddingBottom={spacing.s3}
        fontSize={fontSize.lg}
      >{headline}</Heading>
      <Text paddingTop={spacing.s5} paddingBottom={spacing.s5}>
        {"Hello "}
        {name}
        {","}
      </Text>
      <Text>{body}</Text>
      <MjmlSpacer height={spacing.s5} />
      {bulletedList}
      <Text paddingTop={spacing.s5} paddingBottom={spacing.s5}>
        {"\u2665,"}
        <br />
        {"The BookBook Team"}
      </Text>
      <Divider paddingTop={spacing.s5} paddingBottom={spacing.s5} />
    </MjmlColumn5></MjmlSection5>
    <Footer includeUnsubscribe />
  </BaseLayout>;
};
var NewSignIn_default = NewSignIn;

// emails/Reservation.tsx
import { MjmlSection as MjmlSection6, MjmlColumn as MjmlColumn6 } from "../../node_modules/mjml-react/dist/src/index.js";
var Reservation = ({
  headline,
  body,
  bulletedList,
  ctaText
}) => {
  return <BaseLayout width={352}>
    <Header_default />
    <MjmlSection6 cssClass="gutter"><MjmlColumn6>
      <Divider paddingTop={spacing.s3} paddingBottom={spacing.s3} />
      <Heading paddingTop={spacing.s7} paddingBottom={spacing.s7}>{headline}</Heading>
      {bulletedList}
      <Text paddingTop={spacing.s5} paddingBottom={spacing.s7}><>{body}</></Text>
      {ctaText && <Button href="https://www.mailing.run">{ctaText}</Button>}
      <Divider paddingTop={spacing.s9} />
    </MjmlColumn6></MjmlSection6>
    <Footer />
  </BaseLayout>;
};
Reservation.subject = ({ headline }) => headline || "Your BookBook Reservation";
var Reservation_default = Reservation;

// emails/ResetPassword.tsx
import { MjmlSection as MjmlSection7, MjmlColumn as MjmlColumn7 } from "../../node_modules/mjml-react/dist/src/index.js";
var ResetPassword = ({
  name,
  body,
  ctaText
}) => {
  return <BaseLayout width={352}>
    <Header_default />
    <MjmlSection7 cssClass="gutter"><MjmlColumn7>
      <Divider paddingTop={spacing.s3} paddingBottom={spacing.s5} />
      <Text paddingTop={spacing.s5} paddingBottom={spacing.s5}>
        {"Hello "}
        {name}
        {","}
      </Text>
      <Text paddingBottom={spacing.s7}><>{body}</></Text>
      <Button href="https://www.mailing.run">{ctaText}</Button>
      <Text paddingTop={spacing.s7} paddingBottom={spacing.s5}>
        {"\u2665,"}
        <br />
        {"The BookBook Team"}
      </Text>
      <Divider paddingTop={spacing.s5} />
    </MjmlColumn7></MjmlSection7>
    <Footer />
  </BaseLayout>;
};
ResetPassword.subject = "Password Reset";
var ResetPassword_default = ResetPassword;

// emails/previews/AccountCreated.tsx
var AccountCreated_exports = {};
__export(AccountCreated_exports, {
  accountCreated: () => accountCreated
});
function accountCreated() {
  return <AccountCreated_default name="Amelita" />;
}

// emails/previews/ContactAutoReply.tsx
var ContactAutoReply_exports = {};
__export(ContactAutoReply_exports, {
  contactAutoReply: () => contactAutoReply
});
function contactAutoReply() {
  return <ContactAutoReply_default />;
}

// emails/previews/NewSignIn.tsx
var NewSignIn_exports = {};
__export(NewSignIn_exports, {
  newSignIn: () => newSignIn
});

// emails/components/List.tsx
import { MjmlRaw as MjmlRaw2 } from "../../node_modules/mjml-react/dist/src/index.js";
function List({ items }) {
  return <MjmlRaw2><tr><td><table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    width="100%"
  >{items.map((item, index) => <tr key={index} className="text">
    <td
      style={{ ...themeDefaults }}
      align="center"
      valign="top"
      width={25}
    >{"\u2022"}</td>
    <td style={{ ...themeDefaults }}>{item}</td>
  </tr>)}</table></td></tr></MjmlRaw2>;
}

// emails/previews/NewSignIn.tsx
function newSignIn() {
  return <NewSignIn_default
    headline="Security Alert: New Sign-In"
    name="Amelita"
    body={<>{"We noticed a new sign-in to your BookBook account on a Mac device. If this was you, you don\u2019t need to do anything. If not, please reply to this email and we\u2019ll help you secure your account."}</>}
    bulletedList={<List
      items={[
        "Date: July 14, 2022 4:26 PM PST",
        "Device: Mac",
        "Browser: Safari",
        "Location: Los Angeles, CA",
        "IP Address: XXX.XX.XXX.XX"
      ]}
    />}
  />;
}

// emails/previews/Reservation.tsx
var Reservation_exports = {};
__export(Reservation_exports, {
  reservationChanged: () => reservationChanged,
  reservationConfirmed: () => reservationConfirmed,
  reservationWithError: () => reservationWithError
});
async function reservationWithError() {
  return <Reservation_default
    headline="Reservation Canceled"
    bulletedList={<List
      items={[
        "Salazar in Silver Lake",
        "Sunday, Aug 22 at 1:30pm",
        "Party of 4, patio"
      ]}
    />}
    body={<>
      {"If this was a mistake or if you changed your mind, you can use the link below to rebook your reservation."}
      {" "}
      <a href="/learn-more">Learn more</a>
    </>}
    ctaText="Rebook Now"
  />;
}
function reservationConfirmed() {
  return <Reservation_default
    headline="Reservation Confirmed"
    bulletedList={<List
      items={[
        "Salazar in Silver Lake",
        "Saturday, Aug 22 at 1:30pm",
        "Party of 4, patio"
      ]}
    />}
    body={<>Thanks for booking your reservation at Salazar with BookBook! If you need to cancel or make any changes, just click the link above.</>}
    ctaText="View Reservation"
  />;
}
function reservationChanged() {
  return <Reservation_default
    headline="Reservation Changed"
    bulletedList={<List
      items={[
        "Salazar in Silver Lake",
        "Sunday, Aug 22 at 1:30pm",
        "Party of 4, patio"
      ]}
    />}
    body={<>{"You\u2019re all set! Your reservation at Salazar has been successfully changed. If you have any questions, please reply to this email."}</>}
    ctaText="View Reservation"
  />;
}

// emails/previews/ResetPassword.tsx
var ResetPassword_exports = {};
__export(ResetPassword_exports, {
  resetPassword: () => resetPassword
});
function resetPassword() {
  return <ResetPassword_default
    name="Amelita"
    body={<>
      {"We\u2019ve received your request to change your password. Use the link below to set up a new password for your account. This link is only usable once! If you need to, you can reinitiate the password process again "}
      <a href="https://www.mailing.run">here</a>
      {"."}
    </>}
    ctaText="Reset Password"
  />;
}

// .mailing/src/moduleManifest.ts
emails_default.config = mailing_config_default;
var previews = { AccountCreated: AccountCreated_exports, ContactAutoReply: ContactAutoReply_exports, NewSignIn: NewSignIn_exports, Reservation: Reservation_exports, ResetPassword: ResetPassword_exports };
var templates = { AccountCreated: AccountCreated_default, ContactAutoReply: ContactAutoReply_default, NewSignIn: NewSignIn_default, Reservation: Reservation_default, ResetPassword: ResetPassword_default };
var moduleManifest = { sendMail: emails_default, templates, previews };
var moduleManifest_default = moduleManifest;
export {
  mailing_config_default as config,
  moduleManifest_default as default,
  previews,
  emails_default as sendMail,
  templates
};
