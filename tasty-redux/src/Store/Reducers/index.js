import { combineReducers } from "redux";
import mealsReducer from "./MealsReducer";

export default combineReducers({
  mealsData: mealsReducer,
});
