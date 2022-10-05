import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardUser({img,name,ocupacion}) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          display= "flex"
          image={img}
          alt="fotoAU"
        />
        <CardContent className='cardstyle'>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ocupacion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
