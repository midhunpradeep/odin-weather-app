"use strict";

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

  async getWeatherJSON(location) {
    const call = `https://api.weatherapi.com/v1/current.json?key=${this.key}&q=${location}&aqi=no`;

    const response = await fetch(call);
    return await response.json();
  }
}
