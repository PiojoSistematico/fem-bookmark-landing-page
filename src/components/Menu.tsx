import Logo from "../assets/images/logo-bookmark.svg";
import { useState } from "react";
import CustomModal from "./CustomModal";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="font-rubik text-lg font-normal flex flex-row justify-between items-center p-8">
      <a href="#" className="header-logo">
        <img src={Logo} alt="Logo" />
      </a>

      <CustomModal></CustomModal>

      <nav className="hidden md:flex md:flex-row md:gap-8 md:items-center">
        <ul className="flex flex-row gap-4 items-center">
          <li>
            <a href="">Features</a>
          </li>
          <hr />
          <li>
            <a href="">Pricing</a>
          </li>
          <hr />
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <button className="bg-primary-2 text-white px-4 py-1 rounded-md">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Menu;
