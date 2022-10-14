import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const usePreviousRoute = () => {
  
  const storage = globalThis.sessionStorage
  const router = useRouter()
  const [prevRoute, setPrevRoute] = useState(typeof storage !== 'undefined' ? storage.getItem('previousRoute') : null)

	useEffect(()=>{
<<<<<<< HEAD
    
    const prevRoute = storage.getItem('currentRoute');
    
    if (prevRoute === router.asPath) 
      return console.log('same', prevRoute)
    console.log(prevRoute, '>', router.asPath)
    storage.setItem('previousRoute', prevRoute)
=======
    const currentRoute = storage.getItem('currentRoute');    
    if (currentRoute === router.asPath) 
      return 
    
    storage.setItem('previousRoute', currentRoute)
>>>>>>> origin/master
    storage.setItem("currentRoute", router.asPath);
    setPrevRoute(currentRoute)
	}, [router.asPath, storage])	

  useEffect(()=>{
    const handleWindowReload = (e) => {
      storage.removeItem('previousRoute')
      storage.removeItem("currentRoute")
    }
    window.addEventListener('beforeunload', handleWindowReload)
    return () => window.removeEventListener('beforeunload', handleWindowReload)
  }, [])
<<<<<<< HEAD

=======
>>>>>>> origin/master

  return prevRoute
};

export default usePreviousRoute