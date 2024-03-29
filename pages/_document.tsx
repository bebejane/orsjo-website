import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx : DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index, follow" />
          <meta key="googlebot" name="googlebot" content="index,follow" />
          <meta name="google" content="notranslate" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="preload" href="/fonts/IndivisibleWebVariableRoman.woff2" as="font" crossOrigin="" type="font/woff2"/>
          <link rel="preload" href="/fonts/IndivisibleWebRegular.woff2" as="font" crossOrigin="" type="font/woff2"/>
          <link rel="preload" href="/fonts/IndivisibleWebMedium.woff2" as="font" crossOrigin="" type="font/woff2"/>
          <link rel="preload" href="/fonts/OrsjoVF.woff2" as="font" crossOrigin="" type="font/woff2"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
