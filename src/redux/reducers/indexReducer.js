import { combineReducers } from "redux";

import { setReducer, getReducer } from "./productReducers";

const rootReducer = combineReducers({
  allProducts: setReducer,
  selectProduct: getReducer,
});

export default rootReducer;
