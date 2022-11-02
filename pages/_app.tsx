import '/styles/index.scss'

import type { AppProps } from 'next/app'
import { Layout, PageTransition } from '/components'
import { PageProvider, type PageProps } from '../lib/context/page';
import { AnimatePresence } from "framer-motion";
import { useEffect } from 'react';
import { useStore, shallow } from '/lib/store'
import { useWindowSize } from 'rooks';
import { sleep, waitForElement, scrollToId } from '/lib/utils';
import { DatoSEO } from 'dato-nextjs-utils/components';
import { useTransitionFix } from 'dato-nextjs-utils/hooks'

import type { NextComponentType } from 'next';
import type { Menu } from '/lib/menu';

export type ApplicationProps = AppProps & {
  Component: NextComponentType & {
    page?: PageProps
  }
}

const handleHashChange = async (url: string, instant: boolean) => {
    
  if(!url.includes('#')) // @ts-expect-error
    return setTimeout(()=> window.scrollTo({ top:0, behavior: 'instant' }), 100)

  const id = url.split('#')[1]
  const el = await waitForElement(id, 400)
  
  if(!el) return
  await sleep(100)
  // @ts-expect-error
  scrollToId(id, instant === true ? 'instant' : 'smooth') 

}

function Application({ Component, pageProps, router }: ApplicationProps) {
  
  useTransitionFix()
  
  const [ transitioning ] = useStore((state) => [state.transitioning, state.setShowMenu], shallow)
  const { innerWidth } = useWindowSize()
  
  const pathname = router.asPath.includes('#') ? router.asPath.substring(0, router.asPath.indexOf('#')) : router.asPath
  const page = (Component.page || { layout: 'normal', menu: 'normal', color: '' }) as PageProps
  const { site, seo, menu } = pageProps as { site: Site, seo: SiteSEOQuery, menu: Menu};
  const { title, description } = pageSeo(pageProps, pathname);
  
  useEffect(() => {
    router.events.on("hashChangeStart", handleHashChange);
    return () => router.events.off("hashChangeStart", handleHashChange)
  }, [router.events, innerWidth]);
  
  useEffect(() => { !transitioning && handleHashChange(router.asPath, true); }, [transitioning])

  const errorCode = parseInt(router.pathname.replace('/', ''))
  const isError = !isNaN(errorCode) && (errorCode > 400 && errorCode < 600)
  
  

  if(isError) 
    return <Component {...pageProps} />
  
  return (
    <>
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
  const { product, designer, project } : { 
    product: ProductRecord, 
    designer: DesignerRecord, 
    project: ProjectRecord 
  } = pageProps
  
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
