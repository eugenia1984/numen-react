import React from 'react';
import Logo  from "./Logo";
import Icons from "./Icons";
import ResponsiveAppBar from './ResponsiveAppBar';




const Header = () => {
  return (
    <>
      <Logo/>
      <ResponsiveAppBar/>
      <Icons/>
    </>
  )
}

export default Header;