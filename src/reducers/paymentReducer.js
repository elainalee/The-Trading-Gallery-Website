import axios from "axios";
import client from "../Axios/auth";
import BASE_URL from "../Axios/BASE_URL";

import { SUCCESS } from "../utils/constants";

const initialState = {
    clientSecret: "",
    totalAmount: 0,
}

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
        case "PAYMENT/SETCLIENTSECRET":
            return {
                ...state,
                clientSecret: action.payload.clientSecret,
                totalAmount: action.payload.totalAmount
            }

        default:
            return state;
    }
}

export const getPaymentIntent = (cartItems) => async (
    dispatch,
    getState
  ) => {
    try {
      const url = BASE_URL + "/payment/create-payment-intent";

      const payload = {
        items: cartItems
      }
        // const payload = JSON.stringify({ items: [{ id: "xl-tshirt" }] });

        console.log("getpaymentintent url: ", url);
        console.log("getpaymentintent payload: ", payload);

      const res = await client.post(url, payload);

      console.log("res ", res);

      const data = res.data;

      console.log(data);

      dispatch({
        type: "PAYMENT/SETCLIENTSECRET",
        payload: {
            clientSecret: data.clientSecret,
            totalAmount: data.totalAmount
        },
      });
  
      return SUCCESS;
  
    } catch (err) {
      console.log("getPaymentIntent err :>> ", err.message);
      return err.message;
    }
  };




export default paymentReducer;