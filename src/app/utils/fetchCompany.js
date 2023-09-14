const fetch_company=(companies,id)=>{
console.log(companies)
     let one = companies.find((e)=>e._id==id)
return one.name




}

export default fetch_company