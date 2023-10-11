import React, { useContext } from 'react';
import data from '../../db/data.json'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';
// import { cartItems } from '../../components/cart-item'




function Cart() {

  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1 className="d-flex justify-content-center mb-4">Cart</h1>
      </div>
      <div className="cartItems">
        {Object.keys(cartItems).map((itemId) => {
          const quantity = cartItems[itemId];
          if (quantity > 0) {
            const game = data.games.find((g) => g.id === parseInt(itemId));
            return (
              <div key={game.id} className="cart-item">
                <Link to={`/${game.id}`} className="text-decoration-none">
                  <h2>{game.title}</h2>
                </Link>
                <p>Quantity: {quantity}</p>
                {/* Add a button to remove the item from the cart */}
                <button onClick={() => removeFromCart(game.id)}>Remove</button>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
  }
  
  export default Cart;