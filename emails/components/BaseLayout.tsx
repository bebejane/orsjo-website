import React from "react";
import {
  Mjml,
  MjmlBody,
  MjmlHead,
  MjmlFont,
  MjmlStyle,
  MjmlAttributes,
  MjmlAll,
  MjmlRaw,
  MjmlPreview,
} from "mjml-react";
import { colors, screens, themeDefaults, spacing } from "../theme";

type BaseLayoutProps = {
  width: number;
  children: React.ReactNode;
  preview?: string;
};

export default function BaseLayout({
  width,
  children,
  preview,
}: BaseLayoutProps) {
  return (
    <Mjml>
      <MjmlHead>
        {preview && <MjmlPreview>{preview}</MjmlPreview>}
        <MjmlRaw>
          <meta name="color-scheme" content="dark" />
          <meta name="supported-color-schemes" content="dark" />
        </MjmlRaw>
        <MjmlFont
          name="Inter"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700" />
        <MjmlFont
          name="Indivisible"
          href="https://www.orsjo.com/fonts/mail.css"
        />
        <MjmlAttributes>
          <MjmlAll {...themeDefaults} />
        </MjmlAttributes>
        <MjmlStyle>{`
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

          a {
            color: ${colors.white} !important;
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
              padding-left: ${spacing.s8}px !important;
              padding-right: ${spacing.s8}px !important;
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
    </Mjml>
  );
}
