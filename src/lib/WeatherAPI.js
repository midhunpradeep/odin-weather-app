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
    const call = `https://api.weatherapi.com/v1/current.json?key=${this.key}&q=${location}&aqi=no`;

    const response = await fetch(call);
    const json = await response.json();
    return new WeatherData(json);
  }
}
