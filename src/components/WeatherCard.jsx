import clear from "../assets/clear.png";
import clouds from "../assets/clouds.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import mist from "../assets/mist.png";
import wind from "../assets/wind.png";

import tempIcon from "../assets/temp.png";
import humidityIcon from "../assets/humidity.png";
import conditionIcon from "../assets/condition.png";

export default function WeatherCard({ weather }) {
  const condition = weather.weather[0].main;

  // Weather icon select based on condition
  let icon;
  if (condition === "Clear") icon = clear;
  else if (condition === "Clouds") icon = clouds;
  else if (condition === "Rain") icon = rain;
  else if (condition === "Snow") icon = snow;
  else if (condition === "Mist" || condition === "Fog" || condition === "Haze") icon = mist;
  else if (condition === "Wind") icon = wind;
  else icon = clear; 

  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img src={icon} alt={condition} width="80" />

      <div className="weather-info">
        <div className="info-row">
          <img src={tempIcon} alt="Temperature" width="24" />
          <span>{weather.main.temp}°C</span>
        </div>

        <div className="info-row">
          <img src={humidityIcon} alt="Humidity" width="24" />
          <span>{weather.main.humidity}%</span>
        </div>

        <div className="info-row">
          <img src={conditionIcon} alt="Condition" width="24" />
          <span>{weather.weather[0].description}</span>
        </div>
      </div>
    </div>
  );
}
