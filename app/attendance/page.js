"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/router'
import { DatePicker } from '@/components/ui/datepicker'
import { Checkbox } from '@/components/ui/checkbox'

export default function page() {
  //  const router = useRouter()

  function handleLogin(e) {
    e.preventDefault()
    window.location = "/attendance"
    //  router.push("/attendance")
  }

  const dummyDta = [
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },
    {
      "id": 1,
      "name": "Arushi",
      "rollno": 1,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "P"
        }]
    },
    {
      "id": 2,
      "name": "Arushi",
      "rollno": 2,
      "attendance": [
        {
          "date": "2021-09-01",
          "status": "A"
        }]
    },]

  return (

    <>
      <header className=' bg-fuchsia-400 py-3 px-8 '>
        <div className="max-w-5xl w-full mx-auto flex justify-between items-center">

          <h3 className="text-2xl lg:text-3xl font-semibold text-fuchsia-950">Attendance - SYBCA </h3>
          <div className="">
            <DatePicker />
          </div>
        </div>

      </header>

      <main className="max-w-5xl mx-auto py-2 px-8">
        <div>
          <div className='flex justify-between items-center font-bold border-b-2 border-fuchsia-800 py-2 px-4 my-1 '>
            <div className='flex gap-3'>
              <p>Roll no</p>
              <p>Name</p>
            </div>
            <div className='flex gap-3'>
              <p className='text-center w-4'>P</p>
              <p className='text-center w-4'>A</p>
              <p className='text-center w-4'>L</p>
            </div>
          </div>
          {dummyDta.map((item) => (
            <div className='flex justify-between items-center py-1 px-4 my-0.5 border-b border-gray-200 '>
              <p>
                <span className=''>{item.rollno}</span>
                <span>{item.name}</span>
              </p>
              <div className='flex gap-3'>
                <Checkbox /> 
                <Checkbox />
                <Checkbox />
              </div>
            </div>
          ))}
        </div>

      </main>
    </>


  )
}
