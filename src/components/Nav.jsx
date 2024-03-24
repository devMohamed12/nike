import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="padding-x py-5 w-full mb-3">
      <nav className="flex justify-between items-center max-container max-md:flex-col max-md:gap-5">
        <Link href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </Link>
        <ul className="flex justify-center  items-center  lg:text-xl lg:gap-16 max-md:gap-2 max-md:text-base max-md:justify-around">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal  text-white font-extrabold hover:gradient-text hover:font-bold duration-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
