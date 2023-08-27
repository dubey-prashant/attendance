import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import '@/lib/mongodb'
import { Class, Student } from '../models'
import { authOptions } from '../auth/[...nextauth]/route'

// GET all students in a class: /api/classes/[id]/students 
export async function GET(req) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))

  const classId = req.nextUrl.searchParams.get('classId')

  try {
    const classData = await Student.find({ class: classId })

    return NextResponse.json({ data: classData })

  } catch (error) {
    console.log("error fetching students ", error)
    return NextResponse.error(error)
  }

}

// CREATE a new student in a class: /api/classes/[id]/students
export async function POST(req) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))

  const reqBody = await req.json()
  const classId = req.nextUrl.searchParams.get('classId')
  const newStudentData = {
    ...reqBody,
    class: classId
  }

  try {
    const newStudent = await Student.create(newStudentData)
    const updatedClass = await Class.findOneAndUpdate(
      { _id: classId },
      { $push: { students: newStudent._id } },
      { new: true }
    ).populate('students');

    return NextResponse.json({ message: 'Student created', data: updatedClass })

  } catch (error) {
    console.log("error creating student ", error)
    return NextResponse.error(error)
  }

}