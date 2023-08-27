"use client"

import axios from '@/lib/axios'
import { useEffect, useState } from 'react' 
import Loading from '@/components/Loading' 
import ClassCard from '@/components/ClassCard'
import AddClass from './AddClass'

export default function page() {

  const [classes, setClasses] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function createClass({ name, description }) {
    axios.post('/api/classes', {
      name,
      description
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
    axios.delete(`/api/classes/${id}`)
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
    setIsLoading(true)
    axios.get('/api/classes')
      .then((data) => {
        const classes = data.data.data
        setClasses(classes)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log("error fetching classes ", error)
        setIsLoading(false)
      })
  }, [])


  return (
    isLoading ?
      <Loading />
      :
      <>
        <div className="mb-4 flex items-start justify-between">
          <h1 className='text-2xl font-semibold mb-4 '>
            Classes
          </h1>

          <AddClass createClass={createClass} />
        </div>


        <div className="text-center sm:text-left sm:grid lg:grid-cols-2 xl:grid-cols-3 gap-4">

          {classes.map((c) => (
            <ClassCard
              key={c._id}
              id={c._id}
              name={c.name}
              description={c.description}
              image={c.image}
              onDelete={() => deleteClass(c._id)} />
          ))}

        </div>

      </>
  )
}
