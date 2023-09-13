import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";



const UploadEvent = ({toggle_pop_up}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(new FormData());


  const new_event_handler = async () => {
    dispatch({ type: "loading_data", payload: true });
    await Axios.post("/api/v1/create/event",formData)
    .then((res)=>{
        console.log(res)
        if(res.data.success){
            alert('updated Event')
        }
    }).catch(err=>{
        console.log(err)
        alert(err.reponse.data.message || err.message)
    }).finally(()=>{
        dispatch({ type: "loading_data", payload: false });
    })

};


  const handleImageChange=(e)=>{
    const file = e.target.files[0];

    // Update the FormData object with the selected image file
    formData.set("EventImg", file);
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the FormData object when form inputs change
    formData.set(name, value);
  };

  return (
    <section className="w-full z-50 h-screen fixed">
      <div className="flex w-full h-full  justify-center items-center relative">
        <div onClick={toggle_pop_up} className="flex w-full z-10 absolute h-full bg-black opacity-70"></div>
        <form
          onSubmit={new_event_handler}
          className="w-1/2  flex-col p-5 z-20 bg-white rounded-lg"
        >
          <span className="font-bold my-3 text-gray-700">
            Upload a new event with Image
          </span>

          <div className="flex my-5 items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                required
                onChange={handleImageChange}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
          </div>
          <div className="relative my-5 z-0">
            <input
              required
              type="text"
              id="floating_standard"
              name="EventName"
              onChange={handleInputChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Event Title
            </label>
          </div>
          <div className="relative my-5 z-0">
            <textarea
              type="text"
              id="floating_standard"
              name="EventDesc"
              onChange={handleInputChange}
              className="block resize-none py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description about event
            </label>
          </div>
          <div className="relative my-5 z-0">
            <input
              type="date"
              id="EventDate"
              name="EventDate"
              onChange={handleInputChange}
              className="block resize-none py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="EventDate"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description about event
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Create New Event
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UploadEvent;
