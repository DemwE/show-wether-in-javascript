function getWeather() {
  // get the city name from the input
  const city = "London";
  // get the api key from the input
  const apiKey = "39c87e2ece1743a22dcd4ac4fec1f32b";
  // get the api url
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  // make a fetch request to the api url
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // display the data on the console
      console.log(data);
    });
}
