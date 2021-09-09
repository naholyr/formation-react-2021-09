import "./App.scss";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CounterList from "./pages/CounterList";
import Weather from "./pages/Weather";

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
  const nbCounters = 1;
  const temperature = 24;

  return (
    <div class="App">
      <div class="grid-container">
        <div class="Main"></div>
        <div class="Title"></div>
        <div class="Nav"></div>
        <div class="Footer"></div>
      </div>
      <h1>Ma super app</h1>
      <nav>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/counters" activeClassName="active">
          Counters ({nbCounters})
        </NavLink>
        <NavLink to="/weather" activeClassName="active">
          Weather ({temperature}°C)
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/counters" component={CounterList} />
          <Route path="/weather" component={Weather} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <footer>
        <hr />© Bidule
      </footer>
    </div>
  );
};

export default App;
