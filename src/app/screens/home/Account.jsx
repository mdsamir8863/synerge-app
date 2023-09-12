
import AccountImage from "../../../assets/accountImage.png";

const Account = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row  items-center justify-evenly h-screen w-full ">
        <div className="image ms-[-4rem] flex items-center md:m-auto">
        <img src={AccountImage} loading="lazy"  className="w-[28rem]" alt="" />
        </div>
        <div className="text flex  gap-3 w-[22rem] items-start  flex-col  ">
          <p className="text-white font-bold text-xl">Coming Soon</p>
          <p className="text-white ">Our Team is working on Account Dashboard</p>
          <button type="button" className="focus:outline-none text-red-600 font-normal w-72 bg-black  hover:border hover:border-red-600 rounded-lg  px-5 py-2.5  ">Logout</button>
        </div>
      </section>
    </>
  );
};

export default Account;