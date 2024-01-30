import Logo from "../assets/images/logo-bookmark.svg";
import iconClose from "../assets/images/icon-close.svg";
import iconMenu from "../assets/images/icon-hamburger.svg";
import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";

const CustomModal = () => {
  return (
    <DialogTrigger>
      <Button>
        <img
          className="icon-hamburger"
          src={iconMenu}
          alt="Open Menu"
          aria-hidden="false"
        />
      </Button>
      <Modal className="bg-slate-600 text-white absolute top-0 left-0 w-full">
        <Dialog>
          {({ close }) => (
            <>
              <div>
                <a href="#" className="header-logo">
                  <img src={Logo} alt="Logo" />
                </a>
                <Button onPress={close}>
                  <img
                    className="icon-close"
                    src={iconClose}
                    alt="Close Menu"
                    aria-hidden="false"
                  />
                </Button>
              </div>
              <ul>
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
                  <Button>Login</Button>
                </li>
              </ul>
            </>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export default CustomModal;
