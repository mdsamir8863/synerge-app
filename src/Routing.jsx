import { lazy, Suspense  } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import UserNavigation from "./app/components/user/UserNavigation";



//components importing
import Navbar from "./app/components/Navbar";
import Loader from "./app/components/loader/Loader";



// Screens importing as lazy to load 
const Login = lazy(() => import("./app/screens/landing/Login"));
const Signup = lazy(() => import("./app/screens/landing/Signup"));
const Recover = lazy(() => import("./app/screens/landing/Recover"));
const Home = lazy(() => import("./app/screens/home/Home"));
const Events = lazy(() => import("./app/screens/home/Events"));
const Bookings = lazy(() => import("./app/screens/home/Bookings"));
const New = lazy(() => import("./app/screens/home/New"));
const Account = lazy(() => import("./app/screens/home/Account"));
const All = lazy(() => import("./app/screens/home/All"));
const CompanyProfile = lazy(() => import("./app/screens/home/CompanyProfile"));
const UserProfile = lazy(() => import("./app/screens/home/UserProfile"));
const UserFeed = lazy(() => import("./app/screens/user/UserFeed"));
const UserBookings = lazy(() => import("./app/screens/user/UserBookings"));
const UsersProfile = lazy(() => import("./app/screens/user/UserProfile"));
const UserCafe = lazy(() => import("./app/screens/user/UserCafe"));
const UserNotification = lazy(() => import("./app/screens/user/UserNotification"));




const Routing = () => {
const {loading} = useSelector(e=>e.loading_state_reducer)
const {auth} = useSelector(e=>e.auth_state_reducer)
const {user} = useSelector(e=>e.user_state_reducer)



console.log(auth)
  return (
    <BrowserRouter>
     <Suspense fallback={<Loader />}>
      {loading ?<Loader />:''}
      {auth ?( user.Admin?<Navbar />:<UserNavigation/>)   :''}
      {auth ?(user.Admin? <div className="flex w-60"></div>:''):''}




      <Routes>
      
      {/* Admin Route */}
        <Route path="/" element={auth ?<Home/> : <Login/>}/>
        <Route path="/login" element={auth ?<Home/> :<Login/> }/>
        <Route path="/signup" element={!auth ?<Signup/>: <Home/>}/>
        <Route path="/forgotpassword" element={!auth? <Recover/> : <Home/>}/>
        <Route path="/events" element={auth ?<Events/> :<Login/>}/>
        <Route path="/bookings" element={auth ?<Bookings/> :<Login/>}/>
        <Route path="/new" element={auth? <New/> :<Login/> }/>
        <Route path="/account" element={auth ?<Account/>:<Login/> } />
        <Route path="/all" element={auth ?<All/> : <Login/>}/>
        <Route path="/company/:id" element={auth ?<CompanyProfile/> : <Login/>}/>
        <Route path="/user/:id" element={auth ?<UserProfile/> : <Login/>}/>
      
      {/* User Route */}
      <Route path="/users/feed" element={auth ?(!user.Admin ?<UserFeed/> :<Home/> ) : <Login/>}/>
      <Route path="/users/bookings" element={auth ?(!user.Admin ?<UserBookings/> :<Home/> ) : <Login/>}/>
      <Route path="/users/profile" element={auth ?(!user.Admin ?<UsersProfile/> :<Home/> ) : <Login/>}/>
      <Route path="/users/cafe" element={auth ?(!user.Admin ?<UserCafe/> :<Home/> ) : <Login/>}/>
      <Route path="/users/notification" element={auth ?(!user.Admin ?<UserNotification/> :<Home/> ) : <Login/>}/>
      
      
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routing;
