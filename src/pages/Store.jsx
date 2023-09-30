import { Container } from 'react-bootstrap';
import Cards from '../components/store/Cards';
import data from '../db/data.json'
import { Link } from 'react-router-dom';

// Styling
import classes from '../pages/Store.module.css'

function Store() {
  return (
    <div>
      <h1>Store Page</h1>
      {/* render dynamic list into JSX elements */}
      {/* {data.games.map((games) => {
        return <li key={games.id}><Link to={`/store/${games.id}`}>{games.title}</Link></li>
      })} */}
      <Container className={classes.storeContainer}>
        <Cards />
      </Container>
    </div>
  );
}

export default Store;