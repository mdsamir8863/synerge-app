import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((e) => e.user_state_reducer);
  const [image, set_image] = useState(null);
  const [caption, set_caption] = useState("");
const[posts,set_posts] = useState([])
  const [upload_pop_up, set_upload_pop_up] = useState(false);

  const clear_redux_state = () => {
    dispatch({ type: "loading_data", payload: false });
    dispatch({ type: "user_data", payload: {} });
    dispatch({ type: "auth_data", payload: false });
  };

  const confirm_logout = async () => {
    const action = confirm("you sure you wanna logout");

    if (action) {
      dispatch({ type: "loading_data", payload: true });
      await Axios.post("/api/v1/user/logout").then((res) => {
        if (res.data.success === true) {
          alert(res.data.message);
          clear_redux_state();
          navigate("/login");
        }
      });
    }
  };

  const fetch_my_posts = async () => {
    dispatch({ type: "loading_data", payload: true });
    await Axios.get("/api/v1/mypost")
      .then((res) => {
        console.log(res);
        if(res.data.success===true){
            set_upload_pop_up(false)
            set_posts(res.data.posts)
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch({ type: "loading_data", payload: false });
      });
  };

  const handle_file_change = (e) => {
    set_image(e.target.files[0]);
  };

  const handle_post_form =async (e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append("caption", caption);
    form_data.append("image", image);

dispatch({type:'loading_data',payload:true})
await Axios.post('/api/v1/user/post/upload',form_data)
.then((res)=>{
    if(res.data.success === true){
  alert('posted successfully 😊')
  fetch_my_posts()
    }
}).catch((err)=>{
    alert(err.response.data.message || err.message)
}).finally(()=>{
dispatch({type:'loading_data',payload:false})
})



  };

  useEffect(() => {
    fetch_my_posts()
  }, []);

  return (
    <>
      {upload_pop_up ? (
        <section className="fixed w-full h-full z-50">
          <div className="flex relative w-full h-full justify-center items-center">
            <div
              onClick={() => set_upload_pop_up(false)}
              className="flex w-full h-full absolute bg-black z-10 opacity-70 "
            ></div>
            <form
              onSubmit={handle_post_form}
              className="flex-col flex w-3/4 items-center gap-4  z-20 bg-white h-auto p-5 rounded-lg"
            >
              <span className="text-gray-700  font-bold ">
                Uplaod a new Post
              </span>
              <div className="flex flex-col w-4/5 h-32 bg-gray-300 justify-center items-center  rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.0}
                  stroke="currentColor"
                  className="w-12 h-12 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                <span>Click to select a post</span>
                <input
                  required
                  onChange={handle_file_change}
                  type="file"
                  className="absolute scale-125 opacity-0"
                ></input>
              </div>

              <div className="relative w-4/5 z-0">
                <input
                  required
                  value={caption}
                  onChange={(e) => set_caption(e.target.value)}
                  type="text"
                  id="floating_standard"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_standard"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Write a Caption
                </label>
              </div>
              <button
                type="submit"
                className="text-white w-4/5 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Post
              </button>
            </form>
          </div>
        </section>
      ) : (
        ""
      )}

      <section className="w-full h-screen flex flex-col p-5">
        <div className="flex w-full items-center justify-between py-2">
          <span className="text-white font-bold text-xl">Profile</span>

          <button
            onClick={confirm_logout}
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  "
          >
            Logout
          </button>
        </div>

        <div className="flex morphcard items-center gap-5 py-5 w-full">
          <div className="flex ml-4 rounded-full w-24 justify-center items-center h-24 overflow-hidden">
            <img
              className=""
              src={
                user?.avatar ||
                "https://images.unsplash.com/photo-1693684737209-72dfa272a7a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
              }
              alt=""
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white font-medium text-xl">{user?.name}</span>
            <span className="text-sm text-gray-300">{user?.company_name}</span>
          </div>
        </div>
        <div
          onClick={() => set_upload_pop_up(true)}
          className="flex py-3 my-4 justify-center items-center text-gray-200 bg-gray-500  rounded-md gap-2"
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
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          Upload a Post
        </div>

        <div className="flex overflow-y-scroll p-5 flex-col w-full ">
            
            {posts && posts.map((e)=><PostCard post={e} key={e._id}/> )
            }
            <div className="w-full flex h-24 p-10"></div>
             </div>




      </section>
    </>
  );
};

export default UserProfile;
