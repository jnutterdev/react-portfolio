import React from "react";
import { HereoSm, HeroMd, HeroLg } from '../../assets/'

function Home() {
    return (
        <div className="border-black border-x-2">
            
            <section>
                <div className="container mx-auto gap-8 px-4 flex flex-col md:flex-row">
                    <div className="md:flex-1 md:order-2">
                        <picture>
                            <source srcSet={HeroSm} width='363' height='222' media='(max-width: 400px)' type="image/jpg" />
                            <source srcSet={HeroMd} width='363' height='222' media='(max-width: 400px)' type="image/jpg" />
                            <img src={HeroLg} alt="hero image" width='870' height='532' alt='working hard on a computer' />
                        </picture>
                    </div>
                    <div className="md:flex-1">Text</div>
                </div>
            </section>

        </div>
    )
}

export default Home