import './Weather.css';
import { useState } from "react";
import { getWeather } from "../../api/WeatherApi.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faRainbow, faCloudSunRain, faSmog, faSun, faCloud, faSnowflake, faCloudRain, faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";

export const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const createWeatherIcon = (icon: any) => (
        <FontAwesomeIcon style={{ width: '35px', height: '30px' }} icon={icon} />
    );

    const weatherIcons: { [key: string]: JSX.Element | string } = {
        Clouds: createWeatherIcon(faCloud),
        Clear: createWeatherIcon(faSun),
        Mist: createWeatherIcon(faSmog),
        Rain: createWeatherIcon(faCloudRain),
        Snow: createWeatherIcon(faSnowflake),
        Drizzle: createWeatherIcon(faCloudSunRain),
        Thunderstorm: createWeatherIcon(faCloudShowersHeavy),
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (city.trim()) {
            getWeather(city)
                .then((data) => {
                    setWeather(data);
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                    setWeather(null);
                });
        }
    };

    return (
        <div className="main__form">
            <form onSubmit={handleSubmit}>
                <div className="input__container">
                    <input
                        type='text'
                        placeholder='Search..'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button type='submit'>
                        <FontAwesomeIcon style={{ width: '30px', height: '30px' }} icon={faSearch} />
                    </button>
                </div>
            </form>
            {weather && (
                <div className="main__data">
                    <h2 style={{ fontSize: '40px', fontWeight: 'bold' }}>Weather in {weather.name}</h2>
                    <p style={{ fontSize: '50px', fontWeight: 'bolder', marginTop: '20px' }}>{Math.round(weather.main.temp)}°C</p>
                    <div style={{display: 'flex', alignItems: 'center', margin: '8px 0', gap: '10px'}}>
                        {weatherIcons[weather.weather[0].main] || <FontAwesomeIcon style={{ width: '35px', height: '30px' }} icon={faRainbow} />}
                        <p style={{fontSize: '20px', textTransform: 'capitalize'}}> {weather.weather[0].description}</p>
                    </div>
                    <p style={{ fontSize: '20px' }}>Humidity: {weather.main.humidity}%</p>
                    <p style={{ fontSize: '20px' }}>Wind Speed: {weather.wind.speed} m/s</p>
                </div>
            )}
            {error && <p style={{ color: 'red', marginTop: '45px', textTransform: 'uppercase' }}>{error} Try Again!</p>}
        </div>
    );
};
