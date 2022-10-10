import { useRouter } from "next/router";

export default function AnchorLink(props){

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(props.href)
  }
  return <a onClick={handleClick} {...props}>{props.children}</a>

}
