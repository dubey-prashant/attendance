import { NextResponse } from 'next/server'
import { authOptions } from '../../auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import '@/lib/mongodb'
import Class from '../model'

export async function GET(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))

  try {
    const data = await Class.findById(params.id)

    return NextResponse.json({ data })

  } catch (error) {
    console.log("error fetching class  ", error)
    return NextResponse.error(error)
  }

}

export async function PATCH(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))

  const reqBody = await req.json()

  try { 

    const newClass = await Class.findOneAndUpdate({ _id: params.id }, reqBody, { new: true })

    return NextResponse.json({ message: 'Class Updated ', data: newClass })

  } catch (error) {
    console.log("error updating class ", error)
    return NextResponse.error(error)
  }

}

export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))

  try {

    const deletedClass = await Class.findByIdAndDelete(params.id)

    return NextResponse.json({ message: 'Class deleted', data: deletedClass })

  } catch (error) {
    console.log("error deleting classes ", error)
    return NextResponse.error(error)
  }

}
