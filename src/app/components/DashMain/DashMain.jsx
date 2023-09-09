import React from "react";
import { Scrollbar } from 'react-scrollbars-custom';
const DashMain = () => {
  return (
    <>
    
      <main className="container flex flex-col items-start m-auto justify-evenly h-[90vh] w-[33rem]">
        <div className=" text-white bg-gray-900 p-3 rounded-lg">
          <h1 className=" font-bold text-2xl">Hello User</h1>
          <p className="">
            Welcome Back to Synerge- this branch- Community Dashboard
          </p>
        </div>

        {/* user and companies container */}
        <div className=" flex flex-col gap-5 w-[33rem]">
          <p className="text-xl font-semibold ms-4">December 2</p>
          {/* Users */}
          <div className="users-container shadow-lg flex flex-col items-start p-3 bg-slate-400/[.22] rounded-lg border border-black border-slate-900/[.2]">
            <p className="text-black font-bold ">users</p>
            <div className="users-wrapper overflow-x-scroll scroll-smooth ms-3 flex gap-3 w-full">
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
              <div className="h-8 w-8 bg-gray-600 rounded-full"></div>

                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
              <div className="h-8 w-8 bg-gray-600 rounded-full"></div>

                <p>user1</p>
              </div>
              <div className="user flex items-center justify-center flex-col cursor-pointer">
              <div className="h-8 w-8 bg-gray-600 rounded-full"></div>

                <p>user1</p>
              </div>
            </div>
          </div>
          {/* companies */}
          <div className="companies-container shadow-lg flex flex-col items-start p-3 bg-slate-100/[.22] rounded-lg border border-black border-slate-900/[.2]">
            <p className="text-black font-bold ">companies</p>
            <div className="companies-wrapper overflow-x-scroll scroll-smooth ms-3 flex gap-3 w-full">
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
              <div className="h-8 w-8 bg-gray-600 rounded-full"></div>

                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
              <div className="h-8 w-8 bg-gray-600 rounded-full"></div>

                <p>comp</p>
              </div>
              <div className="companies flex items-center justify-center flex-col cursor-pointer">
              <div className="h-8 w-8 bg-gray-600 rounded-full"></div>

                <p>comp</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashMain;
