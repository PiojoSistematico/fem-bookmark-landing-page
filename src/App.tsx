import { useState } from "react";
import Logo from "./assets/images/logo-bookmark.svg";
import Menu from "./components/Menu";
import hero from "./assets/images/illustration-hero.svg";
import chromeLogo from "./assets/images/logo-chrome.svg";
import firefoxLogo from "./assets/images/logo-firefox.svg";
import operaLogo from "./assets/images/logo-opera.svg";

import dotBackground from "./assets/images/bg-dots.svg";
import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";

import tab1 from "./assets/images/illustration-features-tab-1.svg";
import tab2 from "./assets/images/illustration-features-tab-2.svg";
import tab3 from "./assets/images/illustration-features-tab-3.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu></Menu>
      <main>
        <section title="hero-section">
          <picture>
            <img src={hero} alt="" />
          </picture>
          <div>
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div>
              <button>Get it on Chrome</button>
              <button>Get it on Firefox</button>
            </div>
          </div>
        </section>
        <section title="features-section">
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
          {/* TAB HERE */}
          <ul>
            <li>
              <button>Simple Bookmarking</button>
            </li>
            <li>
              <button>Speedy Searching</button>
            </li>
            <li>
              <button>Easy Sharing</button>
            </li>
          </ul>
          <article>
            <picture>
              <img src={tab1} alt="" />
            </picture>
            <h2>Bookmark in one click</h2>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button>More Info</button>
          </article>
          <article>
            <picture>
              <img src={tab2} alt="" />
            </picture>
            <h2>Intelligent search</h2>
            <p>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <button>More Info</button>
          </article>
          <article>
            <picture>
              <img src={tab3} alt="" />
            </picture>
            <h2>Share your bookmarks</h2>
            <p>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <button>More Info</button>
          </article>
        </section>

        <section title="extension-section">
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
          <div>
            <article>
              <picture>
                <img src={chromeLogo} alt="chrome-logo" />
              </picture>
              <h3>Add to Chrome</h3>
              <p>Minimum version 62</p>
              <picture>
                <img src={dotBackground} alt="" />
              </picture>
              <button>Add & Install Extension</button>
            </article>
            <article>
              <picture>
                <img src={firefoxLogo} alt="chrome-logo" />
              </picture>
              <h3>Add to Firefox</h3>
              <p>Minimum version 55</p>
              <picture>
                <img src={dotBackground} alt="" />
              </picture>
              <button>Add & Install Extension</button>
            </article>
            <article>
              <picture>
                <img src={operaLogo} alt="chrome-logo" />
              </picture>
              <h3>Add to Opera</h3>
              <p>Minimum version 46</p>
              <picture>
                <img src={dotBackground} alt="" />
              </picture>
              <button>Add & Install Extension</button>
            </article>
          </div>
        </section>

        <section title="questions-section">
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
          {/* DROPDOWN HERE */}
          <p>What is Bookmark?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
          <p>How can I request a new browser?</p>
          <p>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
          <p>Is there a mobile app?</p>
          <p>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
          <p>What about other Chromium browsers?</p>
          <p>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
          <button>more info</button>
        </section>
        <form action="">
          <p>35,000+ already joined</p>
          <p>Stay up-to-date with what we’re doing</p>
          <div>
            <input type="email" />
            <button>Contact Us</button>
          </div>
        </form>
      </main>
      <footer>
        <picture>
          <img src={Logo} alt="" />
        </picture>
        <ul>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </div>
      </footer>
    </>
  );
}

export default App;
