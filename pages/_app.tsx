import '/styles/index.scss'
import type { AppProps } from 'next/app'
import DatoSEO from '/lib/dato/components/DatoSEO';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useRouter } from 'next/router';
import { Layout } from '/components'
import { LayoutProvider, PageLayoutProps } from '/lib/context/layout';
import type { NextComponentType } from 'next';
import { AnimatePresence } from "framer-motion";
import {PageTransition} from '/components'
import { useTransitionFix2  as useTransitionFix} from '/lib/hooks/useTransitionFix';

export type ApplicationProps = AppProps & {
  Component: NextComponentType & {
    layout?: PageLayoutProps
  }
}

function Application({ Component, pageProps } : ApplicationProps) {
  
  //usePagesViews(); // Google Analytics page view tracker = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  useTransitionFix()
  const router = useRouter()
  const pathname =  router.asPath.includes('#') ? router.asPath.substring(0, router.asPath.indexOf('#')) : router.asPath
  
  const errorCode = parseInt(router.pathname.replace('/', ''))
  const isError = !isNaN(errorCode) && (errorCode > 400 && errorCode < 600)
  const layout = (Component.layout || {layout:'normal', menu:'normal', color:''}) as PageLayoutProps
  const { site, seo } = pageProps;
  const { title, description } = pageSeo(pageProps, pathname);

  if(isError) return <Component {...pageProps} />
  
  return (
    <>
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }}/>
      <DatoSEO 
        title="Örsjö Belysning" 
        subtitle={title ?  ` - ${title}` : ''} 
        description={description}
        seo={seo} 
        site={site} 
        pathname={pathname} 
        key={pathname}
      />
        <AnimatePresence exitBeforeEnter initial={false}>
          <div id="app" key={pathname}>
            <LayoutProvider value={layout}>
              <Layout menu={pageProps.menu} title={title}>
                <Component {...pageProps}/>  
                <PageTransition key={`t-${pathname}`}/>
              </Layout>
            </LayoutProvider>
          </div>
      </AnimatePresence>
    </>
  )
}

const pageSeo = (pageProps, pathname) => {
  const {product, designer, project} : { product: ProductRecord, designer: DesignerRecord, project: ProjectRecord} = pageProps
  const title =  product?.title || designer?.name || project?.title || pathTotitle[pathname]
  const description = product?.description || designer?.description || pageProps.description || undefined
  return {title, description}
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
  '/about/sustainability': 'Sustainability', 
  '/support/faq': 'FAQ',
  '/support/manuals': 'Manuals',
  '/contact': 'Contact',
}


export default Application
