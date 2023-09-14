import { useEffect, useState } from "react";
import FilterPop from "../../components/FilterPop";
import AddNewBooking from "../../components/AddNewBooking";
import { useDispatch, useSelector } from "react-redux";
import Axios  from "axios";
import fetch_company from "../../utils/fetchCompany";
import ReadDate from "../../utils/ReadDate";

const Bookings = () => {
  const {companies} = useSelector(e=>e.users_companies_state_reducer)
  const [filter_overlay, set_filter_overlay] = useState(false);
  const dispatch = useDispatch()
  const [all_bookings,set_all_bookings] = useState([])
  const [form_data, set_form_data] = useState({
    company: "",
    date: "",
  });
  const [booking_form_data,set_booking_form_data]=useState({
    company:'',
    date:'',
    time:'',
    room:''
  })


  


  const[add_booking_pop,set_add_booking_pop] = useState(false)
  
  const pop_up_filter = () => {
    set_filter_overlay((e) => !e);
  };



  const handle_form_changes = (e) => {
    const { name, value } = e.target;
    set_form_data((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handle_booking_form_changes = (e) => {
    const { name, value } = e.target;
    set_booking_form_data((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const pop_up_new_booking=()=>{
    set_add_booking_pop(e=>!e)
}




const room_booking_handler=async(e)=>{
  e.preventDefault();
dispatch({type:'loading_user', payload:true})
await Axios.post('/api/v1/booking/create/admin',booking_form_data)
.then((res)=>{
  console.log(res)
  if(res.data.success===true){
    alert(res.data.message)
  }
}).catch((err)=>{
  console.log(err)
  alert(err.response.data.message || err.message)
}).finally(()=>{
  dispatch({type:'loading_user', payload:false})
  set_add_booking_pop(false)
})




}


const fetch_all_bookings =async()=>{
  dispatch({type:'loading_data', payload:true})
  await Axios.get(`/api/v1/allbookings?date=${new Date()}`)
  .then((res)=>{
    if(res.data.allSlots){      
      set_all_bookings(res.data.allSlots)
    }
  }).catch((err)=>{
    console.log(err)
  }).finally(()=>{
  dispatch({type:'loading_data', payload:false})
  })
}


const fetch_all_company_bookings=async(e)=>{
  e.preventDefault();
dispatch({type:'loading_data',payload:true})
await Axios.get(`/api/v1/bookings/details?date=${form_data.date}&company=${form_data.company}`)
.then((res)=>{
  console.log(res)
  set_filter_overlay(false)
  set_all_bookings(res?.data?.slots)
}).catch((err)=>{
  console.log(err)
}).finally(()=>{
dispatch({type:'loading_data',payload:false})
})




}


useEffect(()=>{
fetch_all_bookings()
},[])


  return (
    <>
      {filter_overlay ? (
        <FilterPop
        fetch_all_company_bookings={fetch_all_company_bookings}
          handle_form_changes={handle_form_changes}
          pop_up_filter={pop_up_filter}
        />
      ) : (
        ""
      )}
{
    add_booking_pop?  <AddNewBooking 
    room_booking_handler={room_booking_handler}
    handle_booking_form_changes={handle_booking_form_changes} pop_up_new_booking={pop_up_new_booking}/>:''
}


      <section className="flex flex-col w-full h-screen justify-evenly items-center">
        <div onClick={pop_up_new_booking} className="flex w-16 h-16 hover:rotate-45 duration-150 ease-in transition-all bg-gray-100 cursor-pointer text-black absolute justify-center items-center bottom-6 right-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <div onClick={fetch_all_bookings} className="flex w-16 h-16 bg-gray-600  text-white cursor-pointer  justify-center hover:rotate-45 duration-150 ease-in transition-all items-center absolute bottom-24 right-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </div>

        <div className="flex py-5 items-center justify-between w-3/4">
          <span className="font-medium text-xl text-white">ALl Bookings</span>
          <div className="text-white ">
            <svg
              onClick={pop_up_filter}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
        </div>

        <div className="flex w-3/4 justify-center items-center h-4/5">
          <div className="relative w-full h-full  overflow-y-scroll overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full h-auto overflow-y-scroll text-sm text-left  ">
              <thead className="text-xs  uppercase bg-gray-600 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Room
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Booked by
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Booked at
                  </th>
                </tr>
              </thead>
              <tbody>
              { all_bookings && all_bookings.map((e)=> <tr key={e._id}  className={e.flexy ?  "h-16 text-white bg-gradient-to-r from-cyan-500 to-blue-500": "bg-white text-gray-700  border-b h-16 border-white"}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    {fetch_company(companies,e?.company)}
                  </th>
                  <td className="px-6 py-4">{e?.room}</td>
                  <td className="px-6 py-4">{e?.time}</td>
                  <td className="px-6 py-4">{e?.bookedby.split('+')[0]}</td>
                  <td className="px-6 py-4">
                    {ReadDate(e?.CraetedAt)}
                  </td>
                </tr>)}

               
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bookings;
