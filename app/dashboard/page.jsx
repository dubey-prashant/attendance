"use client"

import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"

export default function Page() {

  const { data: session } = useSession()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <Image src={session.user.image} height={200} width={200} className="rounded-full overflow-hidden mb-10" />
      <h1 className="text-xl font-bold text-foreground mb-3 ">
        {session.user.name}
      </h1>
      <p className="text-lg text-muted">
        {session.user.email}
      </p>

      <Link href="/api/auth/signout" className="mt-6 bg-destructive text-destructive-foreground text-lg rounded px-4 py-2">
        Sign out
      </Link>
    </div>

  )
}
