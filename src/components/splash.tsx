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

import x from '@/assets/logo.png'

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SplashContainer isMounted={isMounted}  className="flex h-screen items-center justify-center bg-gray-900">
      <Image id="logo" src={x} alt="" width={60} height={60} />  
    </SplashContainer>
  )
}

export { Splash }