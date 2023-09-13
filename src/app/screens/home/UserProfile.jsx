import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [user, set_user] = useState({});
  const [user_company_id, set_user_company_id] = useState(
    user?.company || null
  );
  const { users, companies } = useSelector(
    (e) => e.users_companies_state_reducer
  );
  const [bookings_tab, set_bookings_tab] = useState(false);

  const fetch_company = () => {
    set_user(users.find((e) => e._id === id));
  };

  const user_company_change_handler = async (e) => {
    e.preventDefault();
    const user_company = companies.find((e) => e._id === user_company_id);
    const company_name = user_company.name;
    const data = {
      company: user_company_id,
      company_name: company_name,
    };

    dispatch({ type: "loading_data", payload: true });

    await Axios.put(`/api/v1/user/update/${id}`, data)
      .then((res) => {
        console.log(res)
        if (res.data.success == true) {
          state_management_updated_user(res.data.user);
          toast.success(res.data.message);          
        }
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.response.data.message || err.message);
      })
      .finally(() => {
        dispatch({ type: "loading_data", payload: false });
      });
  };

  const toggle_activate_user = async () => {
    dispatch({ type: "loading_data", payload: true });
    await Axios.put(`/api/v1/user/${id}`)
      .then(async(res) => {
        if (res?.data.success === true) {
          console.log(res.data.user)
          toast.success(res.data.message);
        await  state_management_updated_user(res.data.user);
          
        }
      })
      .catch((err) => {
        console.log(err)
        toast.error(err?.response?.data?.message || err.message);
      })
      .finally(() => {
        dispatch({ type: "loading_data", payload: false });
      });
  };

  /*
    this function accepts the updated user from the api
    response and add this to our redux,
    without fetching a new updated api for all users
*/
  const state_management_updated_user = async(user) => {


    const upadted_users = await users.map((e) => {
      if (e._id === user._id) {
        return  user;
      }
      return e
    });

    const updated_companies = await companies.map((e) => {
      if (e._id === user?.company) {
        const employees = [...e.employees,user._id]
        return {...e,employees}
      }
      return e
    });

   await dispatch({
      type: "users_companies_data",
      payload: {
        companies: updated_companies,
        users: upadted_users,
      },
    });
  };

  
  console.log(users,companies)
  useEffect(() => {
    fetch_company();
  }, [users]);

  return (
    <section className="w-full justify-center items-center gap-3 h-screen flex flex-col">
      <div>
        <Toaster />
      </div>
      <div className="flex morphcard w-4/5 gap-5 p-5 h-24">
        <div className="flex w-1/5 h-full justify-center items-center">
          <div className="flex w-16 h-16 justify-center overflow-hidden items-center   rounded-full">
            <img
              loading="lazy"
              className="w-full h-full object-cover"
              src={
                user?.avatar ||
                "https://images.unsplash.com/photo-1653023500770-3a3b64a1b4c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
              }
              alt=""
            />
          </div>
        </div>
        <div className="flex w-1/4  flex-col">
          <span className="text-gray-200 text-xl  font-medium">
            {user?.name}
          </span>
          <span className="text-gray-400 text-sm  font-medium">
            {user?.email}
          </span>
        </div>
        <div className="flex gap-2 w-2/3 justify-evenly ">
          {user.status ? (
            <button
              onClick={toggle_activate_user}
              type="button"
              className="focus:outline-none flex items-center justify-center gap-2 hover:bg-green-200 text-white border hover:text-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              <span className="flex w-3 h-3 bg-green-500 rounded-full"></span>{" "}
              Activated
            </button>
          ) : (
            <button
              onClick={toggle_activate_user}
              type="button"
              className="focus:outline-none flex items-center justify-center gap-2 hover:bg-red-200 text-white border hover:text-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              <span className="flex w-3 h-3 bg-red-500 rounded-full"></span>{" "}
              InActivated
            </button>
          )}
          <form
            onSubmit={user_company_change_handler}
            className="gap-2 w-3/4 flex"
          >
            <select
              id="countries"
              required
              onChange={(e) => set_user_company_id(e.target.value)}
              className="bg-gray-50 border w-1/2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={null}>select</option>
              {companies &&
                companies.map((e) => (
                  <option key={e._id} value={e._id}>
                    {e.name}
                  </option>
                ))}
            </select>
            <button
              type="submit"
              className="text-white bg-blue-700 h-12 w-12 justify-center items-center hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm  text-center inline-flex  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="flex w-4/5 flex-col h-2/3 bg-gray-700 rounded-md">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {bookings_tab ? (
              <li onClick={() => set_bookings_tab((e) => !e)} className="mr-2">
                <a className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  Users
                </a>
              </li>
            ) : (
              <li onClick={() => set_bookings_tab((e) => !e)} className="mr-2">
                <a
                  className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  aria-current="page"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-blue-400 group-hover:text-blue-500 dark:text-blue-500 dark:group-hover:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  Users
                </a>
              </li>
            )}
            {bookings_tab ? (
              <li onClick={() => set_bookings_tab((e) => !e)} className="mr-2">
                <a
                  className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  aria-current="page"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  Bookings
                </a>
              </li>
            ) : (
              <li onClick={() => set_bookings_tab((e) => !e)} className="mr-2">
                <a className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  Bookings
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
