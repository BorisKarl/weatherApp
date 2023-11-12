/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_apiFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/apiFunctions */ \"./src/modules/apiFunctions.js\");\n/* harmony import */ var _modules_domFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domFunctions */ \"./src/modules/domFunctions.js\");\n\n\n\n\nconst cleanInput = (input) => {\n     input\n     .replace(/(\\s+$|^\\s+)/g, '') // remove whitespace from begining and end of string\n      .replace(/(,\\s+)/g, ',') // remove any white space that follows a comma\n      .replace(/(\\s+,)/g, ','); // remove any white space that preceeds a comma\n\n      const firstLetter = input[0].toUpperCase();\n      const city = firstLetter + input.substring(1);\n      return city; \n}\n\n const input = document.getElementById('cityInput');\n    \ninput.addEventListener('keypress', (event) => {\n       if (event.key === \"Enter\") {\n         console.log(\"Aus der cleanInput Funktion \" + cleanInput(input.value));\n         (0,_modules_apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getWeather)(cleanInput(input.value));\n         input.value = \"\";\n         input.blur();\n       }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/apiFunctions.js":
/*!*************************************!*\
  !*** ./src/modules/apiFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nconst api_key = \"2398f3d056c8d161f94aadd37333d0d3\";\nconst hard_code_key =\n  \"api.openweathermap.org/data/2.5/weather?q=Graz,au&APPID=2398f3d056c8d161f94aadd37333d0d3&units=metric\";\nconst url = \"https://api.openweathermap.org/data/2.5/weather?q=\";\nconst urlContinue = \"&APPID=2398f3d056c8d161f94aadd37333d0d3&units=metric\";\n\nconst content = document.getElementById(\"valueContent\");\nconst cityDOM = document.getElementById(\"city\");\nconst tempDOM = document.getElementById(\"temp\");\nconst timeDOM = document.getElementById(\"time\");\nconst cloudsDOM = document.getElementById(\"clouds\");\nconst input = document.getElementById('cityInput');\n\nasync function getWeather(city) {\n  try {\n    const t1 = performance.now();\n    const response = await fetch(url + city + urlContinue, { mode: \"cors\" });\n    if (response.status === 404) {\n      content.innerHTML = \"<h1>Stadt nicht gefunden</h1>\";\n      location.reload();\n    } else {\n      const weatherData = await response.json();\n      cityDOM.innerHTML = weatherData.name + \", \" + weatherData.sys.country;\n      tempDOM.innerHTML = Math.round(weatherData.main.temp) + \" &degC\";\n      const t2 = performance.now();\n      console.log(weatherData);\n      cloudsDOM.innerHTML = weatherData.weather[0].description;\n      timeDOM.textContent = `It took ${((t2 - t1) / 6000).toFixed(\n        2\n      )} seconds to fetch and display the data.`;\n      console.log(\n        `It took ${((t2 - t1) / 6000).toFixed(\n          2\n        )} seconds to fetch and display the data.`\n      );\n      // input.innerHTML = \"\";\n    }\n  } catch (error) {\n    console.error();\n  } finally {\n    console.log(\"Wetterapp abgefeuert!\");\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/modules/apiFunctions.js?");

/***/ }),

/***/ "./src/modules/domFunctions.js":
/*!*************************************!*\
  !*** ./src/modules/domFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherInfo: () => (/* binding */ getWeatherInfo)\n/* harmony export */ });\n/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFunctions */ \"./src/modules/apiFunctions.js\");\n\n\nconst getWeatherInfo = (input) => {\n    const submitButton = document.getElementById('submitButton');\n    const cityInput = document.getElementById('cityInput');\n    submitButton.addEventListener('click', () => {\n        (0,_apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getWeather)(cityInput.value);\n        input.blur();\n    })\n\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/domFunctions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;