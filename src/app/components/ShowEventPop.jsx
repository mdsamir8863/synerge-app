import alter from "../../assets/loader_.gif";

const ShowEventPop = ({ url, inactive_image_show }) => {
  return (
    <section className="w-full h-screen z-50 fixed">
      <div className="flex w-full justify-center items-center h-full relative">
        <div
          onClick={inactive_image_show}
          className="flex absolute w-full h-full bg-black z-10 opacity-70"
        ></div>
        <div className="flex bg-white z-20 h-auto p-5 rounded-md  w-auto">
          <img
            loading="lazy"
            src={url || alter}
            className="w-96 h-96 object-cover "
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ShowEventPop;
