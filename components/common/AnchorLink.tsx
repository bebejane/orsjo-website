//import Link from "next/link";
//import { useRouter } from "next/router";
export default function AnchorLink(props){
  /*  
  const router = useRouter()

  const handleClick = (e) =>{
    e.preventDefault()
    console.log(e.target);
    
    const pathname = props.href?.split('#')[0]
    const currentPathname = router.asPath.split('#')[0]
    const hash = props.href?.split('#')[1]

    if(currentPathname === pathname)
      return location.hash = hash  
    
    const htmlEl = document.querySelector('html');
    htmlEl.style.scrollBehavior = 'auto'
    router.push(pathname)
    
    const updateHash = () => {
      setTimeout(()=>{
        location.hash = hash
        htmlEl.style.scrollBehavior = 'smooth'
      }, 300)
      router.events.off('routeChangeComplete', updateHash)  
    }
    router.events.on('routeChangeComplete', updateHash)
    
    
  }
  */
  //return <Link href={props.href} scroll={false}><a {...props}  onClick={handleClick}>{props.children}</a></Link>
  return <a {...props}>{props.children}</a>
}
