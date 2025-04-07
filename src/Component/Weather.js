import React from "react";

const Weather = ({ tempInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    country,
    speed,
    sunrise,
    sunset,
  } = tempInfo;

  // Convert sunrise and sunset timestamps (if they exist) to local time
  const sunriseTime = sunrise ? new Date(sunrise * 1000).toLocaleTimeString() : "N/A";
  const sunsetTime = sunset ? new Date(sunset * 1000).toLocaleTimeString() : "N/A";

  return (
    <article className="widget">
      <div className="weatherIcon">
        {/* Example icon (requires the Weather Icons library or a similar icon set) */}
        <i className="wi wi-day-sunny"></i>
      </div>

      <div className="weatherInfo">
        <div className="temperature">
          <span>{temp !== undefined ? `${temp}°C` : "N/A"}</span>
        </div>

        <div className="description">
          <div className="weatherCondition">{weatherMood || "Unknown"}</div>
          <div className="place">
            {name || "Location"}, {country || "Country"}
          </div>
        </div>
      </div>

      <div className="date">{new Date().toLocaleString()}</div>

      <div className="extra-temp">
        <div className="temp-info-minmax">
          <div className="two-sided-section">
            <p>
              <i className="wi wi-sunset"></i>
            </p>
            <p className="extra-info-leftside">
              {sunsetTime}
              <span>Sunset</span>
            </p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className="wi wi-humidity"></i>
            </p>
            <p className="extra-info-leftside">
              {humidity !== undefined ? `${humidity}%` : "N/A"}
              <span>Humidity</span>
            </p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className="wi wi-barometer"></i>
            </p>
            <p className="extra-info-leftside">
              {pressure !== undefined ? `${pressure} hPa` : "N/A"}
              <span>Pressure</span>
            </p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className="wi wi-strong-wind"></i>
            </p>
            <p className="extra-info-leftside">
              {speed !== undefined ? `${speed} m/s` : "N/A"}
              <span>Speed</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Weather;
