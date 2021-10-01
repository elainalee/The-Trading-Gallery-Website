import axios from "axios";
import BASE_URL from "../Axios/BASE_URL";
import { SUCCESS } from "../utils/constants"


const initialState = {
  items: null,
}

const productsReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case "PRODUCTS/SETITEMS":
            console.log("insdie reducer", action.payload.items);
            return {
                ...state,
                items: action.payload.items,
            }

        default:
            return state;
    }
}

export const getProducts = () => async (
    dispatch,
    getState
  ) => {
    try {

      const BASE_URL = "https://callisto-server.netlify.app/";
      // const url = "/api/products/getItems";
      const url = "https://callisto-server.netlify.app" + "/.netlify/functions/api/products/getItems";
      const res = await axios.get(url);
      const data = res.data;
  
      dispatch({
        type: "PRODUCTS/SETITEMS",
        payload: {
          items: data,
        },
      });

      return SUCCESS;
  
    } catch (err) {
      console.log("getProducts err :>> ", err.message);
      return err.message;
    }
  };


export default productsReducer;