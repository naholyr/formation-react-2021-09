import { useSelector } from "react-redux";
//import memoize from "memoize-one";

// Warning: selector is called at EACH dispatch: memoize if you have costly computations
//const findUser = memoize((users, id) => users.find((u) => u.id === id));

const WeatherTemperature = () => {
  const temperature = useSelector((storeState) => storeState.temperature);
  // Note: keep your selector ULTRA simple
  //const unit = useSelector((storeState) => storeState.unit);

  // costly example
  //const user = useSelector((state) => findUser(state.users, id));
  //const user = useSelector((state) => state.users[id]);

  /*
  useEffect(() => {
    const unsubscribe = window.store.subscribe(() => {
      const state = window.store.getState();
      setTemperature(state.temperature);
    });
    return unsubscribe;
  }, []);
  */

  return <>{temperature}</>;
};

export default WeatherTemperature;
