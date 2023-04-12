import '/styles/index.scss'

import { Layout, PageTransition } from '/components'
import { PageProvider, type PageProps } from '/lib/context/page';
import { useEffect } from 'react';
import { useStore, shallow } from '/lib/store'
import { useWindowSize } from 'rooks';
import { sleep, waitForElement, scrollToId } from '/lib/utils';
import { DefaultDatoSEO } from 'dato-nextjs-utils/components';
//import { useTransitionFix } from 'dato-nextjs-utils/hooks'
import useNextCssRemovalPrevention from '/lib/hooks/useNextCssRemovalPrevention';
import useFoucFix from '/lib/hooks/useFoucFix';
import { AnimatePresence } from "framer-motion";
import { GoogleAnalytics } from "nextjs-google-analytics";

import type { AppProps } from 'next/app'
import type { NextComponentType } from 'next';
import type { Menu } from '/lib/menu';


export type ApplicationProps = AppProps & {
  Component: NextComponentType & {
    page?: PageProps
  }
}

const handleHashChange = async (url: string, instant: boolean) => {

  if (!url.includes('#')) // @ts-expect-error
    return setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 100)

  const id = url.split('#')[1]
  const el = await waitForElement(id, 400)

  if (!el) return
  await sleep(100)
  // @ts-expect-error
  scrollToId(id, instant === true ? 'instant' : 'smooth')

}

function Application({ Component, pageProps, router }: ApplicationProps) {

  useNextCssRemovalPrevention()
  const [transitioning] = useStore((state) => [state.transitioning, state.setShowMenu], shallow)
  const { innerWidth } = useWindowSize()

  const pathname = router.asPath.includes('#') ? router.asPath.substring(0, router.asPath.indexOf('#')) : router.asPath
  const page = (Component.page || { layout: 'normal', menu: 'normal', color: '' }) as PageProps
  const { site, seo, menu } = pageProps as { site: Site, seo: SiteSEOQuery, menu: Menu };
  const pageTitle = pageProps.pageTitle || page?.title
  const description = site?.globalSeo.fallbackSeo.description


  useEffect(() => {
    router.events.on("hashChangeStart", handleHashChange);
    return () => router.events.off("hashChangeStart", handleHashChange)
  }, [router.events, innerWidth]);

  useEffect(() => { !transitioning && handleHashChange(router.asPath, true); }, [transitioning])



  const errorCode = parseInt(router.pathname.replace('/', ''))
  const isError = (!isNaN(errorCode) && (errorCode > 400 && errorCode < 600)) || router.pathname.replace('/', '') === '_error'



  if (isError) {
    return <Component {...pageProps} />
  }

  return (
    <>
      <DefaultDatoSEO
        siteTitle="Örsjö Belysning"
        title={pageTitle}
        description={description}
        site={site}
        path={router.asPath}
      />
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
      <AnimatePresence exitBeforeEnter initial={true}>
        <div id="app" key={pathname}>
          <PageProvider value={page}>
            <Layout menu={menu} title={pageTitle}>
              <Component {...pageProps} />
              <PageTransition />
            </Layout>
          </PageProvider>
        </div>
      </AnimatePresence>
    </>
  )
}

export default Application
