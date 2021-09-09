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
