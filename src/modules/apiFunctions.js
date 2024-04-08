const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const urlContinue = "&APPID=2398f3d056c8d161f94aadd37333d0d3&units=metric";

const content = document.getElementById("valueContent");
const cityDOM = document.getElementById("city");
const tempDOM = document.getElementById("temp");
const timeDOM = document.getElementById("time");
const cloudsDOM = document.getElementById("clouds");
const input = document.getElementById('cityInput');

async function getWeather(city) {
  try {
    const t1 = performance.now();
    const response = await fetch(url + city + urlContinue, { mode: "cors" });
    if (response.status === 404) {
      content.innerHTML = "<h1>Can't find city, try again!</h1>";
      setTimeout(() => {
       location.reload();
      }, 2000);
    } else {
      const weatherData = await response.json();
      cityDOM.innerHTML = weatherData.name + ", " + weatherData.sys.country;
      tempDOM.innerHTML = Math.round(weatherData.main.temp) + " &degC";
      const t2 = performance.now();
      console.log(weatherData);
      cloudsDOM.innerHTML = weatherData.weather[0].description;
      timeDOM.textContent = `It took ${((t2 - t1) / 6000).toFixed(
        2
      )} seconds to fetch and display the data.`;
    }
  } catch (error) {
    console.error();
  } finally {
    console.log("Wetterapp abgefeuert!");
  }
}

export { getWeather, cityDOM };
