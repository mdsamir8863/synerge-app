import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ReadDate from "../../utils/ReadDate";
import Axios from "axios";

const CompanyProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [company, set_company] = useState({});
  const [company_users, set_company_users] = useState([]);
  const [bookings, set_bookings] = useState([]);
  const { companies, users } = useSelector(
    (e) => e.users_companies_state_reducer
  );
  const [bookings_tab, set_bookings_tab] = useState(false);

  const fetch_company = () => {
    set_company(companies.find((e) => e._id === id));
    const employee_ids = companies.find((e) => e._id === id).employees;
    console.log(employee_ids);
    /* fetching employees from redux with just ids*/
    fetch_employees();
  };

  const fetch_employees = () => {
    console.log(users);
    const all_users = users.filter((e) => e.company == id);
    set_company_users(all_users);
  };

  const fetch_company_bookings = async () => {
    dispatch({ type: "loading_data", payload: true });
    await Axios.get(`/api/v1/allbookings/company/detail/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.slots) {
          set_bookings(res.data.slots);
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
    fetch_company();
    fetch_company_bookings();
  }, []);

  return (
    <section className="w-full justify-center items-center gap-3 h-screen flex flex-col">
      <div className="flex morphcard w-4/5 gap-5 p-5 h-24">
        <div className="flex w-1/5 h-full justify-center items-center">
          <div className="flex w-16 h-16 justify-center items-center bg-gray-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>
        </div>
        <div className="flex w-1/4  flex-col">
          <span className="text-gray-200 text-xl  font-medium">
            {company?.name}
          </span>
          <span className="text-gray-400 text-sm  font-medium">
            {company?.email}
          </span>
          <span className="text-gray-400 text-sm  font-medium">
            {company?.mobile}
          </span>
        </div>
        <div className="flex w-1/4  flex-col">
          <span className="text-gray-200 text-lg  font-medium">
            Limit : {company?.hours}{" "}
            <span className="text-sm">Hours / month</span>{" "}
          </span>
          <span className="text-gray-400 text-sm  font-medium">
            joined on: {ReadDate(company?.createdAt)}
          </span>
        </div>
        <div className="flex justify-center items-center">
          {company.status ? (
            <button
              type="button"
              className="focus:outline-none flex items-center justify-center gap-2 hover:bg-green-200 text-white border hover:text-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              <span className="flex w-3 h-3 bg-green-500 rounded-full"></span>{" "}
              Activated
            </button>
          ) : (
            <button
              type="button"
              className="focus:outline-none flex items-center justify-center gap-2 hover:bg-red-200 text-white border hover:text-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              <span className="flex w-3 h-3 bg-red-500 rounded-full"></span>{" "}
              InActivated
            </button>
          )}
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
        <div className="flex w-full h-5/6 items-center flex-col">
          {!bookings_tab ? (
            <ul role="list" className="divide-y w-[96%] divide-gray-100">
              {company_users
                ? company_users.map((ele) => (
                    <Link
                      to={`/user/${ele._id}`}
                      key={ele._id}
                      className="flex  justify-between gap-x-6 py-5"
                    >
                      <div className="flex gap-x-4">
                        <img
                          className="h-12 w-12 object-cover flex-none rounded-full bg-gray-50"
                          src={
                            ele?.avatar ||
                            "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhciUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
                          }
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
          ) : (
            <table className="w-full h-auto overflow-y-scroll text-sm text-left  ">
              <thead className="text-xs  uppercase bg-gray-600 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Room
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Booked by
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Booked at
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings &&
                  bookings.map((e) => (
                    <tr
                      key={e._id}
                      className={
                        e.flexy
                          ? "h-16 text-white bg-gradient-to-r from-cyan-500 to-blue-500"
                          : "bg-white text-gray-700  border-b h-16 border-white"
                      }
                    >
                      <td className="px-6 py-4">{e?.room}</td>
                      <td className="px-6 py-4">{e?.time}</td>
                      <td className="px-6 py-4">{e?.bookedby.split("+")[0]}</td>
                      <td className="px-6 py-4">{ReadDate(e?.CraetedAt)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
