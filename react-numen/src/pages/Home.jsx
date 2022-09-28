import React from "react";
import { AboutUsPage } from "../components/aboutus/AboutUsPage";
import { Banner } from "../components/banner/Banner";
import { Carousel } from "../components/carousel/Carousel";
import { Features } from "../components/features/Features";
import { Partner } from "../components/partner/Partner";
import { Products } from "../components/products/Products";
import { SocialMedia } from "../components/socialmedia/SocialMedia";
import  Contacto from "./Contacto";
const Home = () => {
return (
    <>
        <Banner />
        <Products />
        <Features id={1}/>
        <Partner />
        <Features id={2}/>
        <AboutUsPage/>
        <Carousel />
        <SocialMedia />
    </>
);
};

export default Home ;
