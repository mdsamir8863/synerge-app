import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";
import ReadDate from "../../utils/ReadDate";

const All = () => {
  const [select, set_select] = useState("");
  const dispatch = useDispatch();
  const [admins,set_admins] = useState([])
  const {companies,users} = useSelector(e=>e.users_companies_state_reducer)

  const fetch_admins = async () => {
    dispatch({ type: "loading_data", payload: true });
    await Axios.get("/api/v1/admins")
      .then((res) => {
        console.log(res);
        if(res.data.success==true){
          set_admins(res.data.admins)
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch({ type: "loading_data", payload: false });
      });
  };

  useEffect(() => {
    fetch_admins();
  }, []);

  return (
    <section className="flex items-center flex-col w-full h-screen">
      <div className="w-3/4 h-32 flex justify-between items-center">
        <span className="text-white font-bold text-2xl">All</span>
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            onChange={(e) => set_select(e.target.value)}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option selected>Choose </option>
            <option value="users">Users</option>
            <option value="admins">Admins</option>
            <option value="companies">Companies</option>
          </select>
        </div>
      </div>

      <div className="flex w-full justify-center items-center h-screen flex-col">
        <div className="flex flex-col items-center overflow-y-scroll w-3/4 h-4/5 ">
          {select === "users" ? (
            <>
              <ul role="list" className="divide-y w-3/4 divide-gray-100">
                {users
                  ? users.map((ele) => (
                      <Link
                        to={`/user/${ele._id}`}
                        key={ele._id}
                        className="flex justify-between gap-x-6 py-5"
                      >
                        <div className="flex gap-x-4">
                          <img
                            className="h-12 w-12 object-cover flex-none rounded-full bg-gray-50"
                            src={ele?.avatar || 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhciUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'}
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-white">
                              {ele?.name}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              {ele?.email}
                            </p>
                          </div>
                        </div>
                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm leading-6 text-gray-900">
                            {ele?.company && ele?.company}
                          </p>
                          <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                              {ele.status === true ? (
                                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                              ) : (
                                <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                              )}
                            </div>
                            
                          </div>
                        </div>
                      </Link>
                    ))
                  : ""}
              </ul>
            </>
          ) : (
            ""
          )}

          {select === "companies" ? (
            <>
              {companies
                ? companies.map((ele) => (
                    <Link
                      to={`/company/${ele._id}`}
                      key={ele._id}
                      className="hover:bg-gray-200 text-white hover:text-gray-800 mt-5 transition-all  w-3/4 p-3 border-2 justify-evenly flex rounded-lg h-24 shadow-xl"
                    >
                      <span className="w-1/4 h-full  flex justify-center items-center">
                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full rk:bg-gray-600">
                          <svg
                            className="absolute w-12 h-12 text-gray-400 -left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </span>

                      <span className="w-1/2  cursor-pointer flex-col flex justify-center  ">
                        <span className="font-mont text-xl font-semibold">
                          {ele?.name}
                        </span>

                        <span className="text-[12px]">
                          Joined on :{ele.createdAt && ReadDate(ele.createdAt)}{" "}
                        </span>
                      </span>

                      <span className="w-1/4 flex justify-center items-center">
                        {ele.status  ? (
                          <span className="w-4 h-4 bg-green-500 rounded-full flex"></span>
                        ) : (
                          <span className="w-4 h-4 bg-red-500 rounded-full flex"></span>
                        )}
                        {ele.status}
                      </span>
                    </Link>
                  ))
                : ""}
            </>
          ) : (
            ""
          )}
          {select === "admins" ? (
            <>
              {admins
                ? admins.map((ele) => (
                    <div
                      onClick={() => {}}
                      key={ele._id}
                      className="hover:bg-gray-200 text-white hover:text-gray-700 mt-5 transition-all  w-3/4 p-3 border-2 justify-evenly flex rounded-lg h-24 shadow-xl"
                    >
                      <span className="w-1/4 h-full  flex justify-center items-center">
                        <div className="relative w-1fillRule0 h-10 overflow-hidden bg-gray-100 rounded-full rk:bg-gray-600">
                          <svg
                            className="absolute w-12 h-12 text-gray-400 -left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </span>

                      <span className="w-1/2  cursor-pointer flex-col flex justify-center  ">
                        <span className="font-mont text-xl font-semibold">
                          {ele?.name}
                        </span>
                      </span>

                      <span className="w-1/4 flex justify-center items-center">
                        {ele.status  ? (
                          <span className="w-4 h-4 bg-green-500 rounded-full flex"></span>
                        ) : (
                          <span className="w-4 h-4 bg-red-500 rounded-full flex"></span>
                        )}
                        {ele.status}
                      </span>
                    </div>
                  ))
                : ""}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default All;
