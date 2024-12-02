import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import RecipeContainerComponent from "./RecipeContainer";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";


const HomePage = () => {
    return(
        <>
        <Header/>
        <HeroSection/>
        <RecipeContainerComponent/>
        <AboutUs/>
        <Footer/>
        <FooterMobile/>
        </>
    );
}
export default HomePage;