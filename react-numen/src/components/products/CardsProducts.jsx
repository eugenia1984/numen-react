import React, { useState, useEffect } from "react";
import axios from "axios";
import ImgMediaCard from "./ImgMediaCard";
import imgCloud from "./img_products/cloud.jpg";
import imgDomain from "./img_products/domain.jpg";
import imgHosting from "./img_products/hosting.jpg";
import imgWeb from "./img_products/web.jpg";
import { Box } from "@mui/material";

const cards= [
  {
    id: 1,
    image: imgCloud,
    name: "Cloud_Dev.Passion",
    description:
      "Almacena y tranfiere tus datos en cualquier momento. Simple, rapido y seguro. ",
    price: "$300 (Pesos Argentinos)",
  },
  {
    id: 2,
    image: imgDomain,
    name: "Domain.Passion",
    description:
      ".com es el dominio mas usado en el mundo. es ideal para sitios web, aplicaciones web, y mucho mas",
    price: "$1390 (Pesos Argentinos)",
  },
  {
    id: 3,
    image: imgHosting,
    name: "Hosting_Dev.Passion",
    description: "Hosting para proyectos chicos, medianos y grandes; desde:",
    price: "$1490 (Pesos Argentinos)",
  },
  {
    id: 4,
    image: imgWeb,
    name: "Web_Dev.Passion",
    description: "Un sitio web a tu medida, a la altura de tus proyectos desde:",
    price: "$1590 (Pesos Argentinos)",
  },
]

const CardsProducts = () => {
  const [tipo, settipo] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/cardsP").then(res =>
      settipo(res.data)
    );
  }, [])

  return (
    <Box >
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
