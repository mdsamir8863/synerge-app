import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-40  h-screen flex items-center ms-3  border-red justify-center">
        <div className="nav h-[90vh] bg-gray-200/[.22] border  rounded-lg p-5  border-black flex items-center justify-evenly flex-col  border-slate-900/10 ">
          <img
            className="w-32"
            src="https://www.synergeworkspace.com/images/logo.png"
            alt="logo"
          />
          <ul className="flex items-start justify-between flex-col">
            <li className=" mb-3 bg-red-600 text-white  font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2">
              Home
            </li>
            <li className=" mb-3 text-red-600 font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2">
              Events
            </li>
            <li className=" mb-3 text-red-600 font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2">
              Booking
            </li>
            <li className=" mb-3 text-red-600 font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2">
              New
            </li>
            <li className=" mb-3 text-red-600 font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2">
              All
            </li>
            <li className=" text-red-600 font-bold text-lg transition-all duration-150 ease-in hover:bg-red-600 hover:text-white rounded-full px-5 py-2">
              Account
            </li>
          </ul>
        </div>

        
      </nav>
    </>
  );
};

export default Navbar;
