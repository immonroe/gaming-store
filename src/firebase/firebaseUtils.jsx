import { doc, setDoc, getFirestore, collection } from "firebase/firestore";

// Initialize Firestore
const firestore = getFirestore();

// This function updates the cart data in Firebase
export const updateCartInFirebase = (userId, cartData) => {
  const cartRef = doc(collection(firestore, 'carts'), userId);
  setDoc(cartRef, { cartData }, { merge: true });
};