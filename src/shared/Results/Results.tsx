import React from 'react';

import './Results.css';
import { useAppSelector } from '../../app/hooks';
import { selectStatus, selectWeather, WeatherState } from '../../state/weather/slice';
import Spinner from '../Spinner/Spinner';

function Results() {
  const weather = useAppSelector(selectWeather);
  const status = useAppSelector(selectStatus);

  const content = () => {
    switch(status){
      case 'idle': return <ResultDetails weather={weather} />;
      case 'loading': return <Spinner fast={true} />;
      default: return <Error />
    }
  };

  return (
    <div className="Results">
      {content()}
    </div>
  );
};

const ResultDetails = ({weather}: { weather: WeatherState['data'] | undefined }) => {
  return (
      <>
        <h1>
          {`Current weather for ${weather?.city}`}
        </h1>
        <p>
          {`Condition: ${weather?.description}`}
        </p>
        <p>
          {`Temperature: ${weather?.temperature.toFixed(1)}°F, Feels like ${weather?.temperature_feels_like.toFixed(1)}°F`}
        </p>
        <p>
          {`Wind: ${weather?.wind_direction} at ${weather?.wind_speed.toFixed(1)} MPH (Miles Per Hour)`}
        </p>
      </>
  );
};

const Error = () => {
  return (
    <>
      <h1>Oh No!</h1>
      <p className="error">
        Sorry. We were unable to access weather data for your location.
      </p>
      <p>
        Please try varying your search, such as including country code or replacing your city name with a zip code.
      </p>
      <p>
        If you continue to experience issues, please come back later and try again.
      </p>
    </>
  );
};

export default Results;
