/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WeatherQuery
// ====================================================

export interface WeatherQuery_getCityByName_weather_summary {
  __typename: "Summary";
  icon: string | null;
  description: string | null;
  title: string | null;
}

export interface WeatherQuery_getCityByName_weather_temperature {
  __typename: "Temperature";
  actual: number | null;
  feelsLike: number | null;
  min: number | null;
  max: number | null;
}

export interface WeatherQuery_getCityByName_weather {
  __typename: "Weather";
  summary: WeatherQuery_getCityByName_weather_summary | null;
  temperature: WeatherQuery_getCityByName_weather_temperature | null;
}

export interface WeatherQuery_getCityByName {
  __typename: "City";
  id: string | null;
  name: string | null;
  weather: WeatherQuery_getCityByName_weather | null;
}

export interface WeatherQuery {
  getCityByName: WeatherQuery_getCityByName | null;
}

export interface WeatherQueryVariables {
  name: string;
}
