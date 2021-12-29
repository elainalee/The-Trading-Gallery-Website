import axios from "axios";
import client from "../Axios/auth";
import BASE_URL from "../Axios/BASE_URL";
import { SUCCESS } from "../utils/constants";


const initialState = {
    seller: undefined,
}

const sellerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELLER/SETSELLER":
            return {
                ...state,
                seller: action.payload.seller,
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

export default sellerReducer;