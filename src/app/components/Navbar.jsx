import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [tab, set_tab] = useState(location.pathname);
  const navigate = useNavigate();

  const fetch_tab = () => {
    set_tab(location.pathname);
  };

  useEffect(() => {
    fetch_tab();
  }, [tab]);

  return (
    <aside className="w-52 flex justify-center items-center fixed  h-screen">
      <div className="w-5/6 flex flex-col justify-start gap-5  morphcard h-5/6 rounded-lg pt-5">
        <div className="w-full my-6 flex justify-center">
          <img
            src="https://www.synergeworkspace.com/images/logo.png"
            alt="logo"
            className="w-32"
          />
        </div>
        <div className="flex  items-center justify-between flex-col">
          {tab == "/" ? (
            <span className=" mb-3 cursor-pointer bg-red-600 text-white  font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2">
              Home
            </span>
          ) : (
            <span
              onClick={() => {
                set_tab("/");
                navigate("/");
              }}
              className=" mb-3 cursor-pointer text-red-600 font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2"
            >
              Home
            </span>
          )}
          {tab == "/events" ? (
            <span className=" mb-3 cursor-pointer bg-red-600 text-white  font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2">
              Events
            </span>
          ) : (
            <span
              onClick={() => {
                set_tab("/events");
                navigate("/events");
              }}
              className=" mb-3 cursor-pointer text-red-600 font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2"
            >
              Events
            </span>
          )}
          {tab == "/bookings" ? (
            <span className=" mb-3 cursor-pointer bg-red-600 text-white  font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2">
              Bookings
            </span>
          ) : (
            <span
              onClick={() => {
                set_tab("/bookings");
                navigate("/bookings");
              }}
              className=" mb-3 cursor-pointer text-red-600 font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2"
            >
              Bookings
            </span>
          )}
          {tab == "/new" ? (
            <span className=" mb-3 cursor-pointer bg-red-600 text-white  font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2">
              New
            </span>
          ) : (
            <span
              onClick={() => {
                set_tab("/new");
                navigate("/new");
              }}
              className=" mb-3 cursor-pointer text-red-600 font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2"
            >
              New
            </span>
          )}
          {tab == "/all" ? (
            <span className=" mb-3 cursor-pointer bg-red-600 text-white  font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2">
              All
            </span>
          ) : (
            <span
              onClick={() => {
                set_tab("/all");
                navigate("/all");
              }}
              className=" mb-3 cursor-pointer text-red-600 font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2"
            >
              All
            </span>
          )}
          {tab == "/account" ? (
            <span className=" mb-3 cursor-pointer bg-red-600 text-white  font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2">
              Account
            </span>
          ) : (
            <span
              onClick={() => {
                set_tab("/account");
                navigate("/account");
              }}
              className=" mb-3 cursor-pointer text-red-600 font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2"
            >
              Account
            </span>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
