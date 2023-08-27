import { NextResponse } from 'next/server'
import { authOptions } from '../../auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import '@/lib/mongodb'
import {Class, Student } from '../../models'

// GET a class: /api/classes/[id]
export async function GET(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))

  try {
    const data = await Class.findById(params.class_id).populate('students')

    return NextResponse.json({ data })

  } catch (error) {
    console.log("error fetching class  ", error)
    return NextResponse.error(error)
  }

}

// UPDATE a class: /api/classes/[id]
export async function PATCH(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url)) 

  try { 

    const updatedClass = await Class.findOneAndUpdate(
      { _id: params.class_id },
      reqBody,
      { new: true }
    ).populate('students');

    if (!updatedClass) {
      return NextResponse.json({ error: 'Class not found' });
    }   

    return NextResponse.json({ message: 'Class Updated ', data: updatedClass })

  } catch (error) {
    console.log("error updating class ", error)
    return NextResponse.error(error)
  }

}

// DELETE a class: /api/classes/[id]
export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))

  try {

    const deletedClass = await Class.findByIdAndDelete(params.class_id)

    return NextResponse.json({ message: 'Class deleted', data: deletedClass })

  } catch (error) {
    console.log("error deleting classes ", error)
    return NextResponse.error(error)
  }

}
