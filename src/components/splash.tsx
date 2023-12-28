'use client'

import { FC, HTMLAttributes, useEffect, useState } from "react"
import anime from 'animejs'
import Image from "next/image"
type SplashProps = {
  finishLoading: () => void
}



type Props = HTMLAttributes<HTMLDivElement> & {
  isMounted: boolean
} 

const SplashContainer: FC<Props> = (props) => {
  return (
    <div {...props}  />
  )
}

const Splash: FC<SplashProps> = ({ finishLoading }) => {

  const [isMounted, setIsMounted] = useState(false)

  const animate = () => {
    const loader = anime.timeline({ 
      complete: () => finishLoading()
    })

    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <SplashContainer isMounted={isMounted}  className="flex h-screen items-center justify-center">
      <Image id="logo" src={'/vercel.svg'} alt="" width={60} height={60} />  
    </SplashContainer>
  )
}

export { Splash }