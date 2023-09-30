import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// Database
import data from '../../db/data.json'

// Styling
import classes from '../store/Cards.module.css'

function Cards() {
  return (
    <div>
      {data.games.map((game) => (
        <Card key={game.id} sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={game.imageUrl} title={game.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {game.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {game.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.cartContainer}>
            <Button size="small">Add to Cart</Button>
            <Typography variant="body2" color="text.primary">
              Price: ${game.price.toFixed(2)}
            </Typography>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Cards;


