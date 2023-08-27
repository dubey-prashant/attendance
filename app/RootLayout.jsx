"use client"

import { useEffect, useState } from 'react'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { cn } from '@/lib/utils'
import { useSession } from 'next-auth/react';
import Script from 'next/script'
import { useRouter } from 'next/navigation' 
import { Toaster } from "@/components/ui/toaster"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({ children }) {
  const router = useRouter();

  const { data: session, status } = useSession();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => { 
    if (status === 'unauthenticated')
      router.push('/api/auth/signin');
    if (status === 'authenticated' && session?.user?.email) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [status, session])

  return (
    <>
      <head>
        {/* <Script src="/js/theme.js" strategy="beforeInteractive" /> */}
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" /> 
      </head>

      <body className={`${montserrat.className} h-screen flex flex-col dark `}>

        {status === 'loading' &&
          <div className="fixed inset-0 z-50 bg-background flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-700"></div>
          </div>
        }
        {isLoggedIn &&
          <>

            <Navbar />

            <Sidebar />

            <main className={cn("p-4 h-full mt-14 ",
              { "sm:ml-64": isLoggedIn }
            )}>
              {children}
            </main>
          </>
        } 
        <Toaster />
      </body>
    </>
  )
}
