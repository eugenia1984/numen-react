import React from "react";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { Warning } from "../warning/Warning";
import { Icons } from "./Icons";


const Header = () => {
  return (
    <>
      <header>
       <Warning />
        <Logo />
        <Navbar />
        <Icons />
      </header>
    </>
  );
};

export { Header };