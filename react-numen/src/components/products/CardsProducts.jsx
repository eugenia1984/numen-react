import React, { useState, useEffect } from "react";
import axios from "axios";
import ImgMediaCard from "./ImgMediaCard";
import { Box } from "@mui/material";
import "./Products.css";

const CardsProducts = () => {
  const [tipo, settipo] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/cardsP")
      .then(res => settipo(res.data)
    );
  }, [])

  return (
    <Box sx={{display:"flex", gap:5, flexWrap:" wrap", justifyContent:"center", alignItems:"center"}} >
      {tipo && tipo.map((item) => (
        <ImgMediaCard 
          image={item.image}
          name={item.name}
          descrption={item.descrption}
          price={item.price}
        />
      ))}
    </Box>
  );
};

export default CardsProducts;