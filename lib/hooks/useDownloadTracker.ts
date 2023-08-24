import { useEffect } from 'react';
import { event } from "nextjs-google-analytics";

const extensions = ['pdf', 'zip', 'docx', 'xls', 'xlsx', 'mp3', 'mp4']

const useDownloadTracker = () => {

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
        return extensions.some((ext) => link.href.endsWith(`.${ext}`))
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
  }, []);

  return null;
}

export default useDownloadTracker