import setConstants from "../constants/productConstants";

let initialState = [
  {
    id: 1555,
    name: "laptop",
    model: "dasdas",
    price: "68667",
  },
];

export const setReducer = (state = initialState, action) => {
  if (action.type === setConstants.SET_PRODUCTS) {
    console.log("reducer", [...state, ...action.payload]);
    return [...state, ...action.payload];
  } else {
    return state;
  }
};

export const getReducer = (state = [], action) => {
  if (action.type === setConstants.GET_PRODUCT) {
    return [...state, action.payload];
  } else {
    return state;
  }
};
