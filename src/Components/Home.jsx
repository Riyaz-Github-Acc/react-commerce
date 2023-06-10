import { Slider, FeaturedProducts, Category, Offer } from "./";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Category />
      <FeaturedProducts type="trending" />
      <Offer />
    </div>
  );
};

export default Home;
