import { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const New = () => {
  const [select, set_select] = useState("");
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(null);
  const [visitor_company, set_visitor_company] = useState("");
  const [visitor_company_employees, set_visitor_company_employees] = useState(
    []
  );

  const [visitor_employee, set_visitor_employee] = useState("");
  const [visitor, set_visitor] = useState("");
  const [visitor_number, set_visitor_number] = useState("");
  const { users, companies } = useSelector(
    (e) => e.users_companies_state_reducer
  );

  const [caption, set_caption] = useState(null);
  const [company_form_data, set_company_form_data] = useState({
    name: "",
    email: "",
    mobile: "",
    hours: "",
  });

  const [admin_form_data, set_admin_form_data] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const [cafe_admin_form_data, set_cafe_admin_form_data] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handle_company_change = (e) => {
    const { name, value } = e.target;
    set_company_form_data((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //company registration
  const handle_company_form = async (e) => {
    e.preventDefault();
    dispatch({ type: "loading_data", payload: true });

    await Axios.post(`/api/v1/register/company`, company_form_data)
      .then(async (res) => {
        console.log(res);
        if (res.data.success === true) {
          dispatch({ type: "loading_data", payload: false });
          toast.success("successfully created company Account 😀");
          set_company_form_data({ name: "", email: "", mobile: "", hours: "" });
          const updated_companies = [...companies, res.data.company];
          const updated_users = [...users];
          dispatch({
            type: "users_companies_data",
            payload: {
              companies: updated_companies,
              users: updated_users,
            },
          });
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || err.message);
        console.log(err);
      })
      .finally(() => dispatch({ type: "loading_data", payload: false }));
  };

  const find_employees = (cmp) => {
    set_visitor_company_employees(users.filter(e=>e.company== cmp))
   
  };

  const handle_visitor_form = async (e) => {
    e.preventDefault();
    dispatch({type:'loading_data',payload:true})
    console.log(visitor_company,visitor_employee,visitor_number,visitor)
    await Axios.post('/api/v1/add/visitor',{
      name:visitor,mobile:visitor_number,company:visitor_company,user:visitor_employee
    })
    .then((res)=>{
      console.log(res)
      if(res.data.success===true){
        toast.success('successfully Added visitor')
      }
    }).catch((err)=>{
      console.log(err)
      toast.error(err?.response?.data?.message || err?.message)
    }).finally(()=>{
      dispatch({type:'loading_data',payload:false})
    })


 
  };

  const upload_post = async (e) => {
    e.preventDefault();

    dispatch({ type: "loading_data", payload: true });
    if (imageUrl && caption) {
      const form_data = new FormData();
      form_data.append("image", imageUrl);
      form_data.append("caption", caption);

      await Axios.post("/api/v1/admin/post/upload", form_data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          console.log(res);
          if (res.data.success === true) {
            toast.success("Successfully uploaded");
            setImageUrl(null);
            set_caption(null);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || err?.message);
        })
        .finally(() => {
          dispatch({ type: "loading_data", payload: false });
        });
    }
  };

  const handle_admin_form = async (e) => {
    e.preventDefault();
    console.log(admin_form_data);
dispatch({type:'loading_data',payload:true})
await Axios.post('/api/v1/admin/register',admin_form_data)
.then((res)=>{
  console.log(res)
  if(res.data.success===true){
    toast.success(res.data.message)
    set_admin_form_data({
      name: "",
      email: "",
      password: "",
      location: "",
    })
  }
}).catch((err)=>{
toast.error(err?.response?.data?.message || err.message)
}).finally(()=>{
  dispatch({type:'loading_data',payload:false})
})





  };

  const handle_cafe_admin_form = async (e) => {
    e.preventDefault();
    console.log(cafe_admin_form_data);

dispatch({type:'loading_data',payload:true})
await Axios.post('/api/v1/scadmin/register',cafe_admin_form_data)
.then((res)=>{
if(res.data.success==true){
  toast.success('Added scafe Admin ☕')
  set_cafe_admin_form_data({
    name: "",
    email: "",
    password: "",
  })
}

}).catch((err)=>{
toast.error(err?.response?.data?.message || err?.message)
}).finally(()=>{
  dispatch({type:'loading_data',payload:false})
})

  };

  const handle_admin_form_change = (e) => {
    const { name, value } = e.target;
    set_admin_form_data((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handle_cafe_admin_form_change = (e) => {
    const { name, value } = e.target;
    set_cafe_admin_form_data((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch({ type: "loading_data", payload: false });
  }, []);

  return (
    <section className="flex items-center flex-col h-screen w-full">
      <div>
        <Toaster />
      </div>
      <div className="flex w-3/4 h-32 items-center justify-between">
        <span className="font-bold text-xl text-white">New</span>
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
            <option value="company">Add Company</option>
            <option value="post">Add Post</option>
            <option value="admin">Add Admin</option>
            <option value="cafe">Add Cafe Admin</option>
            <option value="visitor">Add Visitor</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-start flex-col w-3/4 h-4/5 overflow-y-scroll">
        {select === "company" ? (
          <section className=" h-4/5 flex justify-center items-center  w-3/4 rk:bg-gray-900">
            <div className="flex w-full flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow rk:border md:mt-0 sm:max-w-md xl:p-0 rk:bg-gray-800 rk:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl rk:text-white">
                    Add a Company
                  </h1>
                  <form
                    onSubmit={handle_company_form}
                    className="space-y-4 md:space-y-6"
                    action="#"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={company_form_data.name}
                        onChange={handle_company_change}
                        placeholder="Company Name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                      >
                        {" "}
                        email
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        value={company_form_data.email}
                        onChange={handle_company_change}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mobile"
                        className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                      >
                        Mobile{" "}
                      </label>
                      <input
                        type="number"
                        name="mobile"
                        id="mobile"
                        value={company_form_data.mobile}
                        onChange={handle_company_change}
                        placeholder="Mobile-Number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hours"
                        className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                      >
                        Select Number of Hours to allot{" "}
                      </label>

                      <select
                        id="hours"
                        name="hours"
                        value={company_form_data.hours}
                        onChange={handle_company_change}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                        required
                      >
                        <option value="">--- Select ---</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="35">35</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center rk:bg-red-600 rk:hover:bg-red-700 rk:focus:ring-red-800"
                    >
                      Add Company
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
        {select === "visitor" ? (
          <section className=" h-4/5 flex justify-center items-center  w-3/4 rk:bg-gray-900">
            <div className="flex w-full flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow rk:border md:mt-0 sm:max-w-md xl:p-0 rk:bg-gray-800 rk:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl rk:text-white">
                    Add a Visitor
                  </h1>
                  <form
                    onSubmit={handle_visitor_form}
                    className="space-y-4 md:space-y-6"
                    action="#"
                  >
                    <div>
                      <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                      >
                        Company{" "}
                      </label>

                      <select
                        id="countries"
                        onChange={(e) => {
                          set_visitor_company(e.target.value);
                          find_employees(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                      >
                        <option value={null}>--- Select ---</option>
                        {companies &&
                          companies.map((ele, index) => {
                            return (
                              <option key={index} value={ele._id}>
                                {ele.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                      >
                        User{" "}
                      </label>

                      <select
                        id="countries"
                        onChange={(e) => {
                          set_visitor_employee(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                      >
                        <option value="">--- Select ---</option>
                        {visitor_company_employees &&
                          visitor_company_employees.map((ele) => {
                            return (
                              <option key={ele._id} value={ele._id}>
                                {ele.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                      >
                        Visitor Name
                      </label>
                      <input
                        type="text"
                        onChange={(e) => set_visitor(e.target.value)}
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="Name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                      >
                        {" "}
                        Visitor Number
                      </label>
                      <input
                        type="number"
                        onChange={(e) => set_visitor_number(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                        placeholder="+919829245551"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center rk:bg-red-600 rk:hover:bg-red-700 rk:focus:ring-red-800"
                    >
                      Add Visitor
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        ) : (
          ""
        )}

        {/* add a post  */}
        {select === "post" ? (
          <form
            onSubmit={upload_post}
            className="w-1/2 bg-white  gap-5 h-auto rounded-lg  flex-col flex justify-center items-center"
          >
            <span className="font-bold mt-5  text-gray-700">Add a Post</span>
            <div className="flex  relative gap-2 w-3/4 py-5 text-white rounded-md justify-center items-center bg-gray-500">
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
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              <span>Upload here</span>

              <input
                type="file"
                onChange={(e) => setImageUrl(e.target.files[0])}
                className="absolute opacity-0"
                accept="image/*"
              />
            </div>
            <input
              required
              type="text"
              onChange={(e) => set_caption(e.target.value)}
              placeholder="caption"
              className="w-3/4 h-12 p-3 outline-none border-b-emerald-900  border-2 rounded-2xl "
            />
            <button
              type="submit"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 rk:bg-purple-600 rk:hover:bg-purple-700 rk:focus:ring-purple-900"
            >
              Upload
            </button>
          </form>
        ) : (
          ""
        )}

        {/* add an admin  */}

        {select === "admin" ? (
          <>
            <section className=" h-4/5 flex justify-center items-center  w-3/4 rk:bg-gray-900">
              <div className="flex w-full flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow rk:border md:mt-0 sm:max-w-md xl:p-0 rk:bg-gray-800 rk:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl rk:text-white">
                      Add new Admin
                    </h1>
                    <form
                      onSubmit={handle_admin_form}
                      className="space-y-4 md:space-y-6"
                      action="#"
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                        >
                          Name
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          id="name"
                          placeholder=" Name"
                          value={admin_form_data.name}
                          onChange={handle_admin_form_change}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                        >
                          {" "}
                          email
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          id="email"
                          value={admin_form_data.email}
                          onChange={handle_admin_form_change}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                          placeholder="name@company.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                        >
                          Passoword{" "}
                        </label>
                        <input
                          required
                          type="text"
                          name="password"
                          id="password"
                          placeholder="password"
                          value={admin_form_data.password}
                          onChange={handle_admin_form_change}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                        >
                          Select an option
                        </label>
                        <select
                          name="location"
                          required
                          id="location"
                          value={admin_form_data.location}
                          onChange={handle_admin_form_change}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                        >
                          <option value="">Choose</option>
                          <option value="hennur">Hennur</option>
                          <option value="jayanagar">Jayanagar</option>
                          <option value="hsr">HSR</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center rk:bg-yellow-600 rk:hover:bg-yellow-700 rk:focus:ring-yellow-800"
                      >
                        Create an account
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          ""
        )}
        {select === "cafe" ? (
          <>
            <section className=" h-4/5 flex justify-center items-center  w-3/4 rk:bg-gray-900">
              <div className="flex w-full flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow rk:border md:mt-0 sm:max-w-md xl:p-0 rk:bg-gray-800 rk:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl rk:text-white">
                      Add new S-Cafe Admin
                    </h1>
                    <form
                      onSubmit={handle_cafe_admin_form}
                      className="space-y-4 md:space-y-6"
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                        >
                          Name
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          id="name"
                          placeholder=" Name"
                          value={cafe_admin_form_data.name}
                          onChange={handle_cafe_admin_form_change}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                        >
                          {" "}
                          email
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          id="email"
                          value={cafe_admin_form_data.email}
                          onChange={handle_cafe_admin_form_change}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                          placeholder="name@company.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 rk:text-white"
                        >
                          Passoword{" "}
                        </label>
                        <input
                          required
                          type="text"
                          name="password"
                          id="password"
                          placeholder="password"
                          value={cafe_admin_form_data.password}
                          onChange={handle_cafe_admin_form_change}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 rk:bg-gray-700 rk:border-gray-600 rk:placeholder-gray-400 rk:text-white rk:focus:ring-blue-500 rk:focus:border-blue-500"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center rk:bg-yellow-600 rk:hover:bg-yellow-700 rk:focus:ring-yellow-800"
                      >
                        Create cafe account
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default New;
