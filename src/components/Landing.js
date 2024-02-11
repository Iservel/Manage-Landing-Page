import React, { useState } from "react";
import Logo from "../images/logo.svg";
import IlustrationIntro from "../images/illustration-intro.svg";
import AvatarAli from "../images/avatar-ali.png";
import IconFacebook from "../images/icon-facebook.svg";
import IconYoutube from "../images/icon-youtube.svg";
import IconTwitter from "../images/icon-twitter.svg";
import IconPinterest from "../images/icon-pinterest.svg";
import IconInstagram from "../images/icon-instagram.svg";
import LogoWhite from "../images/logo-white.svg";
import BGTabletPattern from "../images/bg-tablet-pattern.svg";

function Landing() {
  const [menu, setMenu] = useState(false);

  menu ? console.log("true") : console.log("false");
  const openMenu = "bg-open-menu";

  return (
    <div className="main-container">
      <header>
        <nav className="wrapper h-20 flex items-center  justify-between select-none">
          <a href="./" className="w-1/3 max-w-[200px]">
            <img
              src={Logo}
              alt="logo"
              className="w-full select-none min-w-[170npmpx]"
            />
          </a>

          <input
            type="checkbox"
            id="menu"
            onChange={() => setMenu(!menu)}
            className="hidden peer"
          />
          <label
            for="menu"
            className={menu ? "closed-menu" : "open-menu"}
          ></label>

          <div className={menu ? "display-nav" : "hidden-nav"}>
            <ul className="absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-dark-blue shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static">
              <li>
                <a href="#">Pricing</a>
              </li>

              <li>
                <a href="#">Product</a>
              </li>

              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">Careers</a>
              </li>

              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>

          <a
            href="#"
            className="button shadow-md shadow-bright-red/30 lg:block select-none"
          >
            Get Started
          </a>
        </nav>

        <section className="wrapper grid gap-8 justify-items-center items-center pb-12 md:grid-cols-2 md:py-24">
          <img
            src={IlustrationIntro}
            alt=""
            className="w-full max-w-lg md:order-1"
          />
          <article className="text-center space-y-6 md:text-left md:space-y-8">
            <h1 className="text-4xl font-bold text-very-dark-blue md:text-5xl">
              Bring everyone together to build better products.
            </h1>
            <p className="text-dark-grayish-blue">
              Manage makes it simple for software teams to plan day-to-day taks
              while keeping the larger team goals in view.
            </p>
            <a className="button-mobile shadow-md lg:hidden md:mx-0">
              Get Started
            </a>
          </article>
        </section>
      </header>

      <figure className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={BGTabletPattern}
          className="absolute w-full -z-10 -top-24 -right-6 max-w-2xl"
        />
      </figure>

      <figure className="tablet-pattern overflow-hidden pointer-events-none">
        <img
          src={BGTabletPattern}
          className="absolute -z-10 w-full max-w-2xl mx-auto -bottom-[90%] -left-[200px]"
        />
      </figure>

      <main>
        <section className="wrapper text-center py-24 grid gap-12 md:grid-cols-2 md:text-left">
          <article>
            <h2 className="text-3xl font-bold text-very-dark-blue mb-6 md:text-4xl">
              What's different about Manage?
            </h2>
            <p className="text-dark-grayish-blue">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for moder digital product
              teams
            </p>
          </article>

          <div className="grid gap-12">
            <article className="space-y-4 md:space-y-6">
              <p className="bg-very-pale-red rounded-l-full font-bold flex items-center md:bg-transparent">
                <span className="bg-bright-red text-white px-6 rounded-full py-2">
                  01
                </span>
                <span className="flex p-2">Track company-wide progress</span>
              </p>

              <p className="text-dark-grayish-blue text-left">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone all the way done to the
                smallest details. Never lost sight of the bigger picture again.{" "}
              </p>
            </article>

            <article className="space-y-4 md:space-y-6">
              <p className="bg-very-pale-red rounded-l-full font-bold flex items-center md:bg-transparent">
                <span className="bg-bright-red text-white px-6 rounded-full py-2">
                  02
                </span>
                <span className="flex p-2">Advanced built-in reports</span>
              </p>

              <p className="text-dark-grayish-blue text-left">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </article>

            <article className="space-y-4 md:space-y-6">
              <p className="bg-very-pale-red rounded-l-full font-bold flex items-center md:bg-transparent">
                <span className="bg-bright-red text-white px-6 rounded-full py-2">
                  03
                </span>
                <span className="flex p-2">
                  Everything you need in one place
                </span>
              </p>

              <p className="text-dark-grayish-blue text-left">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </article>
          </div>
        </section>

        <section className="wrapper text-center py-24 max-w-lg mx-auto md:max-w-xl">
          <h2 className="text-3xl font-bold text-very-dark-blue md:text-4xl">
            What they've said
          </h2>
          <div className="mt-24 mb-14">
            <article className="bg-very-light-gray pt-16 pb-12 px-4 relative">
              <img
                src={AvatarAli}
                className="absolute w-24 aspect-square -top-12 inset-x-0 mx-auto"
              />
              <h3 className="text-xl mb-4 pt-2 font-bold text-very-dark-blue">
                Ali Bravo
              </h3>
              <p className="text-dark-grayish-blue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </article>
          </div>

          <a
            href="#"
            className="button-mobile mx-auto shadow-xl shadow-bright-red/30 select-none"
          >
            Get Started
          </a>
        </section>

        <section className="bg-bright-red font-bold">
          <div className="wrapper py-24 text-center grid gap-6 md:grid-cols-[40%_40%] md:justify-between md:items-center md:text-left">
            <h2 className="text-4xl text-very-pale-red [text-shadow:1px_1px_3px_var(--tw-shadow-color)]  shadow-red-950">
              Simplify how your team works today.
            </h2>
            <a
              href="#"
              className="button-buttom md:mx-0 md:justify-self-end select-none"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-very-dark-blue py-24">
        <section className="wrapper grid gap-12 justify-items-center footer-area md:footer-area-md md:grid-cols-3 md:justify-items-stretch">
          <form className="flex gap-4 min-w-[100px] w-full [grid-area:form]">
            <input
              type="email"
              placeholder="Updates in your inbox..."
              className="min-w-[50px] flex-1 rounded-full px-4"
            />

            <input
              type="submit"
              value="Go"
              className="py-3 px-8 bg-bright-red rounded-full text-white cursor-pointer hover:bg-red-400 select-none"
            />
          </form>

          <nav className="grid grid-cols-[max-content_max-content] gap-y-4 justify-between text-white w-4/5 [grid-area:navigation] md:w-full">
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Products</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
            <a href="#">Privacy Policy</a>
          </nav>

          <div className="flex flex-wrap gap-4 justify-between w-full [grid-area:social-media]">
            <a href="#">
              <img src={IconFacebook} className="w-8 select-none" />
            </a>

            <a href="#">
              <img src={IconYoutube} className="w-8 select-none" />
            </a>

            <a href="#">
              <img src={IconTwitter} className="w-8 select-none" />
            </a>

            <a href="#">
              <img src={IconPinterest} className="w-8 select-none" />
            </a>

            <a href="#">
              <img src={IconInstagram} className="w-8 select-none" />
            </a>
          </div>

          <a href="#" className="[grid-area:logo]">
            <img src={LogoWhite} className="select-none" />
          </a>

          <p className="text-dark-grayish-blue text-center [grid-area:copyright] md:text-right">
            Copyright 2024. All Rights Reserved
          </p>
        </section>
      </footer>
    </div>
  );
}

export default Landing;
