import React from 'react';
import Logo  from "./Logo";
import Icons from "./Icons";
import ResponsiveAppBar from './ResponsiveAppBar';

const Header = () => {
  return (
    <header>
      <Logo/>
      <ResponsiveAppBar/>
      <Icons/>
    </header>
  )
}

export default Header;