import '/styles/index.scss'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl';
import DatoSEO from '/lib/dato/components/DatoSEO';
import { GoogleAnalytics, usePagesViews } from "nextjs-google-analytics";
import { useRouter } from 'next/router';
import { Layout } from '/components'
import { useTransitionFix } from "/lib/hooks";
import { LayoutProvider, PageLayoutProps } from '/lib/context/layout';
import type { NextComponentType } from 'next';
import { useEffect } from 'react';
import { AnimatePresence } from "framer-motion";

export type ApplicationProps = AppProps & {
  Component: NextComponentType & {
    layout?: PageLayoutProps
  }
}

function Application({ Component, pageProps } : ApplicationProps) {
  
  //usePagesViews(); // Google Analytics page view tracker = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  const router = useRouter()
  const transitionFix = useTransitionFix()
  const { asPath : pathname } = router
  const { site, seo } = pageProps;
  const errorCode = parseInt(router.pathname.replace('/', ''))
  const isError = !isNaN(errorCode) && (errorCode > 400 && errorCode < 600)
  const layout = (Component.layout || {layout:'normal', menu:'normal', color:''}) as PageLayoutProps
  const pageTitle = siteSubtitle(pageProps, router);

  if(isError) return <Component {...pageProps} />
  
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => document.body.scrollIntoView({behavior:'instant'})
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [])

  return (
    <>
      <GoogleAnalytics />
      <DatoSEO title="Örsjö Belysning" subtitle={pageTitle ?  ` - ${pageTitle}` : ''} seo={seo} site={site} pathname={pathname} key={pathname}/>
      <NextIntlProvider messages={pageProps.messages}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <div id="app" key={pathname}>
            <LayoutProvider value={layout}>
              <Layout menu={pageProps.menu} title={pageTitle}>
                <Component {...pageProps} />
              </Layout>
            </LayoutProvider>
          </div>
        </AnimatePresence>
      </NextIntlProvider>
    </>
  )
}

const pathTotitle = {
  '/products': 'Products',
  '/professionals/projects' : 'Projects',
  '/professionals/bespoke': 'Bespoke',
  '/professionals/downloads': 'Downloads',
  '/professionals/factory-visit' : 'Factory Visit',
  '/about': 'About Us',
  '/about/jobs': 'Jobs',
  '/about/news': 'News',
  '/about/press': 'Press',
  '/support/faq': 'FAQ',
  '/support/manuals': 'Manuals',
  '/contact': 'Contact',
}

const siteSubtitle = ({product, designer, project} : { product: ProductRecord, designer: DesignerRecord, project: ProjectRecord}, router) => {
  
  return product?.title || designer?.name || project?.title || pathTotitle[router.asPath]
}

export default Application
