

const Bookings = () => {
  return (
<section className="flex flex-col w-full h-screen justify-evenly items-center">

<div className="flex py-5 items-center justify-between w-3/4">
    <span className="font-medium text-xl text-white">ALl Bookings</span>
    <div className="text-white">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>

    </div>
</div>

<div className="flex w-3/4 justify-center items-center h-4/5">
<div className="relative w-full h-full  overflow-y-scroll overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full h-auto overflow-y-scroll text-sm text-left text-blue-100 ">
        <thead className="text-xs text-white uppercase bg-blue-600 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-blue-500 border-b h-16 border-blue-400">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap ">
                    Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-blue-500 border-b h-16 border-blue-400">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap ">
                    Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-blue-500 border-b h-16 border-blue-400">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap ">
                    Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
         
        </tbody>
    </table>
</div>
</div>


</section>
  )
}

export default Bookings