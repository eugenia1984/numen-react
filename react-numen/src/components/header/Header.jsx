import React from 'react';
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { Icons } from "./Icons";

const Header = () => {
  return (
    <>
      <Logo />
      <Navbar />
      <Icons />
    </>
  )
}

export {Header};