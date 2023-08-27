"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import Loading from '@/components/Loading'
import AddStudent from './AddStudent'
import { Trash } from 'lucide-react'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogAction, AlertDialogCancel, AlertDialogFooter, AlertDialogDescription, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { useToast, ToastAction } from "@/components/ui/use-toast"

export default function Page({ params }) {

  const [classData, setClassData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  // remove student from class 
  function removeStudent(studentId) {
    axios.delete(`/api/students/${studentId}?classId=${params.id}`)
      .then((data) => {
        const newClassData = data.data.data
        setClassData(newClassData)
        toast({
          variant: "destructive",
          title: "Removed student!",
          action: <ToastAction altText="Try again">Ok</ToastAction>,
        })
      }
      ).catch((error) => {
        console.log("error removing student ", error)
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

            <AddStudent setClassData={setClassData} classId={params.id} />
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
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="icon" >
                          <Trash size={16} className="text-red-500" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogTitle asChild>
                          <h3 className="text-lg leading-6 font-medium text-gray-900" >
                            Remove student
                          </h3>
                        </AlertDialogTitle>
                        <AlertDialogDescription >
                          <p className="text-sm text-gray-500">
                            Are you sure you want to remove this student?
                          </p>
                        </AlertDialogDescription>
                        <AlertDialogFooter>
                          <AlertDialogCancel asChild>
                          <Button variant="outline" >
                            Cancel
                            </Button>
                          </AlertDialogCancel>
                          <AlertDialogAction asChild>
                          <Button variant="destructive" onClick={() => removeStudent(student._id)}   >
                            Remove
                          </Button> 
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    {/* <Button onClick={() => removeStudent(student._id)} variant="icon" >
                      <Trash size={16} className="text-red-500" />
                    </Button> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>

  )
}
