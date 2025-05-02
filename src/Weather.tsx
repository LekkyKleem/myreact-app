import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const API_KEY = 'd09720148fc00028db794a86f443d3ef';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const Weather = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            lat: 54.8659,
            lon: 69.1605,
            lang: 'ru',
            units: 'metric',
            appid: API_KEY,
          },
        });
        setWeather(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных погоды:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (!weather) return <div>Ошибка загрузки данных</div>;

  return (
    <div id="weather-container" >
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon"/>
      <div className="weather-row">
        <span className="weather-label">Описание:</span> {weather.weather[0].description}
      </div>
      <div className="weather-row">
        <span className="weather-label">Температура:</span> {weather.main.temp}°C
      </div>
      <div className="weather-row">
        <span className="weather-label">Ощущается как:</span> {weather.main.feels_like}°C
      </div>
      <div className="weather-row">
        <span className="weather-label">Влажность:</span> {weather.main.humidity}%
      </div>
      <div className="weather-row">
        <span className="weather-label">Давление:</span> {weather.main.pressure} гПа
      </div>
      <div className="weather-row">
        <span className="weather-label">Ветер:</span> {weather.wind.speed} м/с
      </div>
    </div>
  );
}  

export default Weather;
