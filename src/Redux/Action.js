import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { actionTypes } from "./ActionTypes";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const getProduct = () => async(dispatch)=>{
    const response = await axios.get("http://localhost:5000/getProduct");
    const data = response.data; 

    dispatch({
        type:actionTypes.GET_PRODUCT_DATA,
        payload:data
    })

}

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
const MySwal = withReactContent(Swal);

const handleSuccess =()=>{
  console.log("success")
  MySwal.fire({
    icon:"success",
    title:'Payment was successful',
    timer:4000,
  })
}
const handlefailure =()=>{
  MySwal.fire({
    icon:"error",
    title:'Payment failed',
    timer:4000,
  })
}
export const handleClick= (product) => async (dispatch) => {
    // console.log("handle click", product);
   
    //stripe.js instance
    dispatch({type:actionTypes.UDATE_LIVE_STATUS});
    const stripe = await stripePromise;
    try {
      const response = await axios({
        url: "http://localhost:5000/create-checkout-session",
        method: "post",
        data:product
      });
      console.log("response", response);
      const session = response.data;
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      dispatch({type:actionTypes.UDATE_LIVE_STATUS});

      if (result.error) {
        console.log("redirectToCheckout Fails", result.error);
        dispatch(handlefailure())
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

export const updatingLiveStatus = () => {
    return{
        type:actionTypes.UDATE_LIVE_STATUS
    }
}

export const increaseQuant = () => {
  return{
    type:actionTypes.QUANT_UP
  }
}

export const decreaseQuant = () => {
  return{
    type:actionTypes.QUANT_DOWN
  }
}