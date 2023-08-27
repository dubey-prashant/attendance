"use client"

import ClassCard from '@/components/ClassCard'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'

export default function page() {

  const [classes, setClasses] = useState([])

  function createClass() {
    axios.post('/api/class', {
      name: "test class",
      description: "test description",
    })
      .then((data) => {
        const newClass = data.data.data
        setClasses([...classes, newClass])
      })
      .catch((error) => {
        console.log("error creating classes ", error)
      })
  }

  function deleteClass(id) {
    console.log("called delete class ")
    axios.delete(`/api/class/${id}`)
      .then((data) => {
        const deletedClass = data.data.data
        const newClasses = classes.filter((c) => c._id !== deletedClass._id)
        setClasses(newClasses)
      })
      .catch((error) => {
        console.log("error deleting classes ", error)
      })
  }

  useEffect(() => {
    console.log("called use effect ")
    axios.get('/api/class')
      .then((data) => {
        const classes = data.data.data
        console.log("classes ", classes)
        setClasses(classes)
        console.log("done w use effect ")
      })
      .catch((error) => {
        console.log("error fetching classes ", error)
      })
  }, [])


  return (

    <>
      <div className="mb-2">
        <h1 className='text-2xl font-semibold mb-2 '>
          Classes
        </h1>
        <p className='text-sm text-muted font-medium'>
          Classes are the building blocks of your school. You can create as many classes as you want.
        </p>
      </div>

      <div className="text-center sm:text-left sm:grid lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
        {classes.map((c) => (
          <ClassCard
            key={c._id}
            name={c.name}
            description={c.description}
            image={c.image}
            onDelete={() => deleteClass(c._id)} />
        ))}

      </div>
    </>

  )
}

// <>
//   <div className="max-w-3xl mx-auto py-2 px-8 ">
//     <div className="  flex justify-between mb-4 ">
//       <h2 className="text-xl">SYBCA - B</h2>

//       <DatePicker className="w-42" initialDate={Date.now} />
//     </div>
//     <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="min-w-[72px] ">Roll no</TableHead>
//           <TableHead className="w-full" >Name</TableHead>
//           <TableHead className="flex gap-3 w-fit text-right items-center">
//             <p className='text-center w-4'>P</p>
//             <p className='text-center w-4'>A</p>
//             <p className='text-center w-4'>L</p>
//           </TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {dummyDta.map((item) => (
//           <TableRow key={item.id}>
//             <TableCell>{item.rollno}</TableCell>
//             <TableCell>{item.name}</TableCell>
//             <TableCell className="w-fit text-right">
//               <RadioGroup className="flex gap-3" >
//                 <RadioGroupItem value='P' />
//                 <RadioGroupItem value='A' />
//                 <RadioGroupItem value='L' />
//               </RadioGroup>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//     <div className="flex justify-end gap-3 mt-6">
//       <Button variant="outline" className="ml-2">
//         Cancel
//       </Button>
//       <Button onClick={submitHandler}>Submit</Button>
//     </div>
//   </div>
// </>