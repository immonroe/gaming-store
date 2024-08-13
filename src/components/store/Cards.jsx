import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ShopContext } from '../../context/shop-context';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from '../../db/data.json';
import classes from '../store/Cards.module.css';

function Cards() {
  const maxCardHeight = '380px'; // Adjust this value to your desired fixed height

  const {addToCart, cartItems } = useContext(ShopContext)
  const cartItemAmount = cartItems[data.games.id]

  const notify = () => toast("Game added to cart!");

  return (
    <Container>
      <Row xs={1} md={2} lg={3} gap={1}>
        {data.games.map((game) => (
          <Col key={game.id} className="mb-4">
            <Link to={`/${game.id}`} className="text-decoration-none"> {/* Wrap Card with Link */}
              <Card className={classes.card}
                sx={{
                  maxWidth: 345,
                  height: maxCardHeight,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia sx={{ height: 180 }} image={game.imageUrl} title={game.title} />
                <CardContent
                  style={{
                    flex: '1',
                    overflow: 'hidden',
                    maxHeight: `calc(${maxCardHeight} - 180px)`,
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {game.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {game.description}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cartContainer}>
                <Button
                  size="small"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the link from navigating
                    addToCart(game.id);
                  }}
                >
                  Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </Button>
                  <Typography variant="body2" color="text.primary">
                    Price: ${game.price.toFixed(2)}
                  </Typography>
                </CardActions>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
