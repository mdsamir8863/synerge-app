import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Signup from "./screens/startup/Signup";
import Login from "./screens/startup/Login";
import ForgetPassword from "./screens/startup/ForgetPassword";
import DashMain from "./app/components/DashMain/DashMain";
import Navbar from "./app/components/sidebar/Navbar";
import Feeds from "./app/components/dashFeed/Feeds";
import DashBoard from "./screens/home/DashBoard/DashBoard";
const App = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      {/* <DashMain /> */}
      {/* <Feeds /> */}
      <DashBoard />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
