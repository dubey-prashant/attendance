import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import '@/lib/mongodb'
import { Class, Student  } from '../../../models'
import { authOptions } from '../../../auth/[...nextauth]/route'

// GET all students in a class: /api/classes/[id]/students 
export async function GET(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))

  try {
    const classData = await Class.findById(params.id).populate('students')

    return NextResponse.json({ data: classData })

  } catch (error) {
    console.log("error fetching students ", error)
    return NextResponse.error(error)
  }

}

// CREATE a new student in a class: /api/classes/[id]/students
export async function POST(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url)) 

  const reqBody = await req.json()

  try {
    const newStudent = await Student.create(reqBody)
    const updatedClass = await Class.findOneAndUpdate(
      { _id: params.id },
      { $push: { students: newStudent._id } },
      { new: true }
    ).populate('students');

    return NextResponse.json({ message: 'Student created', data: updatedClass })

  } catch (error) {
    console.log("error creating student ", error)
    return NextResponse.error(error)
  }

}