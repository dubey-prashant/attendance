import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import '@/lib/mongodb'
import Class from './model'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET(req) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))
 
  try {
    const data = await Class.find({})

    return NextResponse.json({ data })

  } catch (error) {
    console.log("error fetching classes ", error)
    return NextResponse.error(error)
  }

}

export async function POST(req) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url)) 

  const reqBody = await req.json()

  try {
    
    const newClass = await Class.create(reqBody) 

    return NextResponse.json({ message: 'Class created', data: newClass })

  } catch (error) {
    console.log("error creating classes ", error)
    return NextResponse.error(error)
  }

}
