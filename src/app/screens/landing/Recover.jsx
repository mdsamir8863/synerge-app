import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
  const [email, SetEmail] = useState("");
  const dispatch = useDispatch()

  const Sendmail = async (e) => {
    e.preventDefault();
dispatch({type:'loading_data', payload:true})
    await Axios.post(`/api/v1/recover/password/${email}`)
      .then((res) => {
        if (res.data.success === true) {
          toast.success("Check your mail, we have sent password on your mail.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || err.message);
      }).finally(()=>{
        dispatch({type:'loading_data', payload:false})
      })
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div>
          <Toaster />
        </div>
        <div className="flex items-center justify-evenly w-2/3 h-1/3 flex-col">
          <img
            className="w-1/5"
            src="https://www.synergeworkspace.com/images/logo.png"
            alt=""
          />

          <span className="w-3/4 flex justify-center items-center">
            <form onSubmit={Sendmail} className="w-full">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only rk:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 rk:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  onChange={(e) => SetEmail(e.target.value)}
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 phone:w-full rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                  placeholder="Enter the Registered Email"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 rk:bg-blue-600 rk:hover:bg-blue-700 rk:focus:ring-blue-800"
                >
                  Send
                </button>
              </div>
            </form>
          </span>

          <span className="w-3/4 mt-12 px-2 flex flex-col">
            <span className="font-bold text-[12px]">
              Password Rercovery: enter the email address to recover your
              password{" "}
            </span>
            <Link
              to="/login"
              className="font-medium text-red-600 hover:underline rk:text-red-500"
            >
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
