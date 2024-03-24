import { useParams } from "react-router";
import { thumbnailShoe1 } from "../assets/images";
import { products } from "../constants";
import Button from "../components/Button";
import { useEffect } from "react";

const ShoePage = () => {
  const { productID } = useParams();

  const shoe = products.find((product) => +product.id == productID);
  console.log(shoe);

  const {
    name,
    imgURL,
    price,
    description: { firstPart, secondPart, thirdPart },
  } = shoe;

  // to scrollTo to the top of the window every time 
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="py-20  min-h-screen bg-main-gradient text-white">
      <div className="lg:flex lg:justify-between w-11/12 mx-auto">
        {/* first col */}
        <div className="lg:w-6/12">
          <h2 className="font-palanquin text-4xl max-sm:text-[72px] font-bold mb-10 gradient-text">
            {name}
          </h2>
          <div className="description-box bg-primary">
            <span className="description-part-number text-white">01</span>
            <p className="text-white">{firstPart}</p>
          </div>
          <div className="description-box hover:bg-primary hover:text-white my-8 group ">
            <span className="description-part-number text-coral-red group-hover:text-white">
              02
            </span>
            <p>{secondPart}</p>
          </div>
          <div className="description-box  hover:bg-primary hover:text-white mb-5  group">
            <span className="description-part-number text-coral-red group-hover:text-white">
              03
            </span>
            <p>{thirdPart}</p>
          </div>
        </div>

        {/* second col image*/}
        <div className="lg:w-5/12">
          <img
            src={imgURL}
            alt=""
            className="lg:w-full w-11/12 mx-auto lg:hover:scale-105 duration-700"
          />
          <div className="flex my-5 justify-evenly items-center">
            <p className="text-xl">price is : {price}</p>
            <Button text={"buy now"} classes={"  "} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoePage;
