import React from 'react';
import './Home.css';
import logo from '../../assets/images/logo.svg';
import SearchBar from '../../shared/SearchBar/SearchBar';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1>Anemoi: Find Your Weather</h1>
        <SearchBar />
      </header>
    </div>
  );
}

export default Home;
