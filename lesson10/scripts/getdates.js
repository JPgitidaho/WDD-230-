document.addEventListener("DOMContentLoaded", function () {
  // Get the current year
  const year = new Date().getFullYear();

  // Get the information of the last modification
  const lastModified = document.lastModified;

  const myName = "Juanita P. Aguilera";
  const OpenWeatherMap = "| OpenWeatherMap.org | CC BY-SA 4.0";

  // Fill the second paragraph with the information of the last modification
  document.getElementById("last-modified").innerHTML = "Last modified: " + lastModified;

  // Fill the first paragraph with the copyright symbol, the current year, my name, my state or country
  document.getElementById("copyright-info").innerHTML = "&copy; " + year + " " + myName + " - " + OpenWeatherMap;
});




