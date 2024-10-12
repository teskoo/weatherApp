import axios from 'axios';
import  getErrorMessage  from './GetErrorMessage';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (city: string) => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                throw new Error(getErrorMessage(error.response.status));
            }
            if (error.request) {
                throw new Error('No response from server. Please check your network connection.');
            }
        }
        throw new Error(`Request failed: ${(error as Error).message}`);
    }
};
