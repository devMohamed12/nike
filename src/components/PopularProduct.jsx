import { Link } from "react-router-dom";

const PopularProduct = ({imgURL,name,price,id}) => {
  return (
    <Link className="w-full max-sm:w-full " to={`/${id}`}>
          <img src={imgURL} alt={name} className="w-full " />
          <div className="mt-4">
              <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin ">{name}</h3>
              <p className="mt-2 font-semibold font-montserrat text-coral-red leading-normal">{price}</p>
          </div>
    </Link>
  );
}

export default PopularProduct