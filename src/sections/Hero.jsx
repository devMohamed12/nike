import Button from "./../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "./../constants/index";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [mainImg, setMainImg] = useState(bigShoe1);
  return (
    <section
      className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container min-h-screen p-2"
      id="home"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat max-md:mx-auto">our summer collections</p>
        <h2 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold">
          <span className="gradient-text xl:whitespace-nowrap relative z-10 pr-10 font-extrabold">
            the new arrival
          </span>
          <br />
          nike shoes
        </h2>

        <p className="font-montserrat text-white-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, harum!
        </p>
        <Button text={"Shop now"} icon={arrowRight} />

        <div className="flex justify-start items-start  w-full mt-20 gap-16 max-md:flex-col">
          {statistics.map(({ value, label }) => (
            <div key={label}  className="max-md:mx-auto">
              <p className="text-4xl font-palanquin font-bold">{value}</p>
              <p className="leading-7 font-montserrat text-white-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col   items-center xl:min-h-screen max-xl:py-20 bg-[#ECEEFF] bg-hero bg-cover ">
        <img
          src={mainImg}
          alt="shoes collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="max-sm:px-6 translate-y-36  flex justify-around">
          {shoes.map((shoe, idx) => (
            <div key={idx}>
              <ShoeCard
                img={shoe}
                changeMainImg={(shoe) => {
                  setMainImg(shoe);
                }}
                mainImg={mainImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
