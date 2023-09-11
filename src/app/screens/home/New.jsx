
const New = () => {
  return (
   <section className='flex items-center flex-col h-screen w-full'>
<div className="flex w-3/4 h-32 items-center justify-between">
    <span className="font-bold text-xl text-white">New</span>
    <div>
    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
  <option selected>Choose </option>
  <option value="company">Add Company</option>
  <option value="post">Add Post</option>
  <option value="admin">Add Admin</option>
  <option value="cafe">Add Cafe Admin</option>
  <option value="visitor">Add Visitor</option>
</select>
    </div>

</div>


   </section>
  )
}

export default New