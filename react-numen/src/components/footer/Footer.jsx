import React from 'react';
import Logo from "./Logo.jsx";
import Links from "./Links.jsx";
import Copyright from "./Copyright.jsx";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <Logo />
      <Links />
      <Copyright />
    </footer>
  )
}

export default Footer;