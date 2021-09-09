import "./App.scss";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ReduxCounterList from "./pages/ReduxCounterList";
import Weather from "./pages/Weather";
import LocationInfo from "./LocationInfo";
import { TrucContext } from "./context";
import WeatherTemperature from "./WeatherTemperature";
import NbCounters from "./NbCounters";

// / => Home
// /counters => CounterList
// /weather => Weather

/*

    +--------------------------------------------------------------+
    | TITRE (nb counters) (température) |           MENU (3 liens) |
    +--------------------------------------------------------------+
    | MAIN CONTENT                                                 |
    +--------------------------------------------------------------+
    | FOOTER                                                       |
    +--------------------------------------------------------------+

*/

const App = () => {
  const nbCounters = 0;
  return (
    <div className="App">
      <h1>Ma super app</h1>
      <nav>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/counters" activeClassName="active">
          Counters (<NbCounters />)
        </NavLink>
        <NavLink to="/weather" activeClassName="active">
          Weather (<WeatherTemperature />
          °C)
        </NavLink>
      </nav>
      <TrucContext.Provider value="bidule">
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/counters" render={() => <ReduxCounterList />} />
            <Route path="/weather" component={Weather} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </TrucContext.Provider>
      <footer>
        <hr />© Bidule
        <br />
        <LocationInfo />
      </footer>
    </div>
  );
};

export default App;
