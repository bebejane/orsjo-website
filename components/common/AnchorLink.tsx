//import Link from "next/link";
export default function AnchorLink(props){
  //return <Link href={props.href} scroll={false} shallow={true}><a>{props.children}</a></Link>
  return <a {...props}>{props.children}</a>
}
