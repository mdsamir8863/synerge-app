import React from "react";
import Navbar from "../../../app/components/sidebar/Navbar";
import DashMain from "../../../app/components/DashMain/DashMain";
import Feeds from "../../../app/components/dashFeed/Feeds";

const DashBoard = () => {
  return (
    <>
      <div className="HomeDashboard flex items-center justify-between w-screen h-screen">
        <Navbar/>
        <DashMain/>
        <Feeds/>
      </div>
    </>
  );
};

export default DashBoard;
