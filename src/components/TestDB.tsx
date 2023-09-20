import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from 'react-icons/hi'



export default function TestDB() {
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h1>Test Database</h1>
          <h2>Users List</h2>
        </div>
        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={'/editTopic/123'}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>

    </>
  );
}
