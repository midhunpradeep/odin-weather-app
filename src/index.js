"use strict";

import { WeatherAPI } from "./lib/WeatherAPI";

const api = new WeatherAPI("98eeef4b2615454eb40115006231909");

const weatherOutputWrapper = document.getElementById("weather-output-wrapper");
const fields = {
  name: weatherOutputWrapper.querySelector(".name"),
  region: weatherOutputWrapper.querySelector(".region"),
  country: weatherOutputWrapper.querySelector(".country"),
  condition: weatherOutputWrapper.querySelector(".condition"),
  temperature: weatherOutputWrapper.querySelector(".temperature"),
};

function updateWeatherOutput(weatherData) {
  fields.name.textContent = weatherData.name;
  fields.region.textContent = weatherData.region;
  fields.country.textContent = weatherData.country;
  fields.condition.textContent = weatherData.condition;
  fields.temperature.textContent = weatherData.tempC;
}

const weatherSearchForm = document.getElementById("weather-search-form");
const weatherInput = weatherSearchForm.querySelector("input[name='location']");

weatherSearchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const weatherData = await api.getWeatherData(weatherInput.value);
  if (!weatherData) return;

  weatherInput.value = "";
  updateWeatherOutput(weatherData);
});
