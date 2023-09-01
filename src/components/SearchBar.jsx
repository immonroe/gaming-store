import React, { useState, useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import data from '../db/data'; // Import your data

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
      const filteredResults = data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    });

    return () => subscription.unsubscribe(); // Clean up subscription

  }, []);

  return (
    <div>
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
    </div>
  );
};

export default SearchBar;
