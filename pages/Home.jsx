import React from "react"
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Fragrance from "../components/Fragrance";
import Perfume from "../components/Perfume";
import Footer from "../components/Footer";
import BrandCarousel from "../components/BrandsCarousel";

function Home() {
    return(
        <div className="homePage">
            <Header />
            <Hero />
            <About />
            <Fragrance />
            <Perfume />
            <BrandCarousel />
            <Footer />
        </div>
    )
}

export default Home;