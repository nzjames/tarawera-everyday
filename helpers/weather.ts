export const getWeather = async (lat: number, lon: number) => {
  try {
    const openWeatherKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY;

    console.log(`Getting weather`, new Date());
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherKey}&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(
      "No Open Weather Key found, weather information will not be available"
    );
    return {};
  }
};
