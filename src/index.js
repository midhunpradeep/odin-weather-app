"use strict";

import { WeatherAPI } from "./lib/WeatherAPI";
import { WeatherData } from "./lib/WeatherData";

const api = new WeatherAPI("98eeef4b2615454eb40115006231909");

api.getWeatherData("london").then((value) => {
  console.log(value);
});
