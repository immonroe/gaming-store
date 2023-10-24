import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { Link } from 'react-router-dom';
import QuantityCounter from '../../components/QuantityCounter';
import data from '../../db/data.json';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'; // Import React-Bootstrap components

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(ShopContext);

  // Calculate the total price of all items in the cart
  const totalPrice = Object.keys(cartItems).reduce((total, itemId) => {
    const game = data.games.find((g) => g.id === parseInt(itemId));
    return total + game.price * cartItems[itemId];
  }, 0);

  // Check if the cart is empty
  const isCartEmpty = Object.values(cartItems).every((quantity) => quantity === 0);

  return (
    <Container>
      <h1 className="text-center mt-4">Cart</h1>
      {isCartEmpty ? (
        <p className="text-center">You do not have any items in your cart.</p>
      ) : (
        Object.keys(cartItems).map((itemId) => {
          const quantity = cartItems[itemId];
          if (quantity > 0) {
            const game = data.games.find((g) => g.id === parseInt(itemId));
            const subtotal = game.price * quantity;

            return (
              <Row key={game.id} className="cart-item mb-3">
                <Col md={3}>
                  <Link to={`/${game.id}`}>
                    <Image src={game.imageUrl} alt={game.title} thumbnail />
                  </Link>
                </Col>
                <Col md={6}>
                  <h2>
                    <Link to={`/${game.id}`} className="text-decoration-none">
                      {game.title}
                    </Link>
                  </h2>
                  <p>Price: ${game.price.toFixed(2)}</p>
                  <QuantityCounter
                    quantity={quantity}
                    onQuantityChange={(newQuantity) => updateQuantity(game.id, newQuantity)}
                  />
                </Col>
                <Col md={3} className="text-center">
                  <p>Subtotal: ${subtotal.toFixed(2)}</p>
                  <Button variant="danger" onClick={() => removeFromCart(game.id)}>
                    Remove
                  </Button>
                </Col>
              </Row>
            );
          }
          return null;
        })
      )}
      {isCartEmpty ? null : (
        <div className="total-price text-center mt-3">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </Container>
  );
}

export default Cart;
