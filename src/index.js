import { getWeather } from "./modules/apiFunctions";
import { getWeatherInfo } from "./modules/domFunctions";

const test = document.getElementById('1');

const submitButton = document.getElementById('submitButton');
    const cityInput = document.getElementById('cityInput');
    submitButton.addEventListener('click', () => {
        getWeather(cityInput.value);
    })

test.textContent = "Test";


