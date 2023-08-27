"use client"

import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/datepicker'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import axios from '@/lib/axios'
import { useState, useEffect } from 'react'
import moment from 'moment' 
import Loading from '@/components/Loading'
import { useToast } from "@/components/ui/use-toast"

export default function Page({ params }) {
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const {toast} = useToast()

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    fetchAttendanceData();
  }, [selectedDate]);


  function fetchStudents() {
    setIsLoading(true)
    axios.get(`/api/students?classId=${params.id}`)
      .then((data) => {
        const students = data.data.data
        console.log("std: ", data)
        setStudents(students)
        console.log("students ", students)
        setIsLoading(false)
      }
      ).catch((error) => {
        console.log("error fetching students ", error)
        setIsLoading(false)
      }
      )
  }

  function fetchAttendanceData() {
    setIsLoading(true)
    axios.get(`/api/attendance?classId=${params.id}&date=${moment(selectedDate).format("YYYY-MM-DD")}`)
      .then((data) => {
        const attendanceData = data.data.data
        setAttendanceData(attendanceData)
        console.log("attendanceData ", attendanceData)
        setIsLoading(false)
      }
      ).catch((error) => {
        console.log("error fetching attendanceData ", error)
        setIsLoading(false)
      }
      )
  }


  const handleStatusChange = (studentId, newStatus) => {
    setAttendanceData((prevData) => ({
      ...prevData,
      [studentId]: newStatus
    }));
  };

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      const attendanceUpdate = Object.keys(attendanceData).map((studentId) => ({
        studentId,
        status: attendanceData[studentId]
      }));

      await axios.post('/api/attendance', {
        date: moment(selectedDate).format("YYYY-MM-DD"),
        classId: params.id,
        attendanceUpdate
      });

      console.log('Attendance submitted');
      setSubmitting(false)
      toast({title: "Attendance submitted"})

    } catch (error) {
      console.error('Error submitting attendance:', error);
      setSubmitting(false)
    }
  };

 

  return (
    isLoading ?
      <Loading />
      :
      <>
        <div className="max-w-3xl mx-auto py-2 px-8 ">
          <div className="  flex justify-between mb-4 ">
            <h2 className="text-xl">SYBCA - B</h2>

            <DatePicker
              className="w-42"
              date={selectedDate}           
              setDate={setSelectedDate}
              />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[72px] ">Roll no</TableHead>
                <TableHead className="w-full" >Name</TableHead>
                <TableHead className="flex gap-3 w-fit text-right items-center">
                  <p className='text-center w-4'>P</p>
                  <p className='text-center w-4'>A</p>
                  <p className='text-center w-4'>OD</p>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student, idx) => (
                <TableRow key={idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell className="w-fit text-right">
                    <RadioGroup className="flex gap-3"
                      value={attendanceData[student._id]}
                      onValueChange={(newStatus) => handleStatusChange(student._id, newStatus)}
                    >
                      <RadioGroupItem
                        value='P'
                      // checked={attendanceData[student.id] === 'P'}
                      // onValueChange={() => handleStatusChange(student.id, 'P')}
                      />
                      <RadioGroupItem
                        value='A'
                      // checked={attendanceData[student.id] === 'A'}
                      // onValueChange={() => handleStatusChange(student.id, 'A')}
                      />
                      <RadioGroupItem
                        value='OD'
                      // checked={attendanceData[student.id] === 'OD'}
                      // onValueChange={() => handleStatusChange(student.id, 'OD')}
                      />
                    </RadioGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" className="ml-2">
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={submitting} >{
              submitting ? "Submitting..." : "Submit"
            }</Button>
          </div>
        </div>
      </>


  )
}
