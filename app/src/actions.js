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
