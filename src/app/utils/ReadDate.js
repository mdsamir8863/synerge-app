const ReadDate=(e)=>{
const new_date = new Date(e)
return String(new_date.toLocaleDateString())
}

export default ReadDate