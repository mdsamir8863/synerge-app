import React from "react";
import Signup from "./app/screens/startup/Signup";
import { Router, Route, Routes } from "react-router-dom";
import Login from "./app/screens/startup/Login";
import ForgetPassword from "./app/screens/startup/ForgetPassword";
import DashMain from "./app/components/DashMain/DashMain";
import Navbar from "./app/components/sidebar/Navbar";
import Feeds from "./app/components/dashFeed/Feeds";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <DashMain/>
      <Feeds />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
