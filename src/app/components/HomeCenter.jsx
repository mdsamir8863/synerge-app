import { useEffect, useState } from "react"


const HomeCenter = () => {
const[date,set_date] = useState('')


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
<div className="flex text-white font-bold z-20 text-xl w-full h-full p-5">
    Hello Synerge This is Admin from 
</div>


</div>





<div className=" my-5 flex w-full justify-evenly h-36 py-0 morphcard rounded-lg  overflow-x-scroll text-white flex-col">
<span className="m-3"> Companies</span>
<div className="flex  items-end  overflow-x-scroll w-full">

<div className="flex flex-col  mx-3 p-0">
<div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
</div>
</div>
<div className="flex flex-col  mx-3 p-0">
<div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
</div>
    
</div>

</div>


</div>

<div className=" flex my-5 w-full justify-evenly h-36  py-0 morphcard rounded-lg  overflow-x-scroll text-white flex-col">
<span className="m-3"> Users</span>
<div className="flex  items-end  overflow-x-scroll w-full">

<div className="flex flex-col  mx-3 p-0">
<div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
</div>
    
</div>

</div>


</div>


</section>
  )
}

export default HomeCenter