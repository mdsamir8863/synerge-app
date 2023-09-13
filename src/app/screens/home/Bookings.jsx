import { useState } from "react";
import FilterPop from "../../components/FilterPop";
import AddNewBooking from "../../components/AddNewBooking";

const Bookings = () => {
  const [filter_overlay, set_filter_overlay] = useState(false);
  const [form_data, set_form_data] = useState({
    company: "",
    date: "",
  });
  const[add_booking_pop,set_add_booking_pop] = useState(false)
  
  const pop_up_filter = () => {
    set_filter_overlay((e) => !e);
  };

  const filter_handle_form = () => {
    console.log(form_data);
  };

  const handle_form_changes = (e) => {
    const { name, value } = e.target;
    set_form_data((prev) => ({
      ...prev,
      [name]: [value],
    }));
  };

const pop_up_new_booking=()=>{
    set_add_booking_pop(e=>!e)

}


  return (
    <>
      {filter_overlay ? (
        <FilterPop
          filter_handle_form={filter_handle_form}
          handle_form_changes={handle_form_changes}
          pop_up_filter={pop_up_filter}
        />
      ) : (
        ""
      )}
{
    add_booking_pop?  <AddNewBooking pop_up_new_booking={pop_up_new_booking}/>:''
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
        <div  className="flex w-16 h-16 bg-gray-600  text-white cursor-pointer  justify-center hover:rotate-45 duration-150 ease-in transition-all items-center absolute bottom-24 right-4 rounded-full">
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
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b h-16 border-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap "
                  >
                    Apple MacBook Pro 17
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">
                    <a href="#" className="font-medium  hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>

                <tr className="bg-white border-b h-16 border-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap "
                  >
                    Apple MacBook Pro 17
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">
                    <a href="#" className="font-medium  hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bookings;
