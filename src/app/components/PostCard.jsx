import wait from '../../assets/loader_.gif'


const PostCard = ({post}) => {
  return (
    <>
      <div className="flex flex-col my-5 w-[95%] items-center justify-center m-auto gap-3">
        <div className="max-w-sm  border  rounded-lg shadow bg-gray-800 border-gray-700">
          <a >
            <img
              className="rounded-t-lg"
              src={post?.image || wait}
              alt=""
            />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-gray-300 ">
           {post?.caption}
            </p>
            <a
        
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
   { post?.owner && (post.owner).split('+')[0]}
             
            </a>
          </div>
        </div>
       
      </div>
    </>
  );
};
export default PostCard;