import React from 'react';
import { Link } from 'react-router-dom';

import './History.css';
import { useAppSelector } from '../../app/hooks';
import { selectHistory } from '../../state/locations/slice';

function History() {
  const locationHistory = useAppSelector(selectHistory);

  return (
    <div className="History">
      <h2>Search History</h2>
      {locationHistory.map(LocationLink)}
    </div>
  );
};

const LocationLink = (location: string, index: number) => {
  return (
    <Link to={`/search?s=${location}`} key={index}>
      <p>{`${location}`}</p>
    </Link>
  );
};

export default History;