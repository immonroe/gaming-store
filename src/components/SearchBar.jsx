import { useState, useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import data from '../db/data.json';
import { ImSearch } from "react-icons/im";
import '../components/SearchBar.module.css'


const SearchBar = () => {
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    const searchInput = document.getElementById('searchInput');
    
    const searchInputObservable = fromEvent(searchInput, 'input').pipe(
      map((event) => event.target.value),
      debounceTime(300),
      distinctUntilChanged()
    );

    const subscription = searchInputObservable.subscribe(query => {
        
      const filteredResults = data.games.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );

        setSearchResults(query === '' ? [] : filteredResults);
    });

    return () => subscription.unsubscribe();

  }, []);

 

  return (

    <div className='searchContainer'>
      <input
        id="searchInput"
        type="text"
        placeholder="Search for games..."
      />
      <ul>
        {searchResults.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button><ImSearch /></button>
    </div>
  );
};

export default SearchBar;
