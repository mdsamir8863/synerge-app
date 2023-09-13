/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"


const FilterPop = ({pop_up_filter,handle_form_changes,filter_handle_form}) => {

const {companies} = useSelector(e=>e.users_companies_state_reducer)

  return (
<section className="w-full z-50 h-screen fixed">
<div className="flex w-full h-full justify-center items-center relative">
<div onClick={pop_up_filter} className="flex w-full absolute h-full bg-black z-10 opacity-70"></div>

<div className="flex w-1/3 h-auto z-20 p-5 bg-white rounded-md flex-col">
<span className="font-bold ">Filter Bookings</span>
<div>
<select id="countries"  name="company" onChange={handle_form_changes} className="bg-gray-50 my-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a company</option>
  {companies&& companies.map((e)=>   <option key={e._id} value={e._id}>{e.name}</option>)}
</select>
</div>

<div>
            <input  type="date" id="date" name="date" onChange={handle_form_changes} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <button onClick={filter_handle_form} type="button" className="text-white my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

</div>


</div>
</section>
  )
}

export default FilterPop