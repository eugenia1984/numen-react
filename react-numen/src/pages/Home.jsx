import React from "react";
import { AboutUsPage } from "../components/aboutus/AboutUsPage";
import { Banner } from "../components/banner/Banner";
import { Carousel } from "../components/carousel/Carousel";
import { Combo } from "../components/combo/Combo";
import { Features } from "../components/features/Features";
import { Partner } from "../components/partner/Partner";
import { Products } from "../components/products/Products";
import { SocialMedia } from "../components/socialmedia/SocialMedia";

const Home = () => {
return (
    <>
        <Banner />
        <Products />
        <Features />
        <Partner />
        <Combo />
        <AboutUsPage/>
        <Carousel />
        <SocialMedia />
    </>
);
};

export { Home };
