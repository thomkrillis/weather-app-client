import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {
  const history = useHistory();
  const [term, setTerm] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    history.push(`/search?s=${term}`)
    event.preventDefault()
  };

  return (
    <div className="Search-bar">
      <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="location">
          <span className="visually-hidden">Location (e.g. Bronx, NY)</span>
        </label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          id="location"
          placeholder="Location (e.g. Bronx, NY)"
        />
        <input
          type="submit"
          id="submit"
          value=""
        />
      </form>
    </div>
  );
}

export default SearchBar;
