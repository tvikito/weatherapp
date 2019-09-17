import React, { useEffect } from 'react';

import Loading from './Loading';
import Error from './Error';
import WeatherForm from './WeatherForm';
import WheatherData from "./WeatherData";

import useFetch from '../customHooks/useFetch';

function Weather() {
  const location = useFetch();
  const weather = useFetch();

  function handleFormSubmit(inputValue) {
    const city = encodeURIComponent(inputValue);

    location.clear();
    weather.clear();
    weather.fetchUrl(`/api/weather?city=${city}`);
  }

  useEffect(() => {
    location.fetchUrl('/api/current-location')
      .then(res => weather.fetchUrl(`/api/weather?city=${res.city}&country=${res.country_code}`))
      .catch(err => console.log('Promise rejected with error', err))
  }, [])
  
  if (weather.error || location.error) {
    const error = weather.error ? weather.error : location.error;
    
    return (
      <div>
        <Error error={error} />
        <WeatherForm onFormSubmit={handleFormSubmit} />
      </div>
    );
  } else if (weather.loading || location.loading) {
    return <Loading src="/spinner.svg" alt="Loading"/>
  } else if (!weather.data) {
    return '';
  } else {
    return (
      <div>
        <WheatherData weather={weather} />
        <WeatherForm onFormSubmit={handleFormSubmit}/>
      </div>
    ); 
  }
}

export default Weather;
