import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Link,
	Preview,
	Font,
	Text,
} from '@react-email/components';

import { colors, screens, themeDefaults, spacing } from './theme';

type BaseLayoutProps = {
	width: number;
	children: React.ReactNode;
	preview?: string;
};

export default function BaseLayout({ width, children, preview }: BaseLayoutProps) {
	return (
		<Html>
			<Head>
				{preview && <Preview>{preview}</Preview>}
				<meta name='color-scheme' content='dark' />
				<meta name='supported-color-schemes' content='dark' />

				<Font
					fontFamily='Inter'
					webFont={{
						url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700',
						format: 'woff2',
					}}
					fallbackFontFamily={['sans-serif']}
				/>
				<Font
					fontFamily='Indivisible'
					webFont={{ url: 'https://www.orsjo.com/fonts/mail.css', format: 'woff2' }}
					fallbackFontFamily={['sans-serif']}
				/>

				{/*
				<MjmlAttributes>
					<MjmlAll {...themeDefaults} />
				</MjmlAttributes>
        
				<style>

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
      </style>
          */}
			</Head>

			<Body style={{ backgroundColor: colors.black, width }} className='body'>
				{children}
			</Body>
		</Html>
	);
}
