"use client"

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import axios from '@/lib/axios'


export default function AddStudent({ setClassData, classId }) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  // add student to class
  function addStudent() {
    setLoading(true)
    axios.post(`/api/students?classId=${classId}`, {
      name
    }).then((data) => {
      const newClassData = data.data.data
      setClassData(newClassData)
      setLoading(false)
      setDialogOpen(false)
    }
    ).catch((error) => {
      console.log("error adding student ", error)
      setLoading(false)
    }
    )
  }

  return (
    <Dialog
      open={dialogOpen}
      onOpenChange={setDialogOpen}>
      <DialogTrigger asChild >
        <Button variant="outline" >
          Add Student
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="text-center">
          <h3 className="text-2xl leading-6 font-medium mb-8 " >
            Create a new class
          </h3>
          <div className="mt-2 space-y-4">
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name "
            />
            {/* <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add description "
              required
              rows={4}
            /> */}
            <Button
              onClick={addStudent}
              disabled={loading}
              className="ml-auto"
            >
              {loading ? "Adding..." : "Add Student"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

}