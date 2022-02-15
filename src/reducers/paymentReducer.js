import axios from "axios";
import client from "../Axios/auth";
import BASE_URL from "../Axios/BASE_URL";

import { SUCCESS } from "../utils/constants";

const initialState = {
    clientSecret: "",
}

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
        case "PAYMENT/SETCLIENTSECRET":
            return {
                ...state,
                clientSecret: action.payload.clientSecret,
            }

        default:
            return state;
    }
}

export const getPaymentIntent = () => async (
    dispatch,
    getState
  ) => {
    try {
      const url = BASE_URL + "/payment/test-payment";

      const payload = {
        items: [{ id: "xl-tshirt" }]
      }
        // const payload = JSON.stringify({ items: [{ id: "xl-tshirt" }] });

        console.log("getpaymentintent url: ", url);
        console.log("getpaymentintent payload: ", payload);

      const res = await axios.post(url, payload);

      console.log("res ", res);

      const data = res.data;

      console.log(data);

      dispatch({
        type: "PAYMENT/SETCLIENTSECRET",
        payload: {
            clientSecret: data.clientSecret,
        },
      });
  
      return SUCCESS;
  
    } catch (err) {
      console.log("getPaymentIntent err :>> ", err.message);
      return err.message;
    }
  };




export default paymentReducer;