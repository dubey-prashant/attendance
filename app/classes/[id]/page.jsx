"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from '@/components/Loading'
import AddStudent from './AddStudent'
import { Trash } from 'lucide-react'

export default function page({ params }) {

  const [classData, setClassData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  // add student to class
  function addStudent({ name }) {
    axios.post(`/api/classes/${params.id}/students`, {
      name
    }).then((data) => {
      const newClassData = data.data.data
      setClassData(newClassData)
    }
    ).catch((error) => {
      console.log("error adding student ", error)
    }
    )
  }

  // remove student from class 
  function removeStudent(studentId) {
    console.log("called remove student ", studentId)
    axios.delete(`/api/classes/${params.id}/students/${studentId}`)
      .then((data) => {
        const newClassData = data.data.data
        setClassData(newClassData)
      }
      ).catch((error) => {
        console.log("error adding student ", error)
      }
      )
  }

  // fetch class data on page load
  useEffect(() => {
    setIsLoading(true)
    axios.get(`/api/classes/${params.id}`)
      .then((data) => {
        const classData = data.data.data
        setClassData(classData)
        console.log("classData ", classData)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log("error fetching classData ", error)
        setIsLoading(false)
      })
  }, [])


  return (

    isLoading
      ?
      <Loading />
      :
      <>
        <div className="max-w-3xl mx-auto py-2 px-8 ">
          <div className="  flex justify-between mb-4 ">
            <h2 className="text-xl">{classData?.name}</h2>

            <AddStudent addStudent={addStudent} />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[72px] ">Roll no</TableHead>
                <TableHead className="w-full" >Name</TableHead>
                <TableHead className="flex gap-3 w-fit text-right items-center">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classData?.students.map((student, idx) => (
                <TableRow key={idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell className="w-fit text-right">
                    <Button onClick={() => removeStudent(student._id)} variant="icon" >
                      <Trash size={16} className="text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>

  )
}
