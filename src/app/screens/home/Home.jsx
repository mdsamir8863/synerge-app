import { useEffect } from "react";
import HomeCenter from "../../components/HomeCenter";
import HomeFeeds from "../../components/HomeFeed";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((e) => e.user_state_reducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.Admin) {
      navigate("/users/feed");
    }
  }, []);

  return (
    <section className="w-full  flex h-screen justify-evenly items-center">
      <HomeCenter />
      <HomeFeeds />
    </section>
  );
};

export default Home;
