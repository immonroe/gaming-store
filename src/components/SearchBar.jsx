import { useState, useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import data from '../db/data.json';
import { ImSearch } from "react-icons/im";
import '../components/SearchBar.module.css';
import { Link } from 'react-router-dom';

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
      <input
        id="searchInput"
        type="text"
        placeholder="Search for a game..."
        // Remove the onChange attribute
      />
      <ul className="search-results">
        {searchResults.map((game) => (
          <li key={game.id}>
            <Link to={`/product/${game.id}`}>{game.title}</Link>
          </li>
        ))}
      </ul>
      <button>
        <ImSearch />
      </button>
    </div>
  );
};

export default SearchBar;
