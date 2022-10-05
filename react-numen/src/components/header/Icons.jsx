import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";

const Icons = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" }, m: 1, gap: 1 }}>
      <AddShoppingCartIcon  color="secondary" />
      <SupervisedUserCircleIcon color="secondary"/>
      <SearchIcon color="secondary"/>
    </Box>
  );
};

export default Icons;
