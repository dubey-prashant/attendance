import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import '@/lib/mongodb'
import { Class, Student } from '../../models'
import { authOptions } from '../../auth/[...nextauth]/route'

// GET a student: /api/students/[student_id]
export async function GET(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))

  try {
    const student = await Student.findById(params.student_id)

    return NextResponse.json({ data: student })

  } catch (error) {
    console.log("error fetching student ", error)
    return NextResponse.error(error)
  }

}

// UPDATE a student: /api/students/[student_id]
export async function PATCH(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))

  const reqBody = await req.json()

  try {

    const updatedStudent = await Student.findOneAndUpdate(
      { _id: params.student_id },
      reqBody,
      { new: true }
    );

    if (!updatedStudent) {
      return NextResponse.json({ error: 'Student not found' });
    }

    return NextResponse.json({ message: 'Student Updated ', data: updatedStudent })

  } catch (error) {
    console.log("error updating student ", error)
    return NextResponse.error(error)
  }

}

// DELETE a student: /api/students/[student_id]
export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url)) 
  
  const classId = req.nextUrl.searchParams.get('classId') 

  try {

    const deletedStudent = await Student.findOneAndDelete({ _id: params.student_id });

    if (!deletedStudent) {
      return NextResponse.json({ error: 'Student not found' });
    }

    const updatedClass = await Class.findOneAndUpdate(
      { _id: classId },
      { $pull: { students: params.student_id } },
      { new: true }
    ).populate('students');

    return NextResponse.json({ message: 'Student deleted', data: updatedClass })

  } catch (error) {
    console.log("error deleting student ", error)
    return NextResponse.error(error)
  }

}
