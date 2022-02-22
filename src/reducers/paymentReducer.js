import axios from "axios";
import client from "../Axios/auth";
import BASE_URL from "../Axios/BASE_URL";

import { SUCCESS } from "../utils/constants";

const initialState = {
    clientSecret: "",
    totalAmount: undefined,
    subtotalAmount: undefined,
    taxAmount: undefined,
    shippingOptions: undefined,
}

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
        case "PAYMENT/SETCLIENTSECRET":
            return {
                ...state,
                clientSecret: action.payload.clientSecret,
                totalAmount: action.payload.totalAmount,
                subtotalAmount: action.payload.subtotalAmount,
                taxAmount: action.payload.taxAmount,
            }

        case "PAYMENT/SETSHIPPINGOPTIONS":
          return {
              ...state,
              shippingOptions: action.payload.shippingOptions,
          }

        default:
            return state;
    }
}

export const getPaymentIntent = (province, deliveryChoice) => async (
    dispatch,
    getState
  ) => {
    try {
      const state = getState();
      const cartID = state.user.user.cartID;

      const url = BASE_URL + "/payment/create-payment-intent/" + cartID;

      const payload = {
        province,
        deliveryChoice
      };

      console.log("getpaymentintent url: ", url);

      const res = await client.post(url, payload);

      console.log("res ", res);

      const data = res.data;

      console.log(data);

      dispatch({
        type: "PAYMENT/SETCLIENTSECRET",
        payload: {
            clientSecret: data.clientSecret,
            totalAmount: data.totalAmount,
            subtotalAmount: data.subtotalAmount,
            deliveryChoice: data.deliveryAmount,
            taxAmount: data.taxAmount,
        },
      });
  
      return SUCCESS;
  
    } catch (err) {
      console.log("getPaymentIntent err :>> ", err?.response?.data?.error);
      return err?.response?.data?.error;
    }
};


export const getShippingOptions = () => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();
    const cartID = state.user.user.cartID;

    const url = BASE_URL + "/payment/getShippingOptions/" + cartID;


    const res = await client.get(url);

    const data = res.data;

    dispatch({
      type: "PAYMENT/SETSHIPPINGOPTIONS",
      payload: {
          shippingOptions: data
      },
    });

    return SUCCESS;

  } catch (err) {
    console.log("getShippingOptions err :>> ", err?.response?.data?.error);
    return err?.response?.data?.error;
  }
};





export default paymentReducer;