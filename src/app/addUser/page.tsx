"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
}

function AddUser(props: Props) {

  const [id, setId] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("")
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("")
  const [group, setGroup] = useState("")

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!id || !first_name || !last_name || !title || !department || !group) {
      alert('all fields are required');
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ id, first_name, last_name, title, department, group })
      });

      if (res.ok) {
        router.refresh
        router.push('/')
      } else {
        throw new Error("Failed to create a user")
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      {/* user id? employee id */}
      {/* <input
        onChange={(e) => setId(e.target.value)}
        value={id}
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='User Number'
      /> */}
      <input
        onChange={(e) => setFirstName(e.target.value)}
        value={first_name}
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='User First Name'
      />
      <input
        onChange={(e) => setLastName(e.target.value)}
        value={last_name}
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