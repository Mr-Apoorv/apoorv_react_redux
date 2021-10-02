import { combineReducers } from "redux";

import { setReducer, getReducer } from "./productReducers";

const rootReducer = combineReducers({
  setReducer: setReducer,
  getReducer: getReducer,
});

export default rootReducer;
