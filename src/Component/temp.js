import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import "./style.css"; // Make sure to import your CSS file

const Temp = () => {
  const [searchValue, setSearchValue] = useState("mumbai");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ff1ef04cdab37b9a3a93c884414cea08`;
      const response = await fetch(url);
      const data = await response.json();

      // Destructure the data
      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { country, sunrise, sunset } = data.sys;
      const { speed } = data.wind;

      // Create a clean object for state
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        country,
        speed,
        sunrise,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
      setSearchValue(""); // Clear the search input if desired
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch weather on initial render
    getWeatherInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="SearchButton" type="button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      <Weather tempInfo={tempInfo} />
    </>
  );
};

export default Temp;
