import axios from "axios";
import { useSelector } from "react-redux";
import client from "../Axios/auth";
import BASE_URL from "../Axios/BASE_URL";

import { SUCCESS } from "../utils/constants";

const initialState = {
  items: undefined,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CART/SETCART":
            return {
                ...state,
                items: action.payload.items,
            }

        default:
            return state;
    }
}

export const getCart = () => async (
    dispatch,
    getState
  ) => {
    try {
      const state = getState();
      const cartID = state.user.user.cartID;

      const url = BASE_URL + "/carts/getCart/" + cartID;
      console.log(url);
      const res = await client.get(url);
      const data = res.data;

      console.log("data ", data);

  
      dispatch({
        type: "CART/SETCART",
        payload: {
          items: data.products,
        },
      });

      return SUCCESS;
  
    } catch (err) {
      console.log("getCart err :>> ", err.message);
      return err.message;
    }
};

export const updateItem = (productID, quantity) => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();
    const cartID = state.user.user.cartID;

    console.log("updateItem quantity: ", quantity);
    const url = BASE_URL + "/carts/updateItem/" + cartID;

    console.log("url: ", url);

    const payload = {
      productID,
      quantity
    };

    console.log("payload: ", payload);

    const res = await client.post(url, payload);
    const data = res.data;

    console.log("data ", data);


    dispatch({
      type: "CART/SETCART",
      payload: {
        items: data.products,
      },
    });

    return SUCCESS;

  } catch (err) {
    console.log("getCart err :>> ", err.message);
    return err.message;
  }
};

export const addItem = (productID, quantity) => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();
    const cartID = state.user.user.cartID;

    console.log("addItem quantity: ", quantity);
    const url = BASE_URL + "/carts/addItem/" + cartID;

    console.log("url: ", url);

    const payload = {
      productID,
      quantity
    };

    console.log("payload: ", payload);

    const res = await client.post(url, payload);
    const data = res.data;

    console.log("data ", data);


    dispatch({
      type: "CART/SETCART",
      payload: {
        items: data.products,
      },
    });

    return SUCCESS;

  } catch (err) {
    console.log("addItem err :>> ", err.message);
    return err.message;
  }
};

export const removeItem = (productID) => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();
    const cartID = state.user.user.cartID;

    const url = BASE_URL + "/carts/deleteItem/" + cartID;

    console.log("url: ", url);

    const payload = {
      productID,
    };

    console.log("payload: ", payload);

    const res = await client.post(url, payload);
    const data = res.data;

    console.log("data ", data);


    dispatch({
      type: "CART/SETCART",
      payload: {
        items: data.products,
      },
    });

    return SUCCESS;

  } catch (err) {
    console.log("addItem err :>> ", err.message);
    return err.message;
  }
};

export default cartReducer;