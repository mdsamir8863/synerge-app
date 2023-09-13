const arr =[1,4,5,6,7,7]
const users=[
{
    id:1,
    name:'vishal'
},
{
    id:3,
    name:'samir'
},
]


const all_users =[]
users.map((e)=>
{
if(arr.includes(e.id)){
    all_users.push(e)
    return e
}

}
) 
console.log(all_users)




