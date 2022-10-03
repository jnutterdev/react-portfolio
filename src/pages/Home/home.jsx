import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { HeroLg, PortfolioPattern } from "../../assets/";
import { portfolioData } from "../../data";

function Home() {
  return (
    <div className="border-black border-x-2">
      <section className="py-10 lg:py-36 xl:py-48">
        <div
          className="container mx-auto gap-8 px-4 flex flex-col md:flex-row
        items-center">
          <div className="md:flex-1 md:order-2 max-w-full">
            <picture className="flex from-left nes-balloon ">
              <img
                className="shrink"
                src={HeroLg}
                width="870"
                height="532"
                alt="Me working hard on a computer"
              />
            </picture>
          </div>
          <div className="md:flex-1">
            <h2 className="text-lg md:text-xl font-bold uppercase">
              Hi 👋 I'm John.
            </h2>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              software engineer<span className="text-yellow-400">.</span>
              <br />
              radical dude<span className="text-violet-900">.</span>
            </h1>

            <p className="text-lg max-w-xl mb-6">
              I create digital products and services to help brands,
              organizations, and entrepreneurs get the most out of their
              websites.
            </p>

            <div className="flex items-baseline gap-4">
              <HashLink
                to="#work"
                className="px-6 py-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white"
              >
                Selected work
              </HashLink>

              <Link
                to="/contact"
                className="px-6 py-4 rounded-md text-black flex gap-2"
              >
                Let's talk
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="px-4 pb-12 border-black border-t-2 bg-teal-600 bg-fixed"
        style={{ backgroundImage: "url(" + PortfolioPattern + ")" }}
      >
        <div
          className="container mx-
            auto"
        >
          <div className="text-white text-center py-12">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Selected work
            </h1>
            <p className="max-w-xl mx-auto text-lg">
              I've been developing websites since 1998, but also enjoy being
              radical.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-28">
            {portfolioData.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="md:even:pt-12 ease-in-out duration-75 hover:translate-y-[-4px] hover:drop-shadow-[10px_8px_0_rgba(0,0,0,1)]"
              >
                <div className="border-2 border-black rounded-xl overflow-hidden bg-black">
                  <img src={item.thumbnail} alt={item.alt} loading="lazy" />
                </div>

                <div className="bg-white border-x-2 border-black border-b-2 rounded-b-xl mx-4 p-4 text-lg flex justify-between gap-4 items-center">
                  <div>
                    <span className="font-bold  ">{item.title} </span>
                    <span className="text-zinc-400">
                      &#9679; {item.category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          <Link
            to={"/work"}
            className="flex gap-4 font-bold text-white justify-center mb-8 text-xl"
          >
            View all work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section className="border-black border-t-2 px-4 py-12">
        <div className="container mx-auto">
          <div className="text-center py-12">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Services
            </h1>
            <p className="max-w-xl mx-auto text-lg">
              I've been developing websites since 1998, but also enjoy being
              radical.
            </p>
          </div>

          <div className="text-black py-12 grid lg:grid-cols-4 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">web design</h3>
              <p className="mb-4 text-lg">
                I've been developing websites since 1998, but also enjoy being
                radical.
              </p>

              <Link
                to={"/web-design"}
                className="flex gap-2 items-center font-bold mb-14 text-lg"
              ></Link>
            </div>
            <div className="flex justify-center mb-12 md:mb-0 col-span-2">
              image
            </div>
            <div>right</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
