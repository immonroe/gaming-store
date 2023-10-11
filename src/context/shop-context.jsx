import React, { createContext, useState } from "react"
import data from '../db/data.json'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i=1; i < data.games.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
  
    const addToCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
  
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 })); // Set quantity to 0 to remove all items
    };
  
    const updateQuantity = (itemId, newQuantity) => {
      if (newQuantity >= 0) {
        setCartItems((prev) => ({ ...prev, [itemId]: parseInt(newQuantity) }));
      }
    };
  
    const contextValue = { cartItems, addToCart, removeFromCart, updateQuantity };
    console.log(cartItems)
    return (
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    );
  };
  