import { lazy, Suspense  } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./app/components/Navbar";
import Loader from "./app/components/loader/Loader";
import { useSelector } from "react-redux";




// Screens importing as lazy to load 
const Login = lazy(() => import("./app/screens/landing/Login"));
const Signup = lazy(() => import("./app/screens/landing/Signup"));
const Recover = lazy(() => import("./app/screens/landing/Recover"));
const Home = lazy(() => import("./app/screens/home/Home"));
const Events = lazy(() => import("./app/screens/home/Events"));
const Bookings = lazy(() => import("./app/screens/home/Bookings"));
const New = lazy(() => import("./app/screens/home/New"));




//components importing


const Routing = () => {
const {loading} = useSelector(e=>e.loading_state_reducer)
const {auth} = useSelector(e=>e.auth_state_reducer)




  return (
    <BrowserRouter>
     <Suspense fallback={<Loader />}>
      {loading ?<Loader />:''}
      {!auth ?<Navbar />:''}
      <div className="flex w-60"></div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgotpassword" element={<Recover/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
        <Route path="/new" element={<New/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routing;
