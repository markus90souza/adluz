'use client'

import { FC, useEffect, useState } from "react"
import anime from 'animejs'
import Image from "next/image"
type SplashProps = {
  finishLoading: () => void
}

const Splash: FC<SplashProps> = ({ finishLoading }) => {

  const [isMounted, setIsMounted] = useState(false)

  const animate = () => {
    const loader = anime.timeline({ 
      complete: () => finishLoading()
    })

    loader.add({
      targets: '#logo',
      scale: 1,
      delay: 0,
      duration: 500,
      easing: 'easeInOutExpo',
     })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div isMouted={isMounted}  className="flex h-screen items-center justify-center">

    <Image id="logo" src={'/vercel.svg'} alt="" width={60} height={60} />  
    </div>
  )
}

export { Splash }