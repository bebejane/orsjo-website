import { useRouter } from "next/router";
import { useEffect, useState } from "react";

if(typeof window !== "undefined") // Clear session storage on reload/direct req
  document.addEventListener("DOMContentLoaded", () => globalThis.sessionStorage.removeItem('currentRoute'));

const usePreviousRoute = () : string => {
  
  const storage = globalThis.sessionStorage
  const router = useRouter()
  const [prevRoute, setPrevRoute] = useState<string>(typeof storage !== 'undefined' ? storage.getItem('previousRoute') : null)

	useEffect(()=>{
    const prevRoute = storage.getItem('currentRoute');
    if (prevRoute === router.asPath) return
    storage.setItem('previousRoute', prevRoute)
    storage.setItem("currentRoute", router.asPath);
    setPrevRoute(prevRoute)
	}, [router.asPath])	
  
  return prevRoute
};

export default usePreviousRoute