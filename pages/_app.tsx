import '/styles/index.scss'
import type { AppProps } from 'next/app'
import DatoSEO from '/lib/dato/components/DatoSEO';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useRouter } from 'next/router';
import { Layout } from '/components'
import { LayoutProvider, PageLayoutProps } from '/lib/context/layout';
import type { NextComponentType } from 'next';
import { AnimatePresence } from "framer-motion";
import { PageTransition } from '/components'
import { useTransitionFix2 as useTransitionFix } from '/lib/hooks/useTransitionFix';
import { useEffect } from 'react';
import { useStore } from '/lib/store'
import { sleep } from '/lib/utils'

export type ApplicationProps = AppProps & {
  Component: NextComponentType & {
    layout?: PageLayoutProps
  }
}

function Application({ Component, pageProps }: ApplicationProps) {

  //usePagesViews(); // Google Analytics page view tracker = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  useTransitionFix()
  const router = useRouter()
  const pathname = router.asPath.includes('#') ? router.asPath.substring(0, router.asPath.indexOf('#')) : router.asPath
  const [transitioning] = useStore((state) => [state.transitioning])

  const errorCode = parseInt(router.pathname.replace('/', ''))
  const isError = !isNaN(errorCode) && (errorCode > 400 && errorCode < 600)
  const layout = (Component.layout || { layout: 'normal', menu: 'normal', color: '' }) as PageLayoutProps
  const { site, seo } = pageProps;
  const { title, description } = pageSeo(pageProps, pathname);

  const handleHashChange = async (url, instant) => {
    
    if(!url.includes('#')) 
      return setTimeout(()=>window.scrollTo({ top:0, behavior: 'instant' }), 100)

    let section;
    const id = url.split('#')[1]
    
    for (let i = 0; i < 10; i++) {
      section = document.getElementById(id)
      if(section) break
      await sleep(50)
    }
    await sleep(100)
    const top = section ? section.offsetTop - 80 : 0
    const behavior = instant === true || !top ? 'instant' : 'smooth'

    window.scrollTo({ top, behavior })
    //console.log('hash change', id, top, behavior)
  };

  useEffect(() => {
    router.events.on("hashChangeStart", handleHashChange);
    return () => router.events.off("hashChangeStart", handleHashChange)
  }, []);

  useEffect(() => { !transitioning && handleHashChange(router.asPath, true); }, [transitioning])

  if (isError) return <Component {...pageProps} />

  return (
    <>
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
      <DatoSEO
        title="Örsjö Belysning"
        subtitle={title ? ` - ${title}` : ''}
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
              <Component {...pageProps} />
              <PageTransition key={`t-${pathname}`} />
            </Layout>
          </LayoutProvider>
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
