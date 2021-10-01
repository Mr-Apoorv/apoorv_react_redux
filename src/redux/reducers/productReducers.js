import setConstants from "../constants/productConstants";

let initialState = {};

export const setReducer = (state = initialState, action) => {
  if (action.type === setConstants.SET_PRODUCTS) {
    return [...state, ...action.payload];
  } else {
    return state;
  }
};

export const getReducer = (state = {}, action) => {
  if (action.type === setConstants.GET_PRODUCT) {
    return [...state, ...action.payload];
  } else {
    return state;
  }
};
