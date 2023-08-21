"use client"

import { Button } from '@/components/ui/button'
import React, { useContext } from 'react' 
import { UserContext } from '../contexts/user'
import { useRouter } from 'next/navigation'

export default function page() { 
  const router = useRouter()

  const { setIsLoggedIn } = useContext(UserContext)

  function handleLogin(e) {
    e.preventDefault()
    setIsLoggedIn(true)
    router.push("/attendance")
  }
  
  return (

    <div className=" flex justify-center h-full items-center ">
      <form className='max-w-sm w-full rounded bg-popover shadow-xl p-6'>
        <h3 className="text-3xl mb-6 font-semibold text-center ">
          Login
        </h3>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-popover-foreground">Your email</label>
          <input
            type="email"
            id="email"
            className="bg-input border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-popover-foreground dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="prashant@dubeytech.com"
            required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-popover-foreground">Your password</label>
          <input type="password" id="password" className="bg-input border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-popover-foreground dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div> 
        <Button size="fluid" className="mt-2"
          onClick={handleLogin}>
          Submit
        </Button>
      </form>
    </div>


  )
}
