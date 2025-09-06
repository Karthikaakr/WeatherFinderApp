import React, { useState } from "react";
import "./App.css"; //import external CSS

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_KEY = "d76e85d398a3ee46d5542d697c1a5b03"; //  API key

  const fetchWeather = async () => {
    if (!query) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      let location = query.trim();
      if (!location.includes(",")) {
        location = `${location},IN`; // default country = India
      }

      // Geo API
      const geoRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`
      );

      if (!geoRes.ok) {
        throw new Error(`Geo API error: ${geoRes.status}`);
      }

      const geoData = await geoRes.json();

      if (geoData.length === 0) {
        setError(" Location not found");
        setLoading(false);
        return;
      }

      const { lat, lon, name, country } = geoData[0];

      // Weather API
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );

      if (!weatherRes.ok) {
        throw new Error(`Weather API error: ${weatherRes.status}`);
      }

      const weatherData = await weatherRes.json();

      setWeather({
        location: `${name}, ${country}`,
        temp: weatherData.main.temp,
        desc: weatherData.weather[0].description,
        lat,
        lon,
      });
    } catch (err) {
      console.error("API Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="app">
     <div className="app-container">
      <h2 className="app-title"> Weather Finder</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city (e.g. Chennai,IN)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={fetchWeather} className="search-button">
          Search
        </button>
      </div>

      {loading && <p className="loading"> Fetching weather...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h3>{weather.location}</h3>
          <p> Temperature: {weather.temp} °C</p>
          <p> Condition: {weather.desc}</p>
          <p> Latitude: {weather.lat}</p>
          <p> Longitude: {weather.lon}</p>
        </div>
      )}
    </div>
   </div>
  );
}

export default App;
