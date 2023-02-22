import React, { useEffect, useState } from "react";
import axios from "axios";
import { WeatherCard } from "../Components/WeatherCard";

const FreezeAndFlee = () => {
  const [weatherData, setWeatherData] = useState();

  const zipCodes = [
    99515, 55802, 99501, 99801, 99709, 96701, 99775, 99705, 82009, "02109"
  ];

  const fetchZipCodeWeather = (zip) => {
    return axios
      .get("https://weather-app-api-4ux5.onrender.com/zipcode", {
        params: {
          zip,
        },
      })
      .then(({ data }) => {
        return data;
      });
  };

  useEffect(() => {
    const zipCode = zipCodes[(zipCodes.length * Math.random()) | 0];

    fetchZipCodeWeather(zipCode).then((response) => {
      setWeatherData(response);
    });
  }, []);

  if (weatherData === undefined) {
    return (
      <div className="pageContainer">
        <img src="sunny.png" alt="SUN" className="sunLoading" />
        <div className="loadingMessage">Loading Weather</div>
      </div>
    );
  } else {
    return (
      <div className="pageContainer">
        <WeatherCard
          temp={weatherData.main.temp}
          max={weatherData.main.temp_max}
          min={weatherData.main.temp_min}
          clouds={weatherData.clouds.all}
          sunrise={weatherData.sys.sunrise}
          sunset={weatherData.sys.sunset}
          city={weatherData.name}
          icon={weatherData.weather[0].description}
        />
      </div>
    );
  }
};

export { FreezeAndFlee };
