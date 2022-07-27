import { actionTypes } from "../ActionTypes";

// const initialState = {};
export const gettingProductData = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_PRODUCT_DATA:
      return (state = payload);

    default:
      return state;
  }
};

export const changingLiveStatus = (state = true, { type }) => {
  switch (type) {
    case actionTypes.UDATE_LIVE_STATUS:
      if (state === true) {
        return false;
      } else {
        return true;
      }

    default:
      return state;
  }
};

export const changeQuant = (state = 1, { type }) => {
  switch (type) {
    case actionTypes.QUANT_UP:
      if (state < 3) {
        return state + 1;
      }
    break;
    case actionTypes.QUANT_DOWN:
      if(state > 1){
        return state - 1;
      }

    break;
    default:
      return state;
  }
};
