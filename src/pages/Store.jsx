import data from '../db/data.json'

function Store() {
  return (
    <div>
      <h1>Store Page</h1>
      {/* render dynamic list into JSX elements */}
      {data.games.map((games) => {
        return <li key={games.id}>{games.title}</li>
      })}
    </div>
  );
}

export default Store;