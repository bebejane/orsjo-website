import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const usePreviousRoute = () => {
  
  const storage = globalThis.sessionStorage
  const router = useRouter()
  const [prevRoute, setPrevRoute] = useState(typeof storage !== 'undefined' ? storage.getItem('previousRoute') : null)

	useEffect(()=>{
    const newRoute = router.asPath.split('#')[0]
    const currentRoute = storage.getItem('currentRoute');

    if (currentRoute === newRoute) return 

    console.log(currentRoute, '>', newRoute)
    storage.setItem('previousRoute', currentRoute)
    storage.setItem("currentRoute", newRoute);
    setPrevRoute(currentRoute)

	}, [router.asPath, storage])	

  useEffect(()=>{
    const handleWindowReload = (e) => {
      console.log('reload');
      
      storage.removeItem('previousRoute')
      storage.removeItem("currentRoute")
    }
    window.addEventListener('beforeunload', handleWindowReload)
    return () => window.removeEventListener('beforeunload', handleWindowReload)
  }, [storage])

  return prevRoute
};

export default usePreviousRoute