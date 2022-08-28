import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";

const Icons = () => {
  return (
   <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, m: 1 }}>
      <AddShoppingCartIcon/>
      <SupervisedUserCircleIcon />
      <SearchIcon/>
    </Box>
  );
};

export default Icons;
