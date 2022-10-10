import Link from "next/link";
import { useRouter } from "next/router";

export default function AnchorLink(props){

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    const hash = props.href.split('#')[1]
    //router.push('#' + props.href.split('#')[1], null, {shallow:true, scroll:false})
    const el = window.document.getElementById(hash)
    el.scrollIntoView({behavior:'smooth'})
    
  }
  //return <Link href={props.href} scroll={false}><a>{props.children}</a></Link>
  return <a onClick={handleClick}>{props.children}</a>

}
