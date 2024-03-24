import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div>
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          We Provide You
          <span className="gradient-text"> Super Quality </span>
          Shoes
        </h2>
        <p className="lg:max-w-lg font-montserrat text-white-400 text-lg leading-8 mt-4 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, harum!
        </p>
        <Button text={"Shop now"} icon={arrowRight} />
      </div>

      <div>
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
