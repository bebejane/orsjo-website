import Link from "next/link";
import { styleVariables } from "/lib/utils";
import { useRouter } from "next/router";
import { useWindowSize } from "rooks";

export default function AnchorLink({href, children}){

  const router = useRouter()
  const { innerWidth } = useWindowSize()


  const handleClick = (e) => {
    e.preventDefault()
    const hash = href.split('#')[1]
    const path = href.split('#')[0]
    const currentPath = router.asPath.split('#')[0]

    if(path === currentPath){
      const el = window.document.getElementById(hash)
      const { tablet, navbarHeightMobile, navbarHeight } = styleVariables;
      const topMargin = (innerWidth < tablet ? navbarHeightMobile : navbarHeight) as number
      const top = el ? (el.getBoundingClientRect().top + window.scrollY) - topMargin : 0
      
      window.scrollTo({ top, behavior:'smooth' })
      
      //el.scrollIntoView({behavior:'smooth'})
    }else{
      router.push(href)
    }
    
  }
  //return <Link href={props.href} scroll={false}><a>{props.children}</a></Link>
  return <a onClick={handleClick} style={{cursor:'pointer'}}>{children}</a>

}
