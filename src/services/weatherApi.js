const API_KEY = "e47c8d886bf3055d50037f23b1108116";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getWeather(city) {
  try {
    const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
    if (!response.ok) throw new Error("City not found");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function getForecast(city) {
  try {
    const response = await fetch(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
    if (!response.ok) throw new Error("Forecast not available");
    const data = await response.json();

    // Extract one forecast per day (12:00:00)
    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));
    return daily;
  } catch (error) {
    throw error;
  }
}
