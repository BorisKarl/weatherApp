const api_key = "2398f3d056c8d161f94aadd37333d0d3";
const hard_code_key =
  "api.openweathermap.org/data/2.5/weather?q=Graz,au&APPID=2398f3d056c8d161f94aadd37333d0d3&units=metric";
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const urlContinue = '&APPID=2398f3d056c8d161f94aadd37333d0d3&units=metric';

const content = document.getElementById('valueContent');

async function getWeather(city) {
    try {
        const t1 = performance.now();
        const response = await fetch(url + city + urlContinue, { mode: "cors" }) ;
        const weatherData = await response.json();

        console.log(weatherData);
        content.innerHTML = weatherData.name + ", " + weatherData.main.temp + " &deg";
        const t2 = performance.now();
        console.log(`Wetter api hat ${t2 - t1} irgendwasse gadauert...`);
    }
    catch(error) {
        console.error();
    }
    finally{
        console.log("Wetterapp abgefeuert!");
    }
}


export { getWeather };
