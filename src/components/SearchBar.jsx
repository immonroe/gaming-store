import { useState, useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import data from '../db/data.json';
import '../components/SearchBar.module.css';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';


const SearchBar = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchInput = document.getElementById('searchInput');

    const searchInputObservable = fromEvent(searchInput, 'input').pipe(
      map((event) => event.target.value),
      debounceTime(300),
      distinctUntilChanged()
    );

    const subscription = searchInputObservable.subscribe((query) => {
      const filteredResults = data.games.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(query === '' ? [] : filteredResults);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="searchContainer">

      <Form className="d-flex">
        <Form.Control 
          type="text" 
          placeholder="Normal text"
          className="me-2"
          aria-label="Search" />
          <ul className="search-results">
            {searchResults.map((game) => (
              <li key={game.id}>
                <Link to={`/store/${game.id}`}>{game.title}</Link>
              </li>
            ))}
          </ul>
          <Button variant="outline-dark">Search</Button>
      </Form>
    </div>
  );
};

export default SearchBar;
