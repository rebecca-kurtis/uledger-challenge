import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from 'react-icons/hi'

const getUsers = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/users', {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading users", error);
  }
}



export default async function UsersList() {

  const { users } = await getUsers();

  return (
    <>
      {users.map((user) => (

        <div key={`${user.id}`} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h1>{`${user.first_name} ${user.last_name}`}</h1>
            <h2>{`${user.title}`}</h2>
            <h3>{`Department: ${user.department}`}</h3>
            <h3>{`Group: ${user.group}`}</h3>
          </div>
          <div className="flex gap-2">
            <RemoveBtn />
            <Link href={`/editUser/${user._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}

    </>
  );
}
