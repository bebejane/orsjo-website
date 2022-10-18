import { scrollToId } from "/lib/utils";
import { useRouter } from "next/router";
import { useWindowSize } from "rooks";

export default function AnchorLink(props){
  /*
  const { href, children} = props
  const router = useRouter()
  const { innerWidth } = useWindowSize()
  const hash = href.split('#')[1]
  const path = href.split('#')[0]
  const isExternal = router.asPath.split('#')[0] !== path

  const handleClick = (e) => {
    e.preventDefault()

    const currentPath = router.asPath.split('#')[0]

    if(path !== currentPath)
      router.push(href)
    else
      scrollToId(hash)
  }
*/

  return <a {...props}>{props.children}</a>
}
