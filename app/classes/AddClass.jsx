import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import axios from "@/lib/axios";

export default function AddClass({setClasses, classes}) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)


  function createClass() {
    setDialogOpen(true)
    setLoading(true)
    axios.post('/api/classes', {
      name,
      description
    })
      .then((data) => {
        const newClass = data.data.data
        setClasses([...classes, newClass])
        setLoading(false)
        setDialogOpen(false)
      })
      .catch((error) => {
        console.log("error creating classes ", error)
        setLoading(false)
      })
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen} >
      <DialogTrigger asChild >
        <Button variant="outline" >Add Class</Button>
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
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add description "
              required
              rows={4}
            />
            <Button onClick={createClass}
              className="ml-auto"
            >
              {loading ? "creating..." : "Create Class"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

}
