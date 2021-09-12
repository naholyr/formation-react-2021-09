// FSA = Flux Standard Actions

// Action creator = fonction qui retourne une action

export const updateTemperature = (temperature: number) => {
  const action = {
    type: "SET_TEMPERATURE",
    payload: {
      temperature,
    },
  };
  return action;
};

export const incrCounter = (id, step = +1) => ({
  type: "COUNTER_INCR",
  payload: { id, step },
});

export const addCounter = (value = 0) => ({
  type: "COUNTER_ADD",
  payload: { value },
});

export const removeCounter = (id) => ({
  type: "COUNTER_REMOVE",
  payload: { id },
});

export const startLoadWeather = () => ({
  type: "LOAD_WEATHER_START",
});
export const successLoadWeather = (payload) => ({
  type: "LOAD_WEATHER_SUCCESS",
  payload,
});
export const errorLoadWeather = (error) => ({
  type: "LOAD_WEATHER_ERROR",
  error: true,
  payload: { error },
});
// async action creator using redux-thunk
// alternatives: redux-saga / redux-promise / redux-axios-middleware
export const loadWeather = (dispatch) => {
  dispatch(startLoadWeather());
  return getWeather()
    .then((data) => {
      dispatch(successLoadWeather(data));
    })
    .catch((err) => {
      dispatch(errorLoadWeather(err));
    });
};

