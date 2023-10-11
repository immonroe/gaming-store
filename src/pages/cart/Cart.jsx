import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { Link } from 'react-router-dom';
import QuantityCounter from '../../components/QuantityCounter';
import data from '../../db/data.json'

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
    <div className="cart d-flex flex-column">
      <div>
        <h1 className="d-flex justify-content-center mb-4">Cart</h1>
      </div>
      <div className="cartItems">
        {isCartEmpty ? (
          <p className='d-flex justify-content-center'>You do not have any items in your cart.</p>
        ) : (
          Object.keys(cartItems).map((itemId) => {
            const quantity = cartItems[itemId];
            if (quantity > 0) {
              const game = data.games.find((g) => g.id === parseInt(itemId));
              const subtotal = game.price * quantity;

              return (
                <div key={game.id} className="cart-item">
                  <Link to={`/${game.id}`} className="text-decoration-none">
                    <h2>{game.title}</h2>
                  </Link>
                  <p>Price: ${game.price.toFixed(2)}</p>
                  <QuantityCounter
                    quantity={quantity}
                    onQuantityChange={(newQuantity) => updateQuantity(game.id, newQuantity)}
                  />
                  <p>Subtotal: ${subtotal.toFixed(2)}</p>
                  <button onClick={() => removeFromCart(game.id)}>Remove</button>
                </div>
              );
            }
            return null;
          })
        )}
      </div>
      {isCartEmpty ? null : (
        <div className="total-price">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
