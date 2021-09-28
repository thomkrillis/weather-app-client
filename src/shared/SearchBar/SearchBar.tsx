import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { increment, selectCurrent } from '../../state/locations/slice';
import './SearchBar.css';

function SearchBar() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const location = useLocation();
  const current = useAppSelector(selectCurrent);

  const currentSearch = getCurrentTerm(location.search) || current;
  const [term, setTerm] = useState(currentSearch);

  useEffect(() => {
    const currentTerm = getCurrentTerm(location.search);
    if (currentTerm) {
      setTerm(currentTerm);
      dispatch(increment(currentTerm));
    }
  }, [location, dispatch]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(`/search?s=${term}`);
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
};

const getCurrentTerm = (search: string): string => {
  const keyValueMap = extractSearchTerms(search);
  return keyValueMap.s;
};

const extractSearchTerms = (search: string): Record<string, string> => {
  const keyValueMap: Record<string, string>  = {};
  const keyValues = search.slice(1, search.length).split('&');

  keyValues.forEach(keyValueString => {
    var keyValueArray = keyValueString.split('=');
    if (keyValueArray.length > 1) {
      const key = decode(keyValueArray[0]);
      const value = decode(keyValueArray[1]);
      keyValueMap[key] = value;
    }
  });

  return keyValueMap;
};

const decode = (s: string): string => {
  return decodeURIComponent(s.replace(/\+/g, " "));
};

export default SearchBar;
