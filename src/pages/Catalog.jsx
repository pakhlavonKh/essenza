import React from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import CatalogItems from "../components/CatalogItems";

function Catalog() {
    return(
        <div className="homePage">
            <Header />
            <CatalogItems />
            <Footer />
        </div>
    )
}

export default Catalog;