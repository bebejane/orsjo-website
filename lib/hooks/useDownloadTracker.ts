import { useEffect } from 'react';
import { event } from "nextjs-google-analytics";
import { useRouter } from 'next/router';

const extensions = ['pdf', 'zip', 'doc', 'docx', 'xls', 'xlsx', 'mp3', 'mp4', 'wav']

const useDownloadTracker = () => {

  const router = useRouter()

  useEffect(() => {

    const handleDownloadClick = (e: MouseEvent) => {

      const link = (e.target as HTMLElement).closest('a')
      if (!link) return
      const filename = link.href.split('/').pop()

      event('file_download', {
        category: 'Downloads',
        label: filename,
        value: 1
      })
    }

    const observeDownloadLinks = () => {

      Array.from(document.querySelectorAll('a')).filter((link) => {
        return extensions.some((ext) => link.href.toLowerCase().endsWith(`.${ext}`))
      }).forEach((link) => {
        link.removeEventListener('click', handleDownloadClick)
        link.addEventListener('click', handleDownloadClick)
      })
    }

    const observer = new MutationObserver(function () {
      observeDownloadLinks()
    });

    const bodyNode = document.querySelector('body');

    observer.observe(bodyNode, {
      attributes: false,
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [router.asPath]);

  return null;
}

export default useDownloadTracker