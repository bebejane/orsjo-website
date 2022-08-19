import '/styles/index.scss'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl';
import DatoSEO from '/lib/dato/components/DatoSEO';
import { GoogleAnalytics, usePagesViews } from "nextjs-google-analytics";
import { useRouter } from 'next/router';
import { Layout } from '/components'
import { LayoutProvider, PageLayoutProps } from '/lib/context/layout';
import type { NextComponentType } from 'next';
import { AnimatePresence } from "framer-motion";
import {PageTransition} from '/components'
import useTransitionFix from '/lib/hooks/useTransitionFix';
import { useEffect } from 'react';

export type ApplicationProps = AppProps & {
  Component: NextComponentType & {
    layout?: PageLayoutProps
  }
}

function Application({ Component, pageProps } : ApplicationProps) {
  
  //usePagesViews(); // Google Analytics page view tracker = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  //useTransitionFix()
  const router = useRouter()
  const pathname =  router.asPath.includes('#') ? router.asPath.substring(0, router.asPath.indexOf('#')) : router.asPath
  const { site, seo } = pageProps;
  const errorCode = parseInt(router.pathname.replace('/', ''))
  const isError = !isNaN(errorCode) && (errorCode > 400 && errorCode < 600)
  const layout = (Component.layout || {layout:'normal', menu:'normal', color:''}) as PageLayoutProps
  const pageTitle = siteSubtitle(pageProps, router);

  useEffect(() => { 
    const handleRouteChange = (url, { shallow }) => {
      console.log(shallow)
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange)
  }, []);

  if(isError) return <Component {...pageProps} />
  
  return (
    <>
      <GoogleAnalytics />
      <DatoSEO 
        title="Örsjö Belysning" 
        subtitle={pageTitle ?  ` - ${pageTitle}` : ''} 
        seo={seo} 
        site={site} 
        pathname={pathname} 
        key={pathname}
      />
      <NextIntlProvider messages={pageProps.messages}>
        <AnimatePresence mode="wait" initial={true}>
          <div key={pathname}>
            <LayoutProvider value={layout} >
              <Layout menu={pageProps.menu} title={pageTitle}>
                <Component {...pageProps}/>
              </Layout>
            </LayoutProvider>
            <PageTransition key={pathname}/>
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
