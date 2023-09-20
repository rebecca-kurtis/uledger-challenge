export default function EditUserForm() {
  return (
    <form className='flex flex-col gap-3'>
      <input
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='User Number'
      />
      <input
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='User First Name'
      />
      <input
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='User Last Name'
      />
      <input
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='Title'
      />
      <input
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='Department'
      />
      <input
        className='border border-slate-500 px-8 py-2'
        type="text"
        placeholder='Group'
      />
      <button className='bg-blue-500 font-bold text-white py-3 px-6 w-fit'>Update User</button>
    </form>
  )
}