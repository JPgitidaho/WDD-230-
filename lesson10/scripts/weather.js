document.addEventListener('DOMContentLoaded', () => {
    apiFetch(49.7598, 6.6475, 'Trier');
    apiFetch(52.5200, 13.4050, 'Berlin');
    apiFetch(50.1109, 8.6821, 'Frankfurt');
  });
    

// API URL
const url = 'https://api.openweathermap.org/data/2.5/weather';

// API Key (Replace with your actual API key)
const apiKey = '39a93938e81e6967af92542761303653';

// Function to fetch data from OpenWeatherMap API
async function apiFetch(lat, lon, cityName) {
  try {
    const queryString = `?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    const response = await fetch(`${url}${queryString}`);
    
    if (response.ok) {
      // Convert response to JSON
      const data = await response.json();
      
      // Display results in the console
      console.log(`${cityName} Data:`, data);

      // Display results in the HTML document
      displayResults(data, cityName);
    } else {
      // Handle error response
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(`Error fetching data for ${cityName}:`, error);
  }
}

// Function to display results in HTML document
function displayResults(data, cityName) {
  // Create a container for each city
  const cityContainer = document.createElement('div');
  cityContainer.classList.add('city-container');

  // Display city name
  const cityHeading = document.createElement('h2');
  cityHeading.textContent = cityName;
  cityContainer.appendChild(cityHeading);

  // Display current temperature
  const temp = document.createElement('p');
  temp.textContent = `${data.main.temp.toFixed(0)}°F`;
  cityContainer.appendChild(temp);

  // Display weather description in uppercase
  const description = document.createElement('p');
  description.textContent = data.weather[0].description.toUpperCase();
  cityContainer.appendChild(description);

  // Display weather icon
  const weatherIcon = document.createElement('img');
  weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.alt = data.weather[0].description;
  cityContainer.appendChild(weatherIcon);
  
  // Append the city container to the main HTML element
  document.querySelector('main').appendChild(cityContainer);
}

