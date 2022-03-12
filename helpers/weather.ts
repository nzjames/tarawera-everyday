import everydayConfig from "../everyday.config.json";

export const getWeather = async (lat: number, lon: number) => {
  console.log(`Getting weather`, new Date());
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${everydayConfig.openWeatherKey}`
  );
  const data = await response.json();
  return data;
};

export const asCelsius = (kelvin: number) => {
  return Math.round(kelvin - 273.15);
};
