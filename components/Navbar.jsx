"use client"

import { DarkModeSwitcher } from '@/components/DarkModeSwitcher'
import { Kelly_Slab } from 'next/font/google'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { useSession } from 'next-auth/react';

const kellyslab = Kelly_Slab({
  subsets: ['latin'],
  weight: ['400']
})

function NavEnd({ user }) {
  return (
    <div className="flex gap-3 items-center ml-3">
      <DarkModeSwitcher />
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={user.image}
              alt={user.name}
            />
          </button>
        </PopoverTrigger>
        <PopoverContent noStyles  >
          <div
            className="text-base mr-3 list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <div className="px-4 py-3" role="none">
              <p
                className="text-sm text-gray-900 dark:text-white"
                role="none"
              >
                {user.name}
              </p>
              <p
                className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                role="none"
              >
                {user.email}
              </p>
            </div>
            <ul className="py-1" role="none">
              <li>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Your Profile
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Earnings
                </a>
              </li> */}
              <li>
                <a
                  href="/api/auth/signout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </PopoverContent>
      </Popover>


    </div>
  )
}

export default function Navbar() {

  function toggleSidebar() {
    document.getElementById('logo-sidebar').classList.toggle('-translate-x-full')
  }

  const { data: session } = useSession()

  return (
    <nav className="fixed top-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              onClick={toggleSidebar}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
              </svg>
            </button>
            <a href="" className={`${kellyslab.className}  flex ml-2 md:mr-24`}>
              <span className={`text-[#3651bf] self-center text-3xl font-bold whitespace-nowrap `}>
                Sailee College
              </span>
            </a>
          </div>
          <div className="flex items-center">
            {session && session?.user &&
              <NavEnd user={session?.user} />}
          </div>
        </div>
      </div>
    </nav>
  )
}
