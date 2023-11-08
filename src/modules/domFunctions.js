import { getWeather } from "./apiFunctions"



const getWeatherInfo = (input) => {
    const submitButton = document.getElementById('submitButton');
    const cityInput = document.getElementById('cityInput');
    submitButton.addEventListener('click', () => {
        getWeather(cityInput.value);
    })

}

export { getWeatherInfo }
