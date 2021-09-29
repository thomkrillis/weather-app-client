import React from 'react';
import './Home.css';
import SearchBar from '../../shared/SearchBar/SearchBar';
import Spinner from '../../shared/Spinner/Spinner';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <Spinner />
        <h1>Anemoi: Find Your Weather</h1>
        <SearchBar />
      </header>
    </div>
  );
}

export default Home;
