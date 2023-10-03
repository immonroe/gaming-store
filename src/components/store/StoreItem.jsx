// import React from "react";
import { useParams } from "react-router-dom";
import data from '../../db/data.json'

function StoreItem() {
  const { id } = useParams();

  // Find the game by ID in your data
  const game = data.games.find((game) => game.id === parseInt(id));

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="store-item">
      <img src={game.imageUrl} alt={game.title} />
      <h2>{game.title}</h2>
      <p>Genre: {game.genre}</p>
      <p>Release Date: {game.releaseDate}</p>
      <p>Price: ${game.price.toFixed(2)}</p>
      <p>Description: {game.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default StoreItem;