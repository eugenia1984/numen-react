import React from "react";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
    </>
  );
};

export { Header };