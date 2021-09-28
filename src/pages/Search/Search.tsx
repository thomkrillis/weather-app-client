import React from 'react';
import './Search.css';
import SearchBar from '../../shared/SearchBar/SearchBar';
import NavBar from '../../shared/NavBar/NavBar';

function Search() {
  return (
    <div className="Search">
      <NavBar />
      <SearchBar />
      <p>
        Results here
      </p>
    </div>
  );
}

export default Search;
