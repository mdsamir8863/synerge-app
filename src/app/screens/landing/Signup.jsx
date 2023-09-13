/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(new FormData());
  const navigate = useNavigate();
  const handle_submit = async (e) => {
    e.preventDefault();

    // Access and log the form data
    for (var [key, value] of formData.entries()) {
      console.log(key, value);
    }

    dispatch({ type: "loading_data", payload: true });

    await Axios.post("/api/v1/user/register", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          dispatch({ type: "loading_data", payload: false });
          alert("ID is under verification. contact admin");
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message || err.message);
      })
      .finally(() => {
        dispatch({ type: "loading_data", payload: false });
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the FormData object when form inputs change
    formData.set(name, value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Update the FormData object with the selected image file
    formData.set("image", file);
  };

  useEffect(() => {
    dispatch({ type: "loading_data", payload: false });
  }, []);

  return (
    <>
      <section className="bg-gray-50 w-full">
        <div>
          <Toaster/>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <form
              onSubmit={handle_submit}
              className="p-6 space-y-4 md:space-y-6 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Create user account
                </h1>

                <div className="flex items-center justify-center w-11 relative">
                  <label
                    htmlFor="dropzone-file "
                    className="flex flex-col items-center justify-center w-full rounded-lg cursor-pointer  hover:bg-gray-100 absolute left-0"
                  >
                    <div className="flex relative bg-gray-200 rounded-full border">
                      <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 absolute top-5 left-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </div>
                    <input
                      onChange={handleImageChange}
                      required
                      className="opacity-0 translate-y-[-19px]"
                      type="file"
                      accept="image/*"
                    ></input>
                  </label>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 
                      "
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                      "
                    placeholder="Samir Ansari"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 
                      "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                      "
                    placeholder="Ansari@ggmailcom.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 
                      "
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                      "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block mb-2 text-sm font-medium text-gray-900 
                      "
                  >
                    Select an option
                  </label>
                  <select
                    required
                    name="location"
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  >
                    <optgroup>
                      <option value="Select an option">Select an option</option>
                      <option value="hennur">Hennur</option>
                      <option value="jayanagar">Jaynagar</option>
                      <option value="hsr">HSR</option>
                    </optgroup>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-red-600 hover:bg-red-700 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Already have an account?
                  <Link
                    to={"/login"}
                    href="#"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
