import React, { lazy } from "react";
// const AccountImage = lazy(() => import("../../../assets/accountImage.png"));
import AccountImage from "../../../assets/accountImage.png";

const Account = () => {
  return (
    <>
      <section className="flex items-center justify-center h-screen w-full">
        <div className="image flex items-center">
        <img src={AccountImage} className="w-72" alt="" />
        </div>
        <div className="text flex  gap-3 w-1/2 h-1/4  justify-evenly items-center border flex-col ">
          <p className="text-white font-bold text-lg">Coming Soon</p>
          <p className="text-white">Our Team is working on Account Dashboard</p>
          <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  ">Green</button>

        </div>
      </section>
    </>
  );
};

export default Account;
