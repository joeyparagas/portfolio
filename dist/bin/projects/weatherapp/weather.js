class Weather {
  constructor(city, zip) {
    this.apiKey = "49e15ba7da629e54910196fae1dc3cbc";
    this.city = city;
    this.zip = zip;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&zip=${
        this.zip
      },us&units=imperial&appid=${this.apiKey}`
    );
    // test :
    // http://api.openweathermap.org/data/2.5/weather?q=norwalk&zip=90650,us&units=imperial&appid=49e15ba7da629e54910196fae1dc3cbc

    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city, zip) {
    this.city = city;
    this.zip = zip;
  }
}
