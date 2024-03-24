import PopularProduct from "../components/PopularProduct";
import { products } from "../constants";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="">
        <h2 className="text-4xl font-palanquin font-bold">
          our <span className="gradient-text">Popular</span> Products
        </h2>
        <p className="font-montserrat text-white-400">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>

        <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => (
            <PopularProduct key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
