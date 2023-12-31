"use strict";

import "./styles/normalize.css";
import "./styles/reset.css";
import "./styles/style.css";

import { WeatherAPI } from "./lib/WeatherAPI";

const api = new WeatherAPI("98eeef4b2615454eb40115006231909");

let weatherData = null;

const weatherOutputWrapper = document.getElementById("weather-output-wrapper");
const weatherOutputFields = {
  name: weatherOutputWrapper.querySelector(".name"),
  region: weatherOutputWrapper.querySelector(".region"),
  country: weatherOutputWrapper.querySelector(".country"),
  conditionImage: weatherOutputWrapper.querySelector(".condition-image"),
  condition: weatherOutputWrapper.querySelector(".condition"),
  temperature: weatherOutputWrapper.querySelector(".temperature"),
};

let useCelsius = true;
const temperatureToggleBtn = document.getElementById("temperature-toggle-btn");
temperatureToggleBtn.addEventListener("click", () => {
  useCelsius = !useCelsius;
  temperatureToggleBtn.textContent = useCelsius ? "°C" : "°F";
  updateWeatherOutput();
});

function updateWeatherOutput() {
  if (!weatherData) return;

  weatherOutputFields.name.textContent = weatherData.name;
  weatherOutputFields.region.textContent = weatherData.region;
  weatherOutputFields.country.textContent = weatherData.country;

  weatherOutputFields.conditionImage.src = weatherData.conditionIcon;
  weatherOutputFields.conditionImage.alt = weatherData.condition + " icon";

  weatherOutputFields.condition.textContent = weatherData.condition;
  if (useCelsius) {
    weatherOutputFields.temperature.textContent = weatherData.tempC + " °C";
  } else {
    weatherOutputFields.temperature.textContent = weatherData.tempF + " °F";
  }
}

const weatherSearchForm = document.getElementById("weather-search-form");
const weatherInput = weatherSearchForm.querySelector("input[name='location']");
const searchStatus = weatherSearchForm.querySelector(".search-status");

weatherSearchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const searchTerm = weatherInput.value;
  searchStatus.textContent = `Searching for location '${searchTerm}'`;

  const data = await api.getWeatherData(searchTerm);
  if (!data) {
    searchStatus.textContent = `Couldn't find data for location '${searchTerm}'`;
    return;
  }

  weatherData = data;

  weatherInput.value = "";
  searchStatus.textContent = "";
  updateWeatherOutput();
});

async function setDefaultWeather() {
  const data = await api.getWeatherData("london");
  weatherData = data;
  updateWeatherOutput();
}

setDefaultWeather();
