import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>
      <div className=" h-screen flex flex-col items-center justify-center bg-gray-400">
        <form className=" flex items-start flex-col justify-center">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-[18rem] md:w-[43rem]  p-4 pl-10  text-gray-900 text-xl border border-gray-300 rounded-lg bg-gray-50 outline-none "
              placeholder="Inter Your registered Email..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg  px-4 py-2 "
            >
              Search
            </button>
          </div>
        <Link to={'/login'} className="  flex items-start justify-start gap-2 mt-3 cursor-pointer text-blue-900 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          <span className="">back</span>
        </Link>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
