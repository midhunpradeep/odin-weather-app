"use strict";

import { WeatherData } from "./WeatherData";

export class WeatherAPI {
  get key() {
    return this._key;
  }

  set key(value) {
    this._key = value;
  }
  constructor(key) {
    this._key = key;
  }

  async getWeatherData(location) {
    let weatherData;
    try {
      const call = `https://api.weatherapi.com/v1/current.json?key=${this.key}&q=${location}&aqi=no`;
      const response = await fetch(call);
      const json = await response.json();

      weatherData = new WeatherData(json);
    } catch (error) {
      console.error("Failed to get weather data");
      weatherData = null;
    }
    return weatherData;
  }
}
