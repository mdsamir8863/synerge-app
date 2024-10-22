
const PostCard = () => {
  return (
    <>
      <div className="flex flex-col my-5 w-[95%] items-center justify-center m-auto gap-3">
        <div className="max-w-sm  border  rounded-lg shadow bg-gray-800 border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-gray-300 ">
              Here are the biggest enterprise
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              User Name
              {/* <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg> */}
            </a>
          </div>
        </div>
       
      </div>
    </>
  );
};
export default PostCard;