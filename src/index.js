"use strict";

import { WeatherAPI } from "./lib/WeatherAPI";

const api = new WeatherAPI("98eeef4b2615454eb40115006231909");
api.getWeatherJSON("london").then((value) => {
  console.log(value);
});
