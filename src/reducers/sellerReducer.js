import axios from "axios";
import client from "../Axios/auth";
import BASE_URL from "../Axios/BASE_URL";
import { SUCCESS } from "../utils/constants";


const initialState = {
    seller: undefined,
    products: undefined,
}

const sellerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELLER/SETSELLER":
            return {
                ...state,
                seller: action.payload.seller,
            }

        case "SELLER/SETPRODUCTS":
          return {
              ...state,
              products: action.payload.products,
          }

        default:
            return state;
    }
}

export const getSeller = () => async (
    dispatch,
    getState
  ) => {
    try {
      console.log("==== in get Seller");
      const url = BASE_URL + "/sellers/getSeller";
      const res = await client.get(url);
      const data = res.data;

      console.log("==== in get Seller, data is: ", data);
  
      dispatch({
        type: "SELLER/SETSELLER",
        payload: {
            seller: data,
        },
      });

      dispatch({ type: "AUTH/LOGINSELLER" });

      return SUCCESS;
  
    } catch (err) {
      console.log("getSeller err :>> ", err.message);
      return err.message;
    }
};

export const getSellerProducts = () => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();
    console.log(state);

    const url = BASE_URL + "/products/getSellerItems/" + state.seller.seller._id;

    console.log("getSellerProducts url : ", url);

    const res = await axios.get(url);
    const data = res.data;

    dispatch({
      type: "SELLER/SETPRODUCTS",
      payload: {
        products: data,
      },
    });

    return SUCCESS;

  } catch (err) {
    console.log("getSellerProducts err :>> ", err.message);
    return err.message;
  }
};

export default sellerReducer;