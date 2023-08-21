"use client"
import { useContext, useState } from 'react'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { cn } from '@/lib/utils'
import { UserContext } from './contexts/user'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({ children }) {

  const { isLoggedIn } = useContext(UserContext)

  return (
    <body className={`${montserrat.className} h-screen flex flex-col dark `}>

      <Navbar isLoggedIn={isLoggedIn} />

      {isLoggedIn &&
        <Sidebar />}

      <main className={cn("p-4 h-full overflow-auto  ",
        { "sm:ml-64": isLoggedIn }
      )}>
        {children}
      </main> 
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
    </body>
  )
}
