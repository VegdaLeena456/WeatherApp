import clear from "../assets/clear.png";
import clouds from "../assets/clouds.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import mist from "../assets/mist.png";
import wind from "../assets/wind.png";

export default function ForecastCard({ forecast }) {
  // Helper to select correct icon
  const getIcon = (condition) => {
    if (condition === "Clear") return clear;
    if (condition === "Clouds") return clouds;
    if (condition === "Rain") return rain;
    if (condition === "Snow") return snow;
    if (condition === "Mist" || condition === "Fog" || condition === "Haze") return mist;
    if (condition === "Wind") return wind;
    return clear;
  };

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecast.map((day, index) => {
          const condition = day.weather[0].main;
          return (
            <div key={index} className="forecast-day">
              <p>{new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" })}</p>
              <img src={getIcon(condition)} alt={condition} width="50" />
              <p>{day.main.temp}°C</p>
              <p>{day.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
