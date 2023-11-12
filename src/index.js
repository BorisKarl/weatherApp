import { getWeather } from "./modules/apiFunctions";
import { getWeatherInfo } from "./modules/domFunctions";


const cleanInput = (input) => {
     input
     .replace(/(\s+$|^\s+)/g, '') // remove whitespace from begining and end of string
      .replace(/(,\s+)/g, ',') // remove any white space that follows a comma
      .replace(/(\s+,)/g, ','); // remove any white space that preceeds a comma

      const firstLetter = input[0].toUpperCase();
      const city = firstLetter + input.substring(1);
      return city; 
}

 const input = document.getElementById('cityInput');
    
input.addEventListener('keypress', (event) => {
       if (event.key === "Enter") {
         console.log("Aus der cleanInput Funktion " + cleanInput(input.value));
         getWeather(cleanInput(input.value));
         input.value = "";
         input.blur();
       }
});
