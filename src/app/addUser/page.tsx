"use client";

import { useState } from "react";

type Props = {}

function AddUser({ }: Props) {

  const [employerId, setEmployerId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("")
  const [group, setGroup] = useState("")



  return (
    <form className='flex flex-col gap-3'>
      <input
        onChange={(e) => setEmployerId(e.target.value)}
        value={employerId}
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='User Number'
      />
      <input
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='User First Name'
      />
      <input
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='User Last Name'
      />
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='Title'
      />
      <input
        onChange={(e) => setDepartment(e.target.value)}
        value={department}
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='Department'
      />
      <input
        onChange={(e) => setGroup(e.target.value)}
        value={group}
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='Group'
      />
      <button className='bg-blue-500 font-bold text-white py-3 px-6 w-fit'>Add User</button>
    </form>
  )
}

export default AddUser