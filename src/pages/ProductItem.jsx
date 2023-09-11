// import React from "react";
import { useParams } from "react-router-dom";
import data from '../db/data.json'

function ProductItem() {
  const { id } = useParams();

  // Find the game by ID in your data
  const game = data.games.find((game) => game.id === parseInt(id));

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="product-item">
      <h2>{game.title}</h2>
      <p>Genre: {game.genre}</p>
      <p>Release Date: {game.releaseDate}</p>
      <p>Price: ${game.price.toFixed(2)}</p>
      <p>Description: {game.description}</p>
      <img src={game.imageUrl} alt={game.title} />
    </div>
  );
}

export default ProductItem;
