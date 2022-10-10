import Link from "next/link";
import { useRouter } from "next/router";

export default function AnchorLink(props){

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(props.href, null, {shallow:true, scroll:true, unstable_skipClientCache:true})
  }
  //return <Link href={props.href} scroll={false}><a>{props.children}</a></Link>
  return <a onClick={handleClick} {...props}>{props.children}</a>

}
