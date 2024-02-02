import React from "react";
import { Button, Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import tab1 from "../assets/images/illustration-features-tab-1.svg";
import tab2 from "../assets/images/illustration-features-tab-2.svg";
import tab3 from "../assets/images/illustration-features-tab-3.svg";

const CustomTabs = () => {
  return (
    <Tabs className="">
      <TabList
        aria-label="Features"
        className="pb-8 md:flex md:flex-row md:gap-16 md:items-center md:justify-center md:border-solid md:border-b-2 md:border-neutral-1 md:pb-0"
      >
        <Tab
          id="Bookmarking"
          className="group relative border-solid border-t border-neutral-1 py-2 md:border-0"
        >
          <span>Simple Bookmarking</span>
          <div className="hidden bg-primary-2 h-1 w-32 absolute bottom-0 left-1/2 -translate-x-1/2 group-data-[selected]:block md:w-48"></div>
        </Tab>
        <Tab
          id="Searching"
          className="group relative border-solid border-b border-t border-neutral-1 py-2 md:border-0"
        >
          <span>Speedy Searching</span>
          <div className="hidden bg-primary-2 h-1 w-32 absolute bottom-0 left-1/2 -translate-x-1/2 group-data-[selected]:block md:w-48"></div>
        </Tab>
        <Tab
          id="Sharing"
          className="group relative border-solid border-b border-neutral-1 py-2 md:border-0"
        >
          <span>Easy Sharing</span>
          <div className="hidden bg-primary-2 h-1 w-32 absolute bottom-0 left-1/2 -translate-x-1/2 group-data-[selected]:block md:w-48"></div>
        </Tab>
      </TabList>
      <TabPanel
        id="Bookmarking"
        className="flex flex-col gap-4 items-center md:pt-4 md:grid md:grid-cols-2"
      >
        <picture>
          <img src={tab1} alt="" className="object-contain w-full" />
        </picture>
        <div className="flex flex-col gap-4 items-center md:pt-4 md:items-start md:text-left md:pl-8">
          <h2 className="text-neutral-2 text-2xl font-medium">
            Bookmark in one click
          </h2>
          <p className="text-neutral-1">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <Button className="bg-primary-1 px-4 py-2  rounded-md text-white hidden md:block">
            More info
          </Button>
        </div>
      </TabPanel>
      <TabPanel
        id="Searching"
        className="flex flex-col gap-4 items-center md:pt-4 md:grid md:grid-cols-2"
      >
        <picture>
          <img src={tab2} alt="" className="object-contain w-full" />
        </picture>
        <div className="flex flex-col gap-4 items-center md:pt-4 md:items-start md:text-left md:pl-8">
          <h2 className="text-neutral-2 text-2xl font-medium">
            Intelligent search
          </h2>
          <p className="text-neutral-1">
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
          </p>
          <Button className="bg-primary-1 px-4 py-2  rounded-md text-white hidden md:block">
            More info
          </Button>
        </div>
      </TabPanel>
      <TabPanel
        id="Sharing"
        className="flex flex-col gap-4 items-center md:pt-4 md:grid md:grid-cols-2"
      >
        <picture>
          <img src={tab3} alt="" className="object-contain w-full" />
        </picture>
        <div className="flex flex-col gap-4 items-center md:pt-4 md:items-start md:text-left md:pl-8">
          <h2 className="text-neutral-2 text-2xl font-medium">
            Share your bookmarks
          </h2>
          <p className="text-neutral-1">
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <Button className="bg-primary-1 px-4 py-2  rounded-md text-white hidden md:block">
            More info
          </Button>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default CustomTabs;
