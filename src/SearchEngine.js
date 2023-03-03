import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState(null);

  function showWeather(response) {
    let temp = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
    let icon = response.data.weather[0].icon;
    let image = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    setMessage(
      <ul>
        <li>{city}</li>
        <li>Temperature: {temp}ºC</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind} km/h</li>
        <li>
          <img alt={description} src={image} />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=695ea21f19f26ecd9bc4ce42561bc89a&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showCity(event) {
    setCity(event.target.value);
  }

  let searchBox = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city..." onChange={showCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (city) {
    return (
      <div className="Search">
        {searchBox}
        {message}
      </div>
    );
  } else {
    return <div className="Search">{searchBox}</div>;
  }
}
