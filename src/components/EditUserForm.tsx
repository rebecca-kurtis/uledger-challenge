"use client";

import { useRouter } from "next/navigation";
import { setgroups } from "process";
import { useState } from "react"

type Props = {
  id: any,
  firstName: string,
  lastName: string,
  title: string,
  department: string,
  group: number,

}


export default function EditUserForm({ firstName,
  lastName,
  title,
  department,
  group,
  id
}: Props) {

  const [newFistName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newTitle, setNewTitle] = useState(title);
  const [newDepartment, setNewDepartment] = useState(department);
  const [newGroup, setNewGroup] = useState(group);
  const router = useRouter();


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newFistName, newLastName, newTitle, newDepartment, newGroup }),
      });

      if (!res.ok) {
        throw new Error("Failed to update user")
      }

      router.push("/")

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      {/* Id number? Employee number? */}
      {/* <input
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='User Number'
      /> */}
      <input
        onChange={(e) => setNewFirstName(e.target.value)}
        className='border border-slate-500 px-8 py-2'
        type="text"
        value={newFistName}
      />
      <input
        onChange={(e) => setNewLastName(e.target.value)}
        className='border border-slate-500 px-8 py-2'
        type="text"
        value={newLastName}
      />
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        className='border border-slate-500 px-8 py-2'
        type="text"
        value={newTitle} />
      <input
        onChange={(e) => setNewDepartment(e.target.value)}
        className='border border-slate-500 px-8 py-2'
        type="text"
        value={newDepartment}
      />
      <input
        onChange={(e) => setNewGroup(Number(e.target.value))}

        className='border border-slate-500 px-8 py-2'
        type="text"
        value={newGroup}
      />
      <button className='bg-blue-500 font-bold text-white py-3 px-6 w-fit'>Update User</button>
    </form>
  )
}