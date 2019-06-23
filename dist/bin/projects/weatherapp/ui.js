class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.tempMax = document.getElementById("w-temp-max");
    this.tempMin = document.getElementById("w-temp-min");
    this.wind = document.getElementById("w-wind");
  }

  // Paint the DOM with data
  paint(weather) {
    this.location.textContent = weather.name;
    const wdescription = weather.weather[0].description;
    this.desc.textContent = `${wdescription
      .charAt(0)
      .toUpperCase()}${wdescription.slice(1, wdescription.length)}`;
    this.string.textContent = `${weather.main.temp} F°`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.tempMax.textContent = `High of ${weather.main.temp_max} F°`;
    this.tempMin.textContent = `Lows in the ${weather.main.temp_min} F°`;
    this.wind.textContent = `Wind speed of ${weather.wind.speed} mph`;
    this.humidity.textContent = `Relative humidty of ${weather.main.humidity}`;
  }
}
