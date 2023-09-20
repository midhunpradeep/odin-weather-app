"use strict";

import { WeatherAPI } from "./lib/WeatherAPI";

const api = new WeatherAPI("98eeef4b2615454eb40115006231909");

let weatherData = null;

const weatherOutputWrapper = document.getElementById("weather-output-wrapper");
const fields = {
  name: weatherOutputWrapper.querySelector(".name"),
  region: weatherOutputWrapper.querySelector(".region"),
  country: weatherOutputWrapper.querySelector(".country"),
  condition: weatherOutputWrapper.querySelector(".condition"),
  temperature: weatherOutputWrapper.querySelector(".temperature"),
};

let useCelsius = true;
const temperatureToggleBtn = document.getElementById("temperature-toggle-btn");
temperatureToggleBtn.addEventListener("click", () => {
  useCelsius = !useCelsius;
  temperatureToggleBtn.textContent =
    "Use " + (useCelsius ? "Fahrenheit" : "Celsius");
  updateWeatherOutput();
});

function updateWeatherOutput() {
  if (!weatherData) return;

  fields.name.textContent = weatherData.name;
  fields.region.textContent = weatherData.region;
  fields.country.textContent = weatherData.country;
  fields.condition.textContent = weatherData.condition;
  if (useCelsius) {
    fields.temperature.textContent = weatherData.tempC + " °C";
  } else {
    fields.temperature.textContent = weatherData.tempF + " °F";
  }
}

const weatherSearchForm = document.getElementById("weather-search-form");
const weatherInput = weatherSearchForm.querySelector("input[name='location']");

weatherSearchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = await api.getWeatherData(weatherInput.value);
  if (!data) return;

  weatherInput.value = "";
  weatherData = data;
  updateWeatherOutput();
});
