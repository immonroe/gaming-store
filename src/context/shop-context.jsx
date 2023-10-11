import React, { createContext, useState, useContext, useEffect } from "react";
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import data from '../db/data.json';
import { firestore } from "../firebase/firebase";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= data.games.length; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    // Load cart data from localStorage (if available) or use the default cart
    const initialCart = JSON.parse(localStorage.getItem('cart')) || getDefaultCart();
    const [cartItems, setCartItems] = useState(initialCart);

    const addToCart = (itemId) => {
        const updatedCart = { ...cartItems, [itemId]: cartItems[itemId] + 1 };
        setCartItems(updatedCart);
        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (itemId) => {
        const updatedCart = { ...cartItems, [itemId]: 0 };
        setCartItems(updatedCart);
        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity >= 0) {
            const updatedCart = { ...cartItems, [itemId]: newQuantity };
            setCartItems(updatedCart);
            // Save the updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    };

    // This function updates the cart data in Firebase
    const updateCartInFirebase = (userId, cartData) => {
        const userCartRef = doc(collection(firestore, 'carts'), userId);

        setDoc(userCartRef, { cartData }, { merge: true })
            .then(() => {
                console.log('Cart data successfully updated in Firestore');
            })
            .catch((error) => {
                console.error('Error updating cart data: ', error);
            });
    };

    useEffect(() => {
        // Update the cart in Firebase when cartItems change
        // Replace 'your-user-id' with the actual user's ID
        updateCartInFirebase('your-user-id', cartItems);
    }, [cartItems]);

    const contextValue = { cartItems, addToCart, removeFromCart, updateQuantity };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
