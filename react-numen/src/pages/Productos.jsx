import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardsProducts from "../components/products/CardsProducts";
//import ImgMediaCard from "../components/products/ImgMediaCard";

const Productos = () => {
  return (
    <Container>
      <Box
        sx={{
          display: {
            xs: "flex",
            justifyContent: "center",
            gap: 50,
            flexWrap: "wrap",
          },
        }}
      >
        <CardsProducts sx={{
          display: {
            xs: "flex",
            justifyContent: "center",
            gap: 50,
            flexWrap: "wrap",
          },
        }} />
        
      </Box>
    </Container>
  );
};

export default Productos;
