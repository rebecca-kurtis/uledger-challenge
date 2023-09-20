'use client';

import { useRouter } from 'next/navigation';
import { HiOutlineTrash } from 'react-icons/hi'

type Props = {
  id: any;
}

const RemoveBtn = ({ id }: Props) => {

  const router = useRouter();

  const removeUser = async () => {
    const confirmed = confirm('Are you sure you want to delete this user?');

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/users?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeUser} className='text-red-500'>
      <HiOutlineTrash size={24} />
    </button>
  )
}

export default RemoveBtn