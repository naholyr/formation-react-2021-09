import { memo, useContext, useEffect, useRef, useState } from "react";
import "./Weather.scss";
import logo from "../logo.svg";
import { getWeather } from "../api";
import { TrucContext } from "../context";
import {
  loadWeather,
  updateTemperature,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";

// Intérêt du composant vs. simple fonction: gestion du "memo" possible
const WeatherData = memo(({ temperature, sunny, cloudy }) => {
  return (
    <>
      {sunny && !cloudy
        ? "🌞"
        : sunny && cloudy
        ? "🌤"
        : !sunny && cloudy
        ? "🌥"
        : "❌"}
      🌡
      {temperature}°C
    </>
  );
});

// TODO: share in new file
const Spinner = () => "Chargement…";

// eslint-disable-next-line react-hooks/exhaustive-deps
const useOnMount = (fn) => useEffect(fn, []);

// TODO: share in new file
const Error = ({ message }) => <>‼ {message}</>;

const Weather = () => {
  const loading = useSelector((state) => state.weather.loading);
  const data = useSelector((state) => state.weather.data);
  const error = useSelector((state) => state.weather.error);
  const dispatch = useDispatch();

  // seulement la première fois
  useOnMount(() => {
    dispatch(loadWeather());
  });

  return (
    <div className="Weather">
      <img src={logo} alt="logo" width="32" />
      {"Weather: "}
      {loading ? (
        <Spinner />
      ) : data ? (
        <WeatherData {...data} />
      ) : (
        <Error message={error} />
      )}
      <br />
      {"Contexte: "}
      {truc}
    </div>
  );
};

export default Weather;
