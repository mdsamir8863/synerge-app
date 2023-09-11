import HomeCenter from "../../components/HomeCenter"
import HomeFeeds from "../../components/HomeFeed"
import Account from "./Account"

const Home = () => {
  return (
<section className='w-full  flex h-screen justify-evenly items-center'>
<HomeCenter/>
<HomeFeeds/>
<Account/>

</section>
  )
}

export default Home