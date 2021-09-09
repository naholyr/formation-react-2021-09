import { Component, memo } from "react";
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

// TODO: share in new file
const Error = ({ message }) => <>‼ {message}</>;

class Weather extends Component {
  state = { loading: true, data: null, error: null };

  interval = null;
  cancelledLoadingWeather = false;
  originalTitle = document.title;

  componentWillUnmount() {
    // eslint-disable-next-line no-console
    console.log("Weather: willUnmount");
    clearInterval(this.interval);
    this.cancelLoadingWeather();
    this.resetTitle();
  }

  resetTitle() {
    document.title = this.originalTitle;
  }

  componentDidUpdate(prevProps, prevState) {
    // eslint-disable-next-line no-console
    console.log("Weather: didUpdate");
    if (this.state.data?.temperature !== prevState.data?.temperature) {
      if (this.state.data?.temperature !== undefined) {
        this.originalTitle = document.title;
        document.title = `${this.state.data.temperature}°C`;
      } else {
        this.resetTitle();
      }
    }
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log("Weather: didMount");
    this.loadWeather();
    this.interval = setInterval(() => {
      this.loadWeather();
    }, 4000);
  }

  cancelLoadingWeather() {
    // TODO: really cancel HTTP call?
    this.cancelledLoadingWeather = true;
  }

  loadWeather() {
    // eslint-disable-next-line no-console
    console.log("Load weather");
    this.setState({ loading: true });
    getWeather()
      .then((data) => {
        if (this.cancelledLoadingWeather) return;
        this.setState({ loading: false, data });
      })
      .catch((err) => {
        if (this.cancelledLoadingWeather) return;
        this.setState({ loading: false, error: err.message });
      });
    // .finally(() => {
    //   setTimeout(() => this.loadWeather(), 4000);
    // });
  }

  renderLoading() {}

  renderError() {}

  render() {
    const { loading, data, error } = this.state;

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
  }
}

export default Weather;
