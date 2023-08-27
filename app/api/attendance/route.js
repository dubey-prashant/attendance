import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import '@/lib/mongodb'
import { Student, Attendance } from '../models'
import { authOptions } from '../auth/[...nextauth]/route'

// GET attendance for a class: /api/attendance
export async function GET(req,) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))

  const date = req.nextUrl.searchParams.get('date')
  const classId = req.nextUrl.searchParams.get('classId')
 
  try {

    const attendanceData = await Attendance.find({ class: classId, date: new Date(date) }); 
    const attendanceMap = attendanceData.reduce((map, record) => {
      map[record.student.toString()] = record.status;
      return map;
    }, {});
    
    return NextResponse.json({data: attendanceMap})

  } catch (error) {
    console.log("error fetching attendance ", error)
  }
}

// CREATE a new attendance record: /api/attendance
export async function POST(req) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user)
    return NextResponse.redirect(new URL('/api/auth/signin', req.url))

  const {attendanceUpdate , classId , date  } = await req.json()
  console.log({ attendanceUpdate, classId, date }, "testyyy")
  
  try {

    for (const data of attendanceUpdate) {
      await Attendance.findOneAndUpdate(
        { student: data.studentId, class: classId, date: new Date(date) },
        { status: data.status },
        { upsert: true }
      );
    }
    return NextResponse.json({data: "success"})
    
  } catch (error) {
    console.log("error updating attendance ", error)
  }

}