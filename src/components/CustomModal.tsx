import Logo from "../assets/images/logo-bookmark.svg";
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import {
  IconBookmark,
  IconClose,
  IconFacebook,
  IconMenu,
  IconTwitter,
} from "./Icons";

const CustomModal = () => {
  return (
    <DialogTrigger>
      <Button>
        <IconMenu></IconMenu>
      </Button>
      <ModalOverlay className="bg-red-500 w-screen h-screen">
        <Modal className="bg-neutral-2 bg-opacity-95 px-8 text-white absolute top-0 left-0 w-full h-screen">
          <Dialog className="flex flex-col items-center">
            {({ close }) => (
              <>
                <div className=" absolute font-rubik text-lg font-normal flex flex-row justify-between items-center p-8 w-full">
                  <a href="#" className="header-logo">
                    <IconBookmark></IconBookmark>
                  </a>
                  <Button onPress={close}>
                    <IconClose></IconClose>
                  </Button>
                </div>
                <div className="flex flex-col justify-between items-center w-full">
                  <ul className="flex flex-col gap-4 items-center w-full pt-28">
                    <li className="w-full">
                      <hr />
                    </li>

                    <li className="w-full text-center uppercase text-2xl">
                      <a href="#">Features</a>
                    </li>
                    <li className="w-full">
                      <hr />
                    </li>
                    <li className="w-full text-center uppercase text-2xl">
                      <a href="#">Pricing</a>
                    </li>
                    <li className="w-full">
                      <hr />
                    </li>
                    <li className="w-full text-center uppercase text-2xl">
                      <a href="#">Contact</a>
                    </li>
                    <li className="w-full pb-2">
                      <hr />
                    </li>
                    <li className="w-full">
                      <Button className="uppercase text-2xl border border-solid border-white border-2 py-2 w-full">
                        Login
                      </Button>
                    </li>
                  </ul>
                  <div className="flex flex-row items-center gap-8 pt-60 p-8">
                    <picture className="hover:text-primary-2 focus-visible:text-primary-2">
                      <IconFacebook></IconFacebook>
                    </picture>
                    <picture className="hover:text-primary-2 focus-visible:text-primary-2">
                      <IconTwitter></IconTwitter>
                    </picture>
                  </div>
                </div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export default CustomModal;
