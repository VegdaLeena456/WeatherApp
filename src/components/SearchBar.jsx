import { useState } from "react";
import searchIcon from "../assets/search.png";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  
  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input 
        type="text" 
        placeholder="Enter city..." 
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">
        <img src={searchIcon} alt="Search" width="20" />
      </button>
    </form>
  );
}
