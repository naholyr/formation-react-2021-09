type State = {
  temperature: number,
};

type Action = {
  type: string,
  payload?: any,
  meta?: any,
  error?: boolean,
};

export const initialState: State = {
  temperature: null,
  users: [
    {
      id: 33,
      name: "Bob",
    },
  ],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_TEMPERATURE":
      return { ...state, temperature: action.payload.temperature };

    // Worst case
    case "RENAME_USER": {
      // action.payload = { id, newName }
      const newUsers = state.users.map((u) => {
        if (u.id === action.payload.id) {
          return { ...u, name: action.payload.newName };
        } else {
          return u;
        }
      });
      return { ...state, users: newUsers };
    }

    default:
      return state;
  }
};
