import HomeCenter from "../../components/HomeCenter"
import HomeFeeds from "../../components/HomeFeed"

const Home = () => {
  return (
<section className='w-full  flex h-screen justify-evenly items-center'>
<HomeCenter/>
<HomeFeeds/>

</section>
  )
}

export default Home