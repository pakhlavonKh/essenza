import React from "react"
import Hero from "../components/Hero";
import About from "../components/About";
import Fragrance from "../components/Fragrance";
import Perfume from "../components/Perfume";
import BrandCarousel from "../components/BrandsCarousel";

function Home() {
    return(
        <div className="homePage">
            <Hero />
            <About />
            <Fragrance />
            <Perfume />
            <BrandCarousel />
        </div>
    )
}

export default Home;