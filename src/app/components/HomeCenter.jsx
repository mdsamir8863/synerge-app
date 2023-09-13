import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const HomeCenter = () => {
const[date,set_date] = useState('')
const {user} = useSelector(e=>e.user_state_reducer)
const {companies,users} = useSelector(e=>e.users_companies_state_reducer)
const fetch_date=()=>{
// Create a new Date object
var today = new Date();

// Define an array of month names
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get the day and month
var day = today.getDate();
var month = monthNames[today.getMonth()];

// Format the date as "Month Day"
var formattedDate = month + " " + day;


set_date(formattedDate)
}

useEffect(()=>{
fetch_date()
},[])

  return (
<section className="flex-col w-1/2   items-start pl-10 flex gap-5 h-5/6 ">
<div className="flex text-white font-medium">
{date}
</div>
<div className="rounded-lg flex h-32 relative w-full  shadow-2xl  homecenter-top">
<div className="bg-black absolute top-0 opacity-40 w-full h-full rounded-lg"></div>
<div className="flex text-white font-bold z-20 text-xl w-full h-full p-7">
    Hello {user.name}, welcome to {user.location} Synerge community 
</div>


</div>





<div className=" my-5 flex w-full justify-evenly h-36 py-0 morphcard rounded-lg  overflow-x-scroll text-white flex-col">
<span className="m-3"> Companies</span>
<div className="flex  items-end  overflow-x-scroll w-full">

{companies && companies.map((e)=> 
<Link to={`/company/${e._id}`} key={e._id} className="flex items-center flex-col  mx-3 p-0">
<div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-gray-100 rounded-full ">
    <span className="font-bold text-gray-600 uppercase">{e?.name.slice(0,2)}</span>
</div>
<span className="text-[12px]">{(e.name).slice(0,6)}</span>
</Link>)
}

</div>


</div>

<div className=" flex my-5 w-full justify-evenly h-36  py-0 morphcard rounded-lg  overflow-x-scroll text-white flex-col">
<span className="m-3"> Users</span>
<div className="flex  items-end  overflow-x-scroll w-full">

{users && users.map((e)=> 
<Link to={`/user/${e._id}`} key={e._id} className="flex flex-col items-center   mx-3 p-0">
<div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-gray-100 rounded-full ">
    <span className="font-bold text-gray-600  uppercase">{e?.name.slice(0,2)}</span>
</div>
<span className="text-[12px]">{(e.name).slice(0,6)}</span>
</Link>)
}

</div>


</div>


</section>
  )
}

export default HomeCenter