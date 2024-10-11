# Weather App

A simple and intuitive Weather App built with React and TypeScript that allows users to retrieve and display current weather data for any city around the world. Utilizing the OpenWeatherMap API, this app fetches real-time weather information, including temperature, humidity, wind speed, and weather conditions.

## Features

- **Search for City**: Users can input the name of any city to get the current weather data.
- **Real-time Weather Data**: Fetches current temperature, humidity, wind speed, and weather conditions from the OpenWeatherMap API.
- **Responsive Design**: The app is designed to be responsive and user-friendly across different devices.
- **Error Handling**: Displays appropriate error messages for invalid city names or issues with fetching data.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
- **Axios**: A promise-based HTTP client for making requests to the OpenWeatherMap API.
- **OpenWeatherMap API**: A service that provides weather data for any location worldwide.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
2. **Install dependencies**:
   ```bash
   npm install
3. **Create a `.env` file in the root directory and add your OpenWeatherMap API key:**
   ```bash
   VITE_WEATHER_API_KEY=YOUR_API_KEY
4. **Start the development server**:
   ```bash
   npm run dev
5. **Open your browser and go to http://localhost:5173**