import React from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { HeroSm, HeroMd, HeroLg, PortfolioPattern } from '../../assets/'
import Scroller from "../../components/scroller";

function Home() {
    return (
        <div className="border-black border-x-2">
            
            <section className='py-10 lg:py-36 xl:py-48'>
            <div className='container mx-auto gap-8 px-4 flex flex-col md:flex-row
        items-center
      '>
          <div className='md:flex-1 md:order-2'>

                    <picture className='flex drop-shadow-[10px_-10px_0_rgba(250,204,21,1)]
              border-black rounded-tl-[150px] rounded-br-[150px]
              rounded-xl overflow-hidden 
            '>

              <source srcSet={HeroSm} width='363' height='222' 
              media='(max-width: 400px)' type='image/jpg' />
              <source srcSet={HeroMd} width='608' height='372' 
              media='(max-width: 400px)' type='image/jpg' />
              <img src={HeroLg} width='870' height='532' alt="Me working hard on a computer"/>

                        </picture>
                    </div>
                    <div className="md:flex-1">

                        <h2 className="text-lg md:text-xl font-bold uppercase">Hi 👋 I'm John.</h2>
                        <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
                            software engineer<span className="text-yellow-400">.</span><br />
                            radical dude<span className="text-violet-900">.</span>
                        </h1>

                        <p className="text-lg max-w-xl mb-6">I create digital products and services to help brands, organizations, and entrepreneurs get the most out of their websites.
                            </p>

                        <div className="flex items-baseline gap-4">
                            <HashLink to='#work' className="px-6 py-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white">Selected work</HashLink>

                            <Link to='/contact' className="px-6 py-4 rounded-md text-black flex gap-2">
                                    Let's talk
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
                                    </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Scroller 
                text={"★ Let's get to work! ★ Have a project in mind? ★ Let's get to work! ★ Have a project in mind? "}
                link="/contact"
            />

        <section id="work" className="px-4 pb-12 border-black border-t-2 bg-teal-600 bg-fixed" style={{ backgroundImage: "url(" + PortfolioPattern + ")" }}>
            
            <div className="container mx-auto">

                <div className="text-white text-center py-12">
                    <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
                        Selected work
                    </h1>
                    <p className="max-w-xl mx-auto text-lg">
                        I've been developing websites since 1998, but also enjoy being radical.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-28">
                    
                </div>

            </div>

        </section>

        <section className="py-48"></section>


        </div>
    )
}

export default Home