'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Splash } from '@/components/splash'
import { FC, ReactNode } from 'react'

import { useSplashScreen } from '@/hooks/useSplashScreen'
import { BottomNav } from '@/components/bottom-nav'

const inter = Inter({ subsets: ['latin'] })


// export const metadata: Metadata = {
//   manifest: '/manifest.json',
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children}) => {


  const { isHome, loading, setLoading } = useSplashScreen()

  return (
    <html lang="en" className='bg-slate-900'>
      <body className={inter.className}>
        
        {
          loading && isHome ? (<Splash finishLoading={() => setLoading(false)} />)  : (<>
          {children}
          </>) 
        }

        <BottomNav />
        </body>
    </html>
  )
}

export default RootLayout
