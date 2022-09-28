import React from "react";

import { Box, IconButton, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

const SocialMedia = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: "column", justifyContent:"center",textAlign:"center" , p:2, gap: 3,  height: 200, width: '100%', bgcolor:"primary.main",  color:"white", fontFamily: "sans-serif",
    fontWeight: 900,
    letterSpacing: ".1rem",}}
    
    >
    
        <Typography variant="h6" color="white" >Social Media Dev.Passion</Typography>
     
   
    <div> 
          <IconButton color="secondary" aria-label="">
        <FacebookIcon />
        </IconButton>

        <IconButton color="secondary" aria-label="">
         <InstagramIcon />
        </IconButton>

       
        <IconButton color="secondary" aria-label="">
        <TwitterIcon />
        </IconButton>

        <IconButton color="secondary" aria-label="">
        <WhatsAppIcon />
        </IconButton>

        <IconButton color="secondary" aria-label="">
        <TelegramIcon />
        </IconButton>

       

      
        
      

     
        
      

      
        
      
      </div>
  </Box>
  );
};

export default SocialMedia;
