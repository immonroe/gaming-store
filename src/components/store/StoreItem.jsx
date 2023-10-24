import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import data from '../../db/data.json';
import { ShopContext } from "../../context/shop-context";
import { Container, Row, Col, Image, Button } from 'react-bootstrap'; // Import React-Bootstrap components
import './Cards.module.css'

function StoreItem() {
  const { id } = useParams();
  const { addToCart } = useContext(ShopContext); // Get the addToCart function from your context

  // Find the game by ID in your data
  const game = data.games.find((game) => game.id === parseInt(id));

  if (!game) {
    return <div>Game not found</div>;
  }

  const handleAddToCart = () => {
    // Call the addToCart function with the game ID
    addToCart(game.id);
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Image src={game.imageUrl} alt={game.title} fluid />
        </Col>
        <Col className="pt-4" md={12}>
          <h2>{game.title}</h2>
          <p>Genre: {game.genre}</p>
          <p>Release Date: {game.releaseDate}</p>
          <p>Price: ${game.price.toFixed(2)}</p>
          <p>Description: {game.description}</p>
          <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default StoreItem;
