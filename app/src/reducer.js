import { v4 as uuid } from "uuid";
import { OrderedMap } from "immutable";

export type AppState = {
  temperature: number,
  users: Array<{ id: number, name: string }>,
  counters: OrderedMap<string, number>,
};

type Action = {
  type: string,
  payload?: any,
  meta?: any,
  error?: boolean,
};

export const initialState: AppState = {
  temperature: null,
  users: [
    {
      id: 33,
      name: "Bob",
    },
  ],
  counters: new OrderedMap(),
};

export const reducer = (state: AppState, action: Action): State => {
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
      const value = action.payload.value;
      return { ...state, counters: state.counters.set(id, value) };
    }
    case "COUNTER_REMOVE": {
      const id = action.payload.id;
      return { ...state, counters: state.counters.delete(id) };
    }
    case "COUNTER_INCR": {
      const { id, step } = action.payload;
      return {
        ...state,
        counters: state.counters.update(id, (v) => v + step),
      };
    }

    default:
      return state;
  }
};
