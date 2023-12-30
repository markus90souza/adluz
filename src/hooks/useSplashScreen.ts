'use client'; 
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const useSplashScreen = () => {

  const pathname = usePathname()
  const isHome = pathname === '/'
  const [loading, setLoading ] = useState(isHome)

  useEffect(() => {

    if(loading){
      return
    }

  },[loading])

  return {
    isHome, loading, setLoading
  }
}

export { useSplashScreen }