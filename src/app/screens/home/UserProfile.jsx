import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"


const UserProfile = () => {
const {id} = useParams()
const[user,set_user] = useState({})
const {users} = useSelector(e=>e.users_companies_state_reducer)

const fetch_user=()=>{
  set_user(users.find(e=>e._id === id))
}

useEffect(()=>{
fetch_user()
console.log(users)
},[])
  return (
<section className="text-white font-bold text-3xl w-full h-screen ">
{user?.name}
</section>
  )
}

export default UserProfile