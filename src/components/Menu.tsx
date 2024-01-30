import Logo from "../assets/images/logo-bookmark.svg";
import iconMenu from "../assets/images/icon-hamburger.svg";
import iconClose from "../assets/images/icon-close.svg";
import { useState } from "react";
import { Button } from "react-aria-components";
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

      {/* <Button
        className="btn-menu mobile"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onPress={handleClick}
      >
        {isMenuOpen ? (
          <img
            className="icon-close"
            src={iconClose}
            alt="Close Menu"
            aria-hidden="false"
          />
        ) : (
          <img
            className="icon-hamburger"
            src={iconMenu}
            alt="Open Menu"
            aria-hidden="false"
          />
        )}
      </Button> */}

      <CustomModal></CustomModal>

      <nav className={`hidden`} id="primary-navigation">
        <ul aria-label="Primary" role="list">
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
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
