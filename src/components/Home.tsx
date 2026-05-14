import Category from "./Category";
import { ProductList } from "./ProductCard";
import Slider from "./Slider";
const Home = () => {
  return (
    <div>
      <Slider />
      <Category />
      <ProductList />
    </div>
  );
};

export default Home;
