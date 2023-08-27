import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


export default function AddClass({ createClass }) {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

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
            <Button onClick={() => {
              createClass({ name, description })
              setDialogOpen(false)}}
              className="ml-auto"
            >Create Class</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

}
