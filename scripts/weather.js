document.addEventListener('DOMContentLoaded', function () {
  // Call the getWeather function with specific city and country
  getWeather('Santiago', 'cl');
});

// Function to fetch weather data from the OpenWeatherMap API
async function getWeather(city, country) {
  try {

    const apiKey = '39a93938e81e6967af92542761303653';
 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

   
    const response = await fetch(apiUrl);
    const data = await response.json();

  
    const weatherDescription = data.weather[0].description;
    const temperature = (data.main.temp - 273.15).toFixed(2); // Temperature in Celsius
    const feelsLike = (data.main.feels_like - 273.15).toFixed(2); // Feels like temperature in Celsius
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;


    const weatherIcon = getWeatherIcon(weatherDescription);

    const weatherInfo = `
      <p>Weather Description: ${weatherDescription} ${weatherIcon}</p>
      <p>Temperature: ${temperature} °C</p>
      <p>Feels Like: ${feelsLike} °C</p>
      <p>Humidity: ${humidity} %</p>
      <p>Wind Speed: ${windSpeed} m/s</p>
    `;

  
    document.getElementById('weather-info').innerHTML = weatherInfo;
  } catch (error) {
    console.error('Error fetching weather information:', error);
  }
}

function getWeatherIcon(description) {

  const iconMap = {
    'clear sky': '☀️',
    'few clouds': '🌤️',
    'scattered clouds': '☁️',
    'broken clouds': '☁️',
    'shower rain': '🌦️',
    'rain': '🌧️',
    'thunderstorm': '⛈️',
    'snow': '❄️',
    'mist': '🌫️'
  };


  return iconMap[description.toLowerCase()] || '❓';
}
