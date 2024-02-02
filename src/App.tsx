import { useState } from "react";
import Menu from "./components/Menu";
import hero from "./assets/images/illustration-hero.svg";
import chromeLogo from "./assets/images/logo-chrome.svg";
import firefoxLogo from "./assets/images/logo-firefox.svg";
import operaLogo from "./assets/images/logo-opera.svg";

import dotBackground from "./assets/images/bg-dots.svg";

import { Button } from "react-aria-components";
import * as Accordion from "@radix-ui/react-accordion";
import {
  IconArrow,
  IconBookmark,
  IconFacebook,
  IconTwitter,
} from "./components/Icons";
import CustomForm from "./components/CustomForm";
import CustomTabs from "./components/CustomTabs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu></Menu>
      <main className="font-rubik text-lg font-normal">
        <section title="hero-section" className="p-8 md:grid md:grid-cols-2">
          <picture className="relative overflow-hidden w-80 h-64 md:order-2">
            <img src={hero} alt="" className="object-contain w-full z-10" />
            <div className="absolute w-96 h-40 bg-primary-1 rounded-l-[100px] -right-12 top-28 z-0"></div>
          </picture>
          <div className=" flex flex-col gap-8 text-center items-center md:order-1 md:items-start md:text-left">
            <h1 className="text-neutral-2 text-3xl font-medium">
              A Simple Bookmark Manager
            </h1>
            <p className="text-neutral-1">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex flex-row gap-4">
              <Button className="font-medium bg-primary-1 text-white p-3 rounded-md border border-solid border-primary-1 hover:bg-white focus-visible:bg-white hover:text-primary-1 focus-visible:text-primary-1">
                Get it on Chrome
              </Button>
              <Button className="font-medium bg-gray-100 text-neutral-1 p-3 rounded-md border border-solid border-gray-100 hover:bg-white focus-visible:bg-white hover:text-gray-500 focus-visible:text-gray-500 hover:border-gray-500 focus-visible:border-gray-500">
                Get it on Firefox
              </Button>
            </div>
          </div>
        </section>
        <section
          title="features-section"
          className="p-8 flex flex-col gap-8 items-center text-center"
        >
          <h2 className="text-neutral-2 text-2xl font-medium">Features</h2>
          <p className="text-neutral-1">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>

          <CustomTabs></CustomTabs>
        </section>

        <section
          title="extension-section"
          className="p-8 flex flex-col gap-8 items-center text-center"
        >
          <h2 className="text-neutral-2 text-2xl font-medium">
            Download the extension
          </h2>
          <p className="text-neutral-1">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
          <div className="p-8 flex flex-col items-center gap-8">
            <article className="flex flex-col items-center gap-4 shadow-lg p-6 rounded-xl">
              <picture>
                <img
                  src={chromeLogo}
                  alt="chrome-logo"
                  className="object-contain w-full"
                />
              </picture>
              <div>
                <h3 className="text-neutral-2 text-xl font-medium">
                  Add to Chrome
                </h3>
                <p className="text-neutral-1">Minimum version 62</p>
              </div>
              <picture>
                <img src={dotBackground} alt="" />
              </picture>
              <Button className="bg-primary-1 text-white w-full rounded-md p-2 border border-solid border-primary-1 hover:bg-white focus-visible:bg-white hover:text-primary-1 focus-visible:text-primary-1">
                Add & Install Extension
              </Button>
            </article>
            <article className="flex flex-col items-center gap-4 shadow-lg p-6 rounded-xl">
              <picture>
                <img
                  src={firefoxLogo}
                  alt="chrome-logo"
                  className="object-contain w-full"
                />
              </picture>
              <div>
                <h3 className="text-neutral-2 text-xl font-medium">
                  Add to Firefox
                </h3>
                <p className="text-neutral-1">Minimum version 55</p>
              </div>

              <picture>
                <img src={dotBackground} alt="" />
              </picture>
              <Button className="bg-primary-1 text-white w-full rounded-md p-2 border border-solid border-primary-1 hover:bg-white focus-visible:bg-white hover:text-primary-1 focus-visible:text-primary-1">
                Add & Install Extension
              </Button>
            </article>
            <article className="flex flex-col items-center gap-4 shadow-lg p-6 rounded-xl">
              <picture>
                <img
                  src={operaLogo}
                  alt="chrome-logo"
                  className="object-contain w-full"
                />
              </picture>
              <div>
                <h3 className="text-neutral-2 text-xl font-medium">
                  Add to Opera
                </h3>
                <p className="text-neutral-1">Minimum version 46</p>
              </div>

              <picture>
                <img src={dotBackground} alt="" />
              </picture>
              <Button className="bg-primary-1 text-white w-full rounded-md p-2 border border-solid border-primary-1 hover:bg-white focus-visible:bg-white hover:text-primary-1 focus-visible:text-primary-1">
                Add & Install Extension
              </Button>
            </article>
          </div>
        </section>

        <section
          title="questions-section"
          className="px-8 py-12 flex flex-col gap-8 items-center text-center"
        >
          <h2 className="text-neutral-2 text-2xl font-medium">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-1">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
          {/* ACCORDION FROM RADIX PRIMITIVES */}

          <Accordion.Root type="multiple" className="flex flex-col gap-4">
            <Accordion.Item
              value="item-1"
              className="group flex flex-col gap-4 py-4 border-b border-solid border-b-neutral-1"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex flex-row items-center gap-4">
                  <span>What is Bookmark?</span>
                  <picture className="text-primary-1 group-data-[state='open']:text-primary-2 group-data-[state='open']:rotate-180">
                    <IconArrow></IconArrow>
                  </picture>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                <p className="text-neutral-1 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt justo eget ultricies fringilla. Phasellus blandit
                  ipsum quis quam ornare mattis.
                </p>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item
              value="item-2"
              className="group flex flex-col gap-4 py-4 border-b border-solid border-b-neutral-1"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex flex-row items-center gap-4">
                  <span>How can I request a new browser?</span>
                  <picture className="text-primary-1 group-data-[state='open']:text-primary-2 group-data-[state='open']:rotate-180">
                    <IconArrow></IconArrow>
                  </picture>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                <p className="text-neutral-1 text-left">
                  Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                  massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                  luctus eros aliquet convallis ultricies. Mauris augue massa,
                  ultricies non ligula. Suspendisse imperdie tVivamus luctus
                  eros aliquet convallis ultricies. Mauris augue massa,
                  ultricies non ligula. Suspendisse imperdiet.
                </p>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item
              value="item-3"
              className="group flex flex-col gap-4 py-4 border-b border-solid border-b-neutral-1"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex flex-row items-center gap-4">
                  <span>Is there a mobile app?</span>
                  <picture className="text-primary-1 group-data-[state='open']:text-primary-2 group-data-[state='open']:rotate-180">
                    <IconArrow></IconArrow>
                  </picture>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                <p className="text-neutral-1 text-left">
                  Sed consectetur quam id neque fermentum accumsan. Praesent
                  luctus vestibulum dolor, ut condimentum urna vulputate eget.
                  Cras in ligula quis est pharetra mattis sit amet pharetra
                  purus. Sed sollicitudin ex et ultricies bibendum.
                </p>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item
              value="item-4"
              className="group flex flex-col gap-4 py-4 border-b border-solid border-b-neutral-1"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex flex-row items-center gap-4">
                  <span>What about other Chromium browsers?</span>
                  <picture className="text-primary-1 group-data-[state='open']:text-primary-2 group-data-[state='open']:rotate-180">
                    <IconArrow></IconArrow>
                  </picture>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                <p className="text-neutral-1 text-left">
                  Integer condimentum ipsum id imperdiet finibus. Vivamus in
                  placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                  gravida pellentesque non ut velit.
                </p>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          <Button className="bg-primary-1 text-white rounded-md px-6 py-2 capitalize border border-solid border-primary-1 hover:bg-white focus-visible:bg-white hover:text-primary-1 focus-visible:text-primary-1">
            more info
          </Button>
        </section>
        <section
          title="form-section"
          className="bg-primary-1 text-white flex flex-col gap-4 items-center px-8 py-12 text-center"
        >
          <p className="uppercase text-sm">35,000+ already joined</p>
          <p className="text-xl font-medium">
            Stay up-to-date with what we’re doing
          </p>
          <CustomForm></CustomForm>
        </section>
      </main>
      <footer className="bg-neutral-2 text-white flex flex-col items-center gap-8 p-8">
        <picture>
          <IconBookmark></IconBookmark>
        </picture>
        <ul className="flex flex-col items-center gap-4 uppercase">
          <li className="hover:text-primary-2 focus-visible:text-primary-2">
            <a href="">Features</a>
          </li>
          <li className="hover:text-primary-2 focus-visible:text-primary-2">
            <a href="">Pricing</a>
          </li>
          <li className="hover:text-primary-2 focus-visible:text-primary-2">
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-4">
          <picture className="hover:text-primary-2 focus-visible:text-primary-2">
            <IconFacebook></IconFacebook>
          </picture>
          <picture className="hover:text-primary-2 focus-visible:text-primary-2">
            <IconTwitter></IconTwitter>
          </picture>
        </div>
      </footer>
    </>
  );
}

export default App;
