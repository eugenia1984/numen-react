import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ImgMediaCard from "../components/products/ImgMediaCard";

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
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </Box>
    </Container>
  );
};

export default Productos;
