import React from "react";
import Link from '@mui/material/Link';
import "./Footer.css";

const Links = () => {
  return (
    <>
      <Link 
        component="button"
        variant="body2"
        className="main-footer-link"
      >
        Home
      </Link>
      <Link 
        component="button"
        variant="body2"
        className="main-footer-link"
      >
        Productos
      </Link>
      <Link 
        component="button"
        variant="body2"
        className="main-footer-link"
      >
        About Us
      </Link>
    </>
  );
};

export default Links;