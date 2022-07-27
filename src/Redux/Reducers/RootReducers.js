import { combineReducers } from "redux";
import { changeQuant, changingLiveStatus, gettingProductData } from "./EventReducers";

const rootReducers = combineReducers({
    gettingProduct:gettingProductData,
    liveStatus:changingLiveStatus,
    quantity:changeQuant,
})

export default rootReducers;