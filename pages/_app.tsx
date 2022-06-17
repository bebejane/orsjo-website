import '/styles/index.scss'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl';
import DatoSEO from '/lib/dato/components/DatoSEO';
import { GoogleAnalytics, usePagesViews } from "nextjs-google-analytics";
import { useRouter } from 'next/router';
import { Layout, Menu } from '/components'

function MyApp({ Component, pageProps } : AppProps) {
  
  //usePagesViews(); // Google Analytics page view tracker = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  const router = useRouter()
  const { asPath : pathname } = router
  const { site, seo } = pageProps;
  const errorCode = parseInt(router.pathname.replace('/', ''))
  const isError = !isNaN(errorCode) && (errorCode > 400 && errorCode < 600)
  
  if(isError) return <Component {...pageProps} />

  return (
    <>
      <GoogleAnalytics />
      <DatoSEO title={'Örsjö'} seo={seo} site={site} pathname={pathname} key={pathname}/>
      <NextIntlProvider messages={pageProps.messages}>
        <Layout>
          <Menu/>
          <Component {...pageProps} />
        </Layout>
      </NextIntlProvider>
    </>
  )
}

export default MyApp
