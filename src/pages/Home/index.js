import Products from "../Products";
import Search from "../Search";

const Home = () => {
  return (
    <div>
      <div className="text-center">
        <h1>Home Page</h1>
      </div>
      <Search />
      <Products />
    </div>
  )
};

export default Home;