import axios from "axios";
import BASE_URL from "../Axios/BASE_URL";
import { SUCCESS } from "../utils/constants"


const initialState = {
  items: undefined,
  categoryItems: undefined,
  bestSellers: undefined,
}

const productsReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case "PRODUCTS/SETITEMS":
            return {
                ...state,
                items: action.payload.items,
            }

        case "PRODUCTS/SETCATEGORYITEMS":
          return {
              ...state,
              categoryItems: action.payload.items,
          }
    
        case "PRODUCTS/SETBESTSELLERS":
          return {
              ...state,
              bestSellers: action.payload.bestSellers,
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
      const url = BASE_URL + "/products/getItems";
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

export const getCategoryProducts = (categoryID) => async (
  dispatch,
  getState
) => {
  try {
    const url = BASE_URL + "/products/getItems/" + categoryID ;

    console.log("url is : ", url);

    const res = await axios.get(url);
    const data = res.data;


    dispatch({
      type: "PRODUCTS/SETCATEGORYITEMS",
      payload: {
        items: data,
      },
    });

    return SUCCESS;

    // return data;

  } catch (err) {
    console.log("getCategoryProducts err :>> ", err.message);
    return err.message;
  }
};

export const getBestSellers = () => async (
  dispatch,
  getState
) => {
  try {
    const url = BASE_URL + "/products/getBestSellers";
    const res = await axios.get(url);
    const data = res.data;

    dispatch({
      type: "PRODUCTS/SETBESTSELLERS",
      payload: {
        bestSellers: data,
      },
    });

    return SUCCESS;

  } catch (err) {
    console.log("getBestSellers err :>> ", err.message);
    return err.message;
  }
};

export const getProductInfo = (productId) => async (
  dispatch,
  getState
) => {
  try {
    const url = BASE_URL + "/products/" + productId;
    const res = await axios.get(url);
    const data = res.data;

    return data;

  } catch (err) {
    console.log("getProductInfo err :>> ", err.message);
    return err.message;
  }
};

export default productsReducer;