import data from '../db/data.json'
import { Link } from 'react-router-dom';

function Store() {
  return (
    <div>
      <h1>Store Page</h1>
      {/* render dynamic list into JSX elements */}
      {data.games.map((games) => {
        return <li key={games.id}><Link to={`/store/${games.id}`}>{games.title}</Link></li>
      })}
    </div>
  );
}

export default Store;