// Init localStorage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.zip);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event (modal)
document.getElementById("w-change-btn").addEventListener("click", e => {
  // Grab values from modal
  const city = document.getElementById("city").value;
  const zip = document.getElementById("zip").value;

  // Set new location
  weather.changeLocation(city, zip);

  // Set location in localStorage
  storage.setLocationData(city, zip);

  // Output new location weather data
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

// Get results
function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
