import axios from "axios";
import client from "../Axios/auth";
import BASE_URL from "../Axios/BASE_URL";

import { ERROR, SUCCESS } from "../utils/constants";

const initialState = {
    clientSecret: "",

    totalAmount: undefined,
    subtotalAmount: undefined,
    taxAmount: undefined,
    shippingAmount: undefined,

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
                shippingAmount: action.payload.shippingAmount,
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

export const getPaymentIntent = (paymentInfo, deliveryChoice) => async (
    dispatch,
    getState
  ) => {
    try {
      const state = getState();
      const cartID = state.user.user.cartID;

      const shippingChoice = deliveryChoice ? state.payments?.shippingOptions?.[deliveryChoice] : undefined;

      const url = BASE_URL + "/payment/create-payment-intent/" + cartID;

      const payload = {
        paymentInfo,
        shippingChoice
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
            shippingAmount: data.shippingAmount,
            taxAmount: data.taxAmount,
        },
      });
  
      return SUCCESS;
  
    } catch (err) {
      console.log("getPaymentIntent err :>> ", err?.response?.data?.error);
      return err?.response?.data?.error;
    }
};

export const generateReceipt = (clientSecret, billingAddress) => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();

    // console.log("client secret in generate ", clientSecret);
    // console.log("billingAddress  in generate ", billingAddress);

    const url = BASE_URL + "/receipts/generateReceipt/" + clientSecret;

    const payload = {
      billingAddress: {
        ...billingAddress,
        country: "CA"
      }
    };

    // console.log("generateReceipt url: ", url);

    const res = await client.post(url, payload);

    // console.log("res ", res);

    const data = res.data;

    console.log(data);

    return data.receiptID;

  } catch (err) {
    console.log("generateReceipt err :>> ", err?.response?.data?.error);
    return ERROR;
  }
};

export const getReceiptDetail = (receiptID) => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();

    const url = BASE_URL + "/receipts/getReceipt/" + receiptID;


    // console.log("generateReceipt url: ", url);

    const res = await client.get(url);


    const data = res.data;

    console.log(data);

    return data;

  } catch (err) {
    console.log("getReceiptDetail err :>> ", err?.response?.data?.error);
    return ERROR;
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