import React from 'react';
import './Search.css';
import SearchBar from '../../shared/SearchBar/SearchBar';
import NavBar from '../../shared/NavBar/NavBar';
import History from '../../shared/History/History';

function Search() {
  return (
    <div className="Search">
      <NavBar />
      <SearchBar />
      <p>
        Results here
      </p>
      <History />
    </div>
  );
}

export default Search;
