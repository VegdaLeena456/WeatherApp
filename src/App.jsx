import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import Loader from "./components/Loader";
import { getWeather, getForecast } from "./services/weatherApi";
import "./index.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      const data = await getWeather(city);
      const forecastData = await getForecast(city);
      setWeather(data);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1> Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      {forecast.length > 0 && <ForecastCard forecast={forecast} />}
    </div>
  );
}

export default App;
