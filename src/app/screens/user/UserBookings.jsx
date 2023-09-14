import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import ReadDate from "../../utils/ReadDate";
import AddNewBooking from "../../components/AddNewBooking";

const UserBookings = () => {
  const dispatch = useDispatch();
  const [bookings, set_bookings] = useState([]);
  const { user } = useSelector((e) => e.user_state_reducer);
  const [add_booking_pop, set_add_booking_pop] = useState(false);
  const [booking_form_data, set_booking_form_data] = useState({
    company: "",
    date: "",
    time: "",
    room: "",
  });

  const fetch_bookings = async () => {
    dispatch({ type: "loading_data", payload: true });

    const str = new Date();

    const date = str.toUTCString();
    const company = user.company;
    console.log(company);
    await Axios.get(
      `/api/v1/mycompany/bookings?date=${date}&company=${company}`
    )
      .then((res) => {
        console.log(res);
        if (res.data.allCompanySlots) {
          set_bookings(res.data.allCompanySlots);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch({ type: "loading_data", payload: false });
      });
  };

  const room_booking_handler = async (e) => {
    e.preventDefault();
    console.log(booking_form_data);
      dispatch({type:'loading_user', payload:true})
      await Axios.post('/api/v1/mycompany/booking',booking_form_data)
      .then((res)=>{
        console.log(res)
        if(res.data.success===true){
          alert('Successfully added')
        }
      }).catch((err)=>{
        console.log(err)
        alert(err.response.data.message || err.message)
      }).finally(()=>{
        dispatch({type:'loading_user', payload:false})
        set_add_booking_pop(false)
      })
  };

  const pop_up_new_booking = () => {
    set_add_booking_pop((e) => !e);
  };

  const handle_booking_form_changes = (e) => {
    const { name, value } = e.target;
    set_booking_form_data((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetch_bookings();
  }, []);
  return (
    <>
      {add_booking_pop ? (
        <AddNewBooking
          room_booking_handler={room_booking_handler}
          handle_booking_form_changes={handle_booking_form_changes}
          pop_up_new_booking={pop_up_new_booking}
        />
      ) : (
        ""
      )}
      <section className="w-full h-screen flex flex-col p-5 gap-2 ">
        <div
          onClick={pop_up_new_booking}
          className="flex w-16 justify-center items-center h-16 shadow-2xl border-2 border-red-600 bg-white rounded-full absolute bottom-[15%] right-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </div>

        <span className="font-bold text-xl text-white">Bookings</span>
        <div className="flex overflow-x-scroll h-4/5 w-full ">
          <table className="w-full h-full  overflow-y-scroll overflow-x-auto text-sm text-left  ">
            <thead className="text-xs  uppercase bg-gray-600 ">
              <tr>
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
              {bookings &&
                bookings.map((e) => (
                  <tr
                    key={e._id}
                    className={
                      e.flexy
                        ? "h-16 text-white bg-gradient-to-r from-cyan-500 to-blue-500"
                        : "bg-white text-gray-700  border-b h-16 border-white"
                    }
                  >
                    <td className="px-6 py-4">{e?.room}</td>
                    <td className="px-6 py-4">{e?.time}</td>
                    <td className="px-6 py-4">{e?.bookedby.split("+")[0]}</td>
                    <td className="px-6 py-4">{ReadDate(e?.CraetedAt)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default UserBookings;
