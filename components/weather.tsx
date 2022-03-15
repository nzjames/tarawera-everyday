import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getWeather } from "../helpers/weather.ts";
import everydayConfig from "../everyday.config.json";

try {
  const [lat, log] = everydayConfig.locations.tarawera.latlog;
} catch (e) {
  console.error("Configure latlog in everyday.config.json");
  console.error(e);
}

export const Weather = () => {
  const [weather, setWeather] = useState(null);
  // Format temprature for display
  const temp = weather?.main?.temp
    ? Math.round(weather.main.temp) + "°C"
    : null;
  // Render weather icon
  // This will error for an invalid API key
  const icon = weather?.weather[0].icon ? (
    <Image
      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
      width="25"
      height="25"
      alt=""
    ></Image>
  ) : null;

  // Fetch weather data function that can be used in useEffect hook
  const getWeatherData = async () => {
    try {
      const data = await getWeather(lat, log);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  // First fetch of weather data
  useEffect(() => {
    getWeatherData();
  }, []); // Empty array means run only once

  // Update weather data every 15 minutes
  useEffect(() => {
    const interval = 1000 * 60 * 15;
    const timer = setInterval(() => {
      getWeatherData();
    }, interval);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <span>{temp}</span>
      {icon}
    </>
  );
};

export default Weather;
