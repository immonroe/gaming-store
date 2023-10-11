import React, { useState } from 'react';

function QuantityCounter({ quantity, onQuantityChange }) {
  const handleIncrement = () => onQuantityChange(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="quantity-counter">
      <button onClick={handleDecrement}>-</button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => onQuantityChange(parseInt(e.target.value))}
      />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default QuantityCounter;
