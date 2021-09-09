import { useState } from "react";
import Weather from "../Weather/Weather.fn";

const WeatherPage = () => {
  const [shouldShowWeather, toggleWeather] = useState(true);

  return (
    <div className="Weather">
      <h2>Weather</h2>
      <label>
        <input
          type="checkbox"
          checked={shouldShowWeather}
          onChange={(e) => toggleWeather(e.target.checked)}
        />{" "}
        Show weather
      </label>
      {shouldShowWeather && <Weather />}
    </div>
  );
};

export default WeatherPage;
