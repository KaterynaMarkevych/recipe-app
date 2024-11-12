import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import RecipeContainerComponent from "./RecipeContainer";
import Footer from "./Footer";

const HomePage = () => {
    return(
        <>
        <Header/>
        <HeroSection/>
        <RecipeContainerComponent/>
        <AboutUs/>
        <Footer/>
        </>
    );
}
export default HomePage;