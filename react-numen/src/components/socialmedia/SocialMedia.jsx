import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        p: 2,
        gap: 3,
        height: 200,
        width: "100%",
        bgcolor: "primary.main",
        color: "white",
        fontFamily: "sans-serif",
        fontWeight: 900,
        letterSpacing: ".1rem",
      }}
    >
      <Typography variant="h4" color="white">
        Social Media Dev.Passion
      </Typography>
      <div>
        <IconButton color="secondary" aria-label="">
          <FacebookIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton color="secondary" aria-label="">
          <InstagramIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton color="secondary" aria-label="">
          <TwitterIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton color="secondary" aria-label="">
          <WhatsAppIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton color="secondary" aria-label="">
          <TelegramIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </div>
    </Box>
  );
};

export  {SocialMedia};
