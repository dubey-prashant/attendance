"use client"

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [{
  id: 12,
  label: "Dashboard",
  href: "/dashboard",
}, {
  id: 1,
  label: "Classes",
  href: "/classes",
},
{
  id: 2,
  label: "Attendance",
  href: "/attendance",
},

{
  id: 3,
  label: "Circulars",
  href: "/circulars",
},
{
  id: 4,
  label: "Academic Calender",
  href: "/academic-calender",
},
{
  id: 5,
  label: "Settings",
  href: "/settings",
  },
  {
    id: 6,
    label: "Logout",
    href: "/api/auth/signout",
}
]

export default function SidebarComp() {
  let currentRoute = usePathname(); 

  return ( 
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-30 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">

          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={cn("flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                { "bg-gray-100 dark:bg-gray-700": currentRoute === link.href })}
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">{link.label}</span>
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </aside>
  )
}
