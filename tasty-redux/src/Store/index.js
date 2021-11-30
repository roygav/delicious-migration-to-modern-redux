import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default function createAppStore() {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
}
