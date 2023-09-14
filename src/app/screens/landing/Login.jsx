import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const UserLogin = () => {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobile, set_mobile] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "loading_data", payload: true });
    await Axios.post(`/api/v1/admin/login`, {
      email: Email,
      password: Password,
    })
      .then(async (res) => {
        if (res.data.success === true) {
          await fetch_companies();
          dispatch({ type: "loading_data", payload: false });
          dispatch({ type: "auth_data", payload: true });
          dispatch({ type: "user_data", payload: res.data.user });
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error(err.message);
        }
      })
      .finally(() => {
        dispatch({ type: "loading_data", payload: false });
      });
  };

  const fetch_users = async (companies) => {
    dispatch({ type: "loading_true", payload: true });
    await Axios.get("/api/v1/users")
      .then((res) => {
        if (res.data.success === true) {
          console.log("companies", res.data.users);
          dispatch({
            type: "users_companies_data",
            payload: {
              companies: companies,
              users: res.data.users,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message || err.message);
      })
      .finally(() => {
        dispatch({ type: "loading_true", payload: false });
      });
  };

  const fetch_companies = async () => {
    dispatch({ type: "loading_data", payload: true });
    await Axios.get("/api/v1/companies").then(async (res) => {
      if (res.data.success === true) {
        console.log("companies", res.data.companies);
        await fetch_users(res.data.companies);
      }
    });

    dispatch({ type: "loading_data", payload: false });
  };

  const handle_users_login = async (e) => {
    e.preventDefault();
    dispatch({ type: "loading_data", payload: true });
    await Axios.post("/api/v1/user/login", {
      email: Email,
      password: Password,
    })
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          dispatch({ type: "loading_data", payload: false });
          dispatch({ type: "auth_data", payload: true });
          dispatch({ type: "user_data", payload: res.data.user });
      navigate('/users/feed')
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || err.message);
      })
      .finally(() => {
        dispatch({ type: "loading_data", payload: false });
      });
  };

  const verify_screen = () => {
    if (window.screen.width < 699) {
      set_mobile(true);
    } else {
      set_mobile(false);
    }
  };

  useEffect(() => {
    verify_screen();
  }, []);

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div>
        <Toaster />
      </div>
      <section className=" w-full h-full ">
        {mobile ? (
          <div className="2xl:hidden phone:flex flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl  text-red-600 font-mont font-semibold rktext-white"
            >
              Synerge
            </a>
            <div className="w-full bg-white rounded-lg shadow rkborder md:mt-0 sm:max-w-md xl:p-0 rkbg-gray-800 rkborder-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl rktext-white">
                  Login As User
                </h1>
                <form
                  onSubmit={handle_users_login}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 rktext-white"
                    >
                      Your email
                    </label>
                    <input
                      onChange={(e) => SetEmail(e.target.value)}
                      value={Email}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rkbg-gray-700 rkborder-gray-600 rkplaceholder-gray-400 rktext-white rkfocus:ring-blue-500 rkfocus:border-blue-500"
                      placeholder="name@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 rktext-white"
                    >
                      Password
                    </label>
                    <input
                      onChange={(e) => SetPassword(e.target.value)}
                      value={Password}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rkbg-gray-700 rkborder-gray-600 rkplaceholder-gray-400 rktext-white rkfocus:ring-blue-500 rkfocus:border-blue-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center rkbg-blue-600 rkhover:bg-blue-700 rkfocus:ring-blue-800"
                  >
                    Log in
                  </button>

                  <div className="flex w-full  justify-between">
                    <p className="text-sm font-light text-gray-500 rktext-gray-400">
                      Don’t have an account yet?{" "}
                      <Link
                        to="/signup"
                        className="font-medium text-red-600 hover:underline rktext-red-500"
                      >
                        Sign up
                      </Link>
                    </p>
                    <Link
                      to="/forgotpassword"
                      className="text-sm font-medium text-primary-600 hover:underline rktext-primary-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="2xl:flex phone:hidden flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl  text-red-600 font-mont font-semibold rktext-white"
            >
              Synerge
            </a>
            <div className="w-full bg-white rounded-lg shadow rkborder md:mt-0 sm:max-w-md xl:p-0 rkbg-gray-800 rkborder-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl rktext-white">
                  Login Admin
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 rktext-white"
                    >
                      Your email
                    </label>
                    <input
                      onChange={(e) => SetEmail(e.target.value)}
                      value={Email}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rkbg-gray-700 rkborder-gray-600 rkplaceholder-gray-400 rktext-white rkfocus:ring-blue-500 rkfocus:border-blue-500"
                      placeholder="name@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 rktext-white"
                    >
                      Password
                    </label>
                    <input
                      onChange={(e) => SetPassword(e.target.value)}
                      value={Password}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rkbg-gray-700 rkborder-gray-600 rkplaceholder-gray-400 rktext-white rkfocus:ring-blue-500 rkfocus:border-blue-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center rkbg-blue-600 rkhover:bg-blue-700 rkfocus:ring-blue-800"
                  >
                    Log in
                  </button>

                  <div className="flex w-full  justify-between">
                    <p className="text-sm font-light text-gray-500 rktext-gray-400">
                      Don’t have an account yet?{" "}
                      <Link
                        to="/signup"
                        className="font-medium text-red-600 hover:underline rktext-red-500"
                      >
                        Sign up
                      </Link>
                    </p>
                    <Link
                      to="/forgotpassword"
                      className="text-sm font-medium text-primary-600 hover:underline rktext-primary-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default UserLogin;
