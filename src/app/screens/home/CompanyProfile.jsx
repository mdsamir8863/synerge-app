import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"


const CompanyProfile = () => {
const {id} = useParams()
const dispatch = useDispatch()
const[company,set_company] = useState({})
const {companies} = useSelector(e=>e.users_companies_state_reducer)


const fetch_company=()=>{

    set_company(companies.find(e=>e._id=== id))
}

useEffect(()=>{
fetch_company()

console.log(companies)
},[])

  return (
    <div className="text-white font-bold text-3xl">{company?.name}</div>
  )
}

export default CompanyProfile