import React from 'react';
import styled from 'styled-components';
import HeaderText from './styled/Heading';
import Image from './styled/Image';

const WeatherTemp = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: #f37021;
`

const WeatherData = ({ weather }) => {
  return (
    <div>
      <HeaderText>{weather.data.name}</HeaderText>
      <WeatherTemp>{Math.round(weather.data.main.temp)}°C</WeatherTemp>
      <Image src={`http://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} alt={weather.data.weather[0].main} />
    </div>
  );
}

export default WeatherData;