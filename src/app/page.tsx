import TestDB from '@/components/TestDB'
import UsersList from '@/components/UsersList'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <h4>User Database</h4>
      <Link className='rounded-md bg-blue-500 px-2 text-white font-bold' href={"/addUser"} >Add User</Link>
      <UsersList />
    </main>
  )
}
