import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';





export default function ImgMediaCard({image,name,description,price} ) {
  return (
   <Box sx={{mb:2}}>
  
    <Card sx={{ maxWidth: 345} }>
 
      <CardMedia
        component="img"
        alt=""
        height="140"
        image={image}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
    </Card>
   
</Box>
  );
}
