import React from "react";
import { Features } from "../components/features/Features";
import { Banner } from "../components/banner/Banner"
import { Products } from "../components/products/Products";
import { AboutUs } from "../components/aboutus/AboutUs";
import { Partner } from "../components/partner/Partner";
import { Combo } from "../components/combo/Combo";
import { Carousel } from "../components/carousel/Carousel";
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