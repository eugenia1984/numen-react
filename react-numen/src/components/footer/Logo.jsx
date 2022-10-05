import React from "react";
import Typography from "@mui/material/Typography";
import "./Footer.css";

const Logo = () => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "sans-serif",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "#99e6fa",
          textDecoration: "none",         
        }}
        className="main-footer-logo"
      >
        DEV.PASSION
      </Typography>

      <Typography
        variant="h6"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "sans-serif",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "#99e6fa",
          textDecoration: "none",
        }}
        className="main-footer-logo"
      >
        DEV.PASSION
      </Typography>
    </>
  );
};

export default Logo;