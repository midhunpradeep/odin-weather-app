"use strict";

export class WeatherData {
  get name() {
    return this._name;
  }

  get region() {
    return this._region;
  }

  get country() {
    return this._country;
  }

  get tempC() {
    return this._tempC;
  }

  get tempF() {
    return this._tempF;
  }

  get condition() {
    return this._condition;
  }

  get conditionIcon() {
    return this._conditionIcon;
  }

  constructor(weatherJSON) {
    console.log(weatherJSON);
    this._name = weatherJSON.location.name;
    this._region = weatherJSON.location.region;
    this._country = weatherJSON.location.country;

    this._tempC = weatherJSON.current.temp_c;
    this._tempF = weatherJSON.current.temp_f;
    this._condition = weatherJSON.current.condition.text;

    this._conditionIcon = weatherJSON.current.condition.icon;
  }
}
