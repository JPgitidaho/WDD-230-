document.addEventListener('DOMContentLoaded', function () {
  // Call the getWeather function with specific city and country
  getWeather('Santiago', 'cl');
});

// Function to fetch weather data from the OpenWeatherMap API
async function getWeather(city, country) {
  try {
    // OpenWeatherMap API key
    const apiKey = '39a93938e81e6967af92542761303653';
    // API URL with specific city and country
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

    // Fetch weather data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Extract relevant information from the data object
    const weatherDescription = data.weather[0].description;
    const temperature = (data.main.temp - 273.15).toFixed(2); // Temperature in Celsius
    const feelsLike = (data.main.feels_like - 273.15).toFixed(2); // Feels like temperature in Celsius
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    // Get the weather icon 
    const weatherIcon = getWeatherIcon(weatherDescription);

    // Create the content to display on the page
    const weatherInfo = `
      <p>Weather Description: ${weatherDescription} ${weatherIcon}</p>
      <p>Temperature: ${temperature} °C</p>
      <p>Feels Like: ${feelsLike} °C</p>
      <p>Humidity: ${humidity} %</p>
      <p>Wind Speed: ${windSpeed} m/s</p>
    `;

    // Display the information in the element with the id 'weather-info'
    document.getElementById('weather-info').innerHTML = weatherInfo;
  } catch (error) {
    console.error('Error fetching weather information:', error);
  }
}

// Function to get the weather icon based on the weather description
function getWeatherIcon(description) {
  // Map descriptions to icon names
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

  // Look up the corresponding icon or use a generic icon if there is no match
  return iconMap[description.toLowerCase()] || '❓';
}
