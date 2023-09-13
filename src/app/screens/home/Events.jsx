import { useEffect, useState } from "react";
import UploadEvent from "../../components/UploadEvent";
import { useDispatch } from "react-redux";
import Axios from "axios";
import ShowEventPop from "../../components/ShowEventPop";
import ReadDate from "../../utils/ReadDate";

const Events = () => {
  const dispatch = useDispatch();
  const [event_pop_up, set_event_pop_up] = useState(false);
  const [image_pop_up, set_image_pop_up] = useState(false);
  const [url, set_url] = useState(null);
  const [events, set_events] = useState([]);
  const toggle_pop_up = () => {
    set_event_pop_up((e) => !e);
  };

  const fetch_events = async () => {
    dispatch({ type: "loading_data", payload: true });
    await Axios.get("/api/v1/admin/events")
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          set_events(res.data.events);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch({ type: "loading_data", payload: false });
      });
  };

  const action_show = (image) => {
    set_url(image);
    inactive_image_show()
  };

  const inactive_image_show=()=>{
    set_image_pop_up(e=>!e)
  }

  useEffect(() => {
    fetch_events();
  }, []);

  return (
    <>
      {event_pop_up ? <UploadEvent toggle_pop_up={toggle_pop_up} /> : ""}
       {image_pop_up ? <ShowEventPop url={url} inactive_image_show={inactive_image_show} />:''}
      <section className="w-full flex flex-col h-screen justify-evenly items-center">
        <div className="w-3/4 py-5 flex justify-center  font-bold text-white text-xl">
          All Events
        </div>

        <div className="flex w-3/4 justify-end ">
          <button
            onClick={toggle_pop_up}
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 flex gap-2 items-center focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 "
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            Create Event
          </button>
        </div>

        <div className="flex w-3/4 h-4/5   items-center justify-center">
          <div className="relative w-full h-full  overflow-y-scroll overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full h-auto overflow-y-scroll text-sm text-left text-blue-100 ">
              <thead className="text-xs text-white uppercase bg-blue-600 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Event name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Event Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {events &&
                  events.map((e) => (
                    <tr
                      key={e._id}
                      className="bg-blue-500 border-b h-16 border-blue-400"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap "
                      >
                        {e?.EventName}
                      </th>
                      <td className="px-6 py-4">{e?.EventDesc}</td>
                      <td className="px-6 py-4">{ReadDate(e?.EventDate)}</td>

                      <td className="px-6 py-4">
                        <button
                          onClick={() => action_show(e.EventImg)}
                          className="font-medium text-white hover:underline"
                        >
                          Show
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
