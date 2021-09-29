import React from 'react';
import './Search.css';
import SearchBar from '../../shared/SearchBar/SearchBar';
import NavBar from '../../shared/NavBar/NavBar';
import History from '../../shared/History/History';
import Results from '../../shared/Results/Results';

function Search() {
  return (
    <div className="Search">
      <NavBar />
      <SearchBar />
      <Results />
      <History />
    </div>
  );
}

export default Search;
