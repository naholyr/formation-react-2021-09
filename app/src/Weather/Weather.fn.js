import { memo, useEffect, useRef, useState } from "react";
import "./Weather.scss";
import logo from "../logo.svg";
import { getWeather } from "../api";

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
  const [{ loading, data, error }, setStatus] = useState({
    loading: true,
    data: null,
    error: null,
  });

  //setStatus({ loading: true });

  // à chaque fois que "loading" change
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("toggled loading", loading);
  }, [loading]);

  // à chaque update (même causé par le parent render)
  useEffect(() => console.log("render Weather"));

  // ref change => no update
  // à utiliser pour les variables qui n'impactent pas l'output
  const cancelled = useRef(false);

  const loadWeather = () => {
    setStatus({ loading: true });
    return getWeather()
      .then((data) => {
        if (cancelled.current) return;
        setStatus({ loading: false, data });
      })
      .catch((err) => {
        if (cancelled.current) return;
        setStatus({ loading: false, error: err.message });
      });
  };

  // seulement la première fois
  useOnMount(() => {
    loadWeather();
    return () => {
      // cancel HTTP call
      cancelled.current = true;
    };
  });

  // mise à jour régulière
  useOnMount(() => {
    const interval = setInterval(loadWeather, 4000);
    return () => {
      clearInterval(interval);
    };
  });

  // side-effect: document.title
  /*
  1. data = undefined
    => originalTitle = "React App" (effect)
    => pas de modif de document.title (effect)
  2. data = { temperature: 24 }
    => document.title = "React App" (cleanup)
    => originalTitle = "React App" (effect)
    => document.title = "24°C" (effect)
  3. data = { temperature: 24 }
    => rien (pas de cleanup, pas d'effet)
  4. data = null
    => document.title = "React App" (cleanup)
    => pas de modif (effect)
  */
  useEffect(() => {
    const originalTitle = document.title;
    if (data?.temperature !== undefined) {
      document.title = `${data.temperature}°C`;
    }
    return () => {
      document.title = originalTitle;
    };
  }, [data?.temperature]);

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
    </div>
  );
};

export default Weather;
