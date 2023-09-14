import { useEffect } from "react";
import { useSelector } from "react-redux";

const AddNewBooking = ({
  room_booking_handler,
  handle_booking_form_changes,
  pop_up_new_booking,
}) => {
  const { companies } = useSelector((e) => e.users_companies_state_reducer);
  const { user } = useSelector((e) => e.user_state_reducer);

  const Timings = [
    "8:00 AM -9:00 AM",
    "9:00 AM -10:00 AM",
    "10:00 AM -11:00 AM",
    "11:00 AM -12:00 AM",
    "12:00 AM -1:00 PM",
    "1:00 PM -2:00 PM",
    "2:00 PM -3:00 PM",
    "3:00 PM -4:00 PM",
    "4:00 PM -5:00 PM",
    "5:00 PM -6:00 PM",
    "6:00 PM -7:00 PM",
    "7:00 PM -8:00 PM",
  ];

  const rooms =
    user.location === "hsr"
      ? [
          "Meeting-Room-01",
          "Meeting-Room-02",
          "Meeting-Room-03",
          "Meeting-Room-04",
          "Meeting-Room-05",
        ]
      : ["Conference-Room", "Board-Room", "Discussion-Room"];

  return (
    <section className="w-full h-screen fixed z-50">
      <div className="flex w-full h-full relative justify-center items-center">
        <div
          onClick={pop_up_new_booking}
          className="flex  w-full h-full bg-black absolute opacity-70 z-10"
        ></div>
        <form
          onSubmit={room_booking_handler}
          className="flex-col gap-5 z-20 phone:w-3/4 flex w-1/3 h-auto p-5 bg-white rounded-lg"
        >
          <span className="font-bold text-xl">Add Booking</span>
          {user.Admin ? (
            <div>
              <select
                required
                id="countries"
                name="company"
                onChange={handle_booking_form_changes}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a company</option>
                {companies &&
                  companies.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e.name}
                    </option>
                  ))}
              </select>
            </div>
          ) : (
            ""
          )}
          <div>
            <select
              id="room"
              name="room"
              required
              onChange={handle_booking_form_changes}
              className="bg-gray-50 mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a Room</option>
              {rooms &&
                rooms.map((e, index) => (
                  <option key={index} value={e}>
                    {e}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <select
              id="countries"
              name="time"
              required
              onChange={handle_booking_form_changes}
              className="bg-gray-50 my-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a Time</option>
              {Timings &&
                Timings.map((e, index) => (
                  <option key={index} value={e}>
                    {e}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <input
              type="date"
              id="date"
              name="date"
              onChange={handle_booking_form_changes}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewBooking;
