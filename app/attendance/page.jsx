"use client"

import { Button } from '@/components/ui/button' 
import { DatePicker } from '@/components/ui/datepicker' 
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table' 

export default function page() { 

  const dummyDta = [
    {
      "id": 1,
      "name": "Akash",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }
      ]
    },
    {
      "id": 2,
      "name": "Skyler",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }
      ]
    },
    {
      "id": 3,
      "name": "John",
      "rollno": 3,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }
      ]
    },
    {
      "id": 4,
      "name": "Jane",
      "rollno": 4,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }
      ]
    },
    {
      "id": 5,
      "name": "Emily",
      "rollno": 5,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }
      ]
    },
    {
      "id": 6,
      "name": "Emma",
      "rollno": 6,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }
      ]
    }
  ]

  function submitHandler(e) {
    alert('submitted')
  }

  return (

    <>
      <div className="max-w-3xl mx-auto py-2 px-8 ">
        <div className="  flex justify-between mb-4 ">
          <h2 className="text-xl">SYBCA - B</h2>

          <DatePicker className="w-42" initialDate={Date.now} />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[72px] ">Roll no</TableHead>
              <TableHead className="w-full" >Name</TableHead>
              <TableHead className="flex gap-3 w-fit text-right items-center">
                <p className='text-center w-4'>P</p>
                <p className='text-center w-4'>A</p>
                <p className='text-center w-4'>L</p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyDta.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.rollno}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className="w-fit text-right">
                  <RadioGroup className="flex gap-3" >
                    <RadioGroupItem value='P' />
                    <RadioGroupItem value='A' />
                    <RadioGroupItem value='L' />
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
          <Button onClick={submitHandler}>Submit</Button>
        </div>
      </div>
    </>


  )
}
