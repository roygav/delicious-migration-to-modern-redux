import { SET_MEALS, GET_MEALS, GET_MEALS_FAILURE } from "./actions";

export const INITIAL_STATE = {
  meals: {},
  loading: false,
  showError: false,
};

/**
 * Responsible for meals
 * @param {Immutable} state - the old state
 * @param {string} type - the type of the action
 * @param {object} payload
 * @returns {Immutable}
 */
export default function mealsReducer(state = INITIAL_STATE, { type, payload }) {
  let newState;
  switch (type) {
    case GET_MEALS: {
      newState = {
        ...state,
        loading: true,
        showError: false,
      };
      break;
    }
    case SET_MEALS: {
      newState = {
        ...state,
        meals: payload || {},
        loading: false,
        showError: false,
      };
      break;
    }
    case GET_MEALS_FAILURE: {
      newState = {
        ...state,
        loading: false,
        showError: true,
      };
      break;
    }
    default:
      newState = state;
  }

  return newState;
}
