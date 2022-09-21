import React from "react";
import { AboutUs } from "../components/aboutus/AboutUs";
import { Banner } from "../components/banner/Banner";
import { Carousel } from "../components/carousel/Carousel";
import { Combo } from "../components/combo/Combo";
import { Features } from "../components/features/Features";
import { Partner } from "../components/partner/Partner";
import { Products } from "../components/products/Product";
import { SocialMedia } from "../components/socialmedia/SocialMedia";

const Home = () => {
return (
    <>
        <Banner />
        <Products />
        <AboutUs />
        <Features />
        <Partner />
        <Combo />
        <Carousel />
        <SocialMedia />
    </>
);
};

export { Home };
