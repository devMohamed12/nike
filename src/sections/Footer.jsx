import { Link } from "react-router-dom";
import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { footerLinks } from "./../constants/index";

const Footer = () => {
  const [products, help, getInTouch] = footerLinks;

  const column = (object) => (
    <div className="max-lg:text-center ">
      <h4 className="font-palanquin text-3xl gradient-text">{object.title}</h4>
      <div className=" ">
        {object.links.map(({ name, link }) => (
          <Link href={link} className="block">
            {name}
          </Link>
        ))}
      </div>
    </div>
  );

  // const column = `<div class=""

  return (
    <footer className="max-container bg-black  padding  padding-x padding-t pb-8">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20">
        {/* first col */}
        <div className="">
          <Link href="/" className="inline-block mx-auto" >
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </Link>
          <p className="my-5 text-base leading-7 info-text sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center justify-center gap-5">
            {socialMedia.map(({ src, alt }) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={src} alt={alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        {/*  column 2 */}
        {column(products)}
        {/*  column 3 */}
        {column(help)}
        {/*  column 4 */}
        {column(getInTouch)}
      </div>
    </footer>
  );
};

export default Footer;
