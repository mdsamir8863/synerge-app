
import Card from "./PostCard";
const HomeFeeds = () => {
  return (

      <main className="mr-5 h-[95%] relative w-1/3 ">
        <p className="text-center mt-2 text-white text-2xl font-bold">Feed</p>
          <div className="bg-red-500 absolute right-0 top-2 cursor-pointer w-fit px-4 py-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-white font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
        <div className="feedshadow feed   flex flex-col relative m-auto  w-full h-5/6 overflow-scroll ">
          <Card/>
          <Card />
          <Card />
        </div>
      </main>

  );
};

export default HomeFeeds;