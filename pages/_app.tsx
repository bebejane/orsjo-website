import '/styles/index.scss'

import type { AppProps } from 'next/app'
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Layout, PageTransition } from '/components'
import { PageProvider, type PageProps } from '../lib/context/page';
import { AnimatePresence } from "framer-motion";
import { useEffect, useCallback } from 'react';
import { useStore } from '/lib/store'
import DatoSEO from '/lib/dato/components/DatoSEO';
import {useTransitionFix3 as useTransitionFix} from '/lib/hooks/useTransitionFix';

import type { NextComponentType } from 'next';
import type { Menu } from '/lib/menu';
import { useWindowSize } from 'rooks';
import useScrollInfo from '/lib/hooks/useScrollInfo';
import { sleep, waitForElement, styleVariables } from '/lib/utils';

export type ApplicationProps = AppProps & {
  Component: NextComponentType & {
    page?: PageProps
  }
}

function Application({ Component, pageProps, router }: ApplicationProps) {
  
  useTransitionFix()
  //usePagesViews(); // Google Analytics page view tracker = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  
  const pathname = router.asPath.includes('#') ? router.asPath.substring(0, router.asPath.indexOf('#')) : router.asPath
  const [transitioning] = useStore((state) => [state.transitioning, state.setShowMenu])
  const { innerWidth } = useWindowSize()
  const errorCode = parseInt(router.pathname.replace('/', ''))
  const isError = !isNaN(errorCode) && (errorCode > 400 && errorCode < 600)
  
  const page = (Component.page || { layout: 'normal', menu: 'normal', color: '' }) as PageProps
  const { site, seo, menu } = pageProps as { site: Site, seo: SiteSEOQuery, menu: Menu};
  const { title, description } = pageSeo(pageProps, pathname);

  const handleHashChange =  useCallback(async (url, instant) => {
    
    if(!url.includes('#')) // @ts-expect-error
      return setTimeout(()=> window.scrollTo({ top:0, behavior: 'instant' }), 100)

    const id = url.split('#')[1]
    const el = await waitForElement(id, 400)
    await sleep(100)

    const { tablet, navbarHeightMobile, navbarHeight } = styleVariables;
    const topMargin = (innerWidth < tablet ? navbarHeightMobile : navbarHeight) as number
    const top = el ? (el.getBoundingClientRect().top + window.scrollY) - topMargin : 0
    const behavior = instant === true ? 'instant' : !top ? 'instant' : 'smooth'
    
    // @ts-expect-error
    window.scrollTo({ top, behavior })

  }, [innerWidth]);
  
  useEffect(() => {
    router.events.on("hashChangeStart", handleHashChange);
    return () => router.events.off("hashChangeStart", handleHashChange)
  }, [router.events, innerWidth, handleHashChange]);
  
  useEffect(() => { !transitioning && handleHashChange(router.asPath, true); }, [transitioning])

  if(isError) 
    return <Component {...pageProps} />
  
  return (
    <>
      {/*<GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />*/}
      <DatoSEO
        title="Örsjö Belysning"
        subtitle={title ? ` - ${title}` : ''}
        description={description}
        seo={seo}
        site={site}
        pathname={pathname}
        key={pathname}
        noindex={true}
      />
      
      <AnimatePresence exitBeforeEnter initial={true}>
        <div id="app" key={pathname}>
          <PageProvider value={page}>
            <Layout menu={menu} title={title}>
              <Component {...pageProps}/>
              <PageTransition/>
            </Layout>
          </PageProvider>
        </div>
      </AnimatePresence>
    </>
  )
}

const pageSeo = (pageProps, pathname) => {
  const { product, designer, project }: { product: ProductRecord, designer: DesignerRecord, project: ProjectRecord } = pageProps
  const title = product?.title || designer?.name || project?.title || pathTotitle[pathname]
  const description = product?.description || designer?.description || pageProps.description || undefined
  return { title, description }
}

const pathTotitle = {
  '/products': 'Products',
  '/professionals/projects': 'Projects',
  '/professionals/bespoke': 'Bespoke',
  '/professionals/downloads': 'Downloads',
  '/professionals/factory-visit': 'Factory Visit',
  '/professionals/colors-and-materials': 'Colors & Materials',
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
