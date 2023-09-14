import { useEffect, useState } from "react"
import PostCard from "../../components/PostCard"
import { useDispatch } from "react-redux"
import Axios from 'axios'


const UserFeed = () => {


const dispatch  = useDispatch()
const [posts,set_posts] = useState([])

const fetch_feed_post=async()=>{
dispatch({type:'loading_data',payload:true})
await Axios.get('/api/v1/user/posts')
.then((res)=>{
  if(res.data.posts){
    set_posts(res.data.posts)
  }
}).catch((err)=>{
  console.log(err)
}).finally(()=>{
dispatch({type:'loading_data',payload:false})
})



}

useEffect(()=>{
fetch_feed_post()
},[])

  return (
<section className="w-full flex-col h-screen flex p-5 items-center">
<span className="font-bold w-full text-gray-100  text-xl ">Feed</span>
{posts && posts.map((e)=><PostCard key={e._id} post={e}/>)
}
<div className="w-full flex h-24 p-10"></div>


</section>
  )
}

export default UserFeed