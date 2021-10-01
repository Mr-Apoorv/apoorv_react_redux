import setConstants from "../constants/productConstants";

export const setProduct = (data) => {
  return {
    type: setConstants.SET_PRODUCTS,
    payload: data,
  };
};

export const getProduct = (data) => {
  return {
    type: setConstants.GET_PRODUCT,
    payload: data,
  };
};

export const removeProduct = (data) => {
  return {
    type: setConstants.REMOVE_PRODUCT,
  };
};
