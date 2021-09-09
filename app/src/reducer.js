import { v4 as uuid } from "uuid";

type State = {
  temperature: number,
  users: Array<{ id: number, name: string }>,
  counters: {
    ids: string[],
    values: Record<string, number>,
  },
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
  counters: {
    ids: [],
    values: {},
  },
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

    case "COUNTER_ADD": {
      const id = uuid();
      const ids = [...state.counters.ids, id];
      const values = { ...state.counters.values, [id]: action.payload.value };
      return { ...state, counters: { ids, values } };
    }
    case "COUNTER_REMOVE": {
      const id = action.payload.id;
      const { [id]: deleted, ...values } = state.counters.values;
      const ids = state.counters.ids.filter((v) => v !== id);
      return { ...state, counters: { ids, values } };
    }
    case "COUNTER_INCR": {
      const { id, step } = action.payload;
      const value = state.counters.values[id];
      if (value === undefined) return state; // invalid id = no-op
      const values = { ...state.counters.values, [id]: value + step };
      return { ...state, counters: { ...state.counters, values } };
    }

    default:
      return state;
  }
};
