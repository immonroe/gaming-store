import React, { useContext } from 'react';
import data from '../db/data.json'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import { CartItem } from '../components/cart-item'




function Cart() {

  // const { cartItems } = useContext(ShopContext);

    return (
      <div className="cart">
        <div>
        <h1 className="d-flex justify-content-center mb-4">Cart</h1>
        </div>
        <div className="cartItems">
      {data.games.map((games) => {
        if (cartItems[games.id] !== 0) {
          return <cartItem key={data.games} />;
        }
      })}
        </div>
      </div>
    );
  }
  
  export default Cart;