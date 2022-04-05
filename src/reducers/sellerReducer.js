import axios from "axios";
import client from "../Axios/auth";
import BASE_URL from "../Axios/BASE_URL";
import { SUCCESS } from "../utils/constants";

const initialState = {
    seller: undefined,
    products: undefined,
    blogs: undefined,
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

        case "SELLER/ADDPRODUCT":
          return {
              ...state,
              products: state.products + action.payload.product,
          }

        case "SELLER/SETBLOGS":
          return {
              ...state,
              blogs: action.payload.blogs,
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
      const url = BASE_URL + "/sellers/getSeller";
      const res = await client.get(url);
      const data = res.data;
  
      dispatch({
        type: "SELLER/SETSELLER",
        payload: {
            seller: data,
        },
      });

      return SUCCESS;
  
    } catch (err) {
      console.log("getSeller err :>> ", err?.response?.data?.error);
      return err?.response?.data?.error;
    }
};

export const getSellerBlogs = () => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();
    console.log(state);

    const url = BASE_URL + "/blogs/getSellerBlogs/" + state.seller.seller._id;

    const res = await axios.get(url);
    const data = res.data;

    dispatch({
      type: "SELLER/SETBLOGS",
      payload: {
        blogs: data,
      },
    });

    return SUCCESS;

  } catch (err) {
    console.log("getSellerProducts err :>> ", err?.response?.data?.error);
    return err?.response?.data?.error;
  }
};

export const getSellerProducts = () => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();

    const url = BASE_URL + "/products/getSellerItems/" + state.seller.seller._id;

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
    console.log("getSellerProducts err :>> ", err?.response?.data?.error);
    return err?.response?.data?.error;
  }
};

export const addSellerProduct = (title, brand, description, price, mainImageLink) => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();

    const url = BASE_URL + "/sellers/addProduct";

    const payload = {
      mainImage: mainImageLink,
      title,
      brand,
      price,
      description,
      sellerID: state.seller.seller._id
    }

    const res = await client.post(url, payload);
    const data = res.data;

    // TODO: change. fix.
    dispatch({
      type: "SELLER/ADDPRODUCT",
      payload: {
        blogs: data,
      },
    });

    return SUCCESS;

  } catch (err) {
    console.log("addSellerProduct err :>> ", err?.response?.data?.error);
    return err?.response?.data?.error;
  }
};


export const addUpdateSellerProduct = (productId, productInfo) => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();
    console.log(state);

    const url = BASE_URL + "/sellers/addUpdateProduct/" + (productId ?? "");

    const payload = {
      ...productInfo,
      sellerID: state.seller.seller._id,
    }
    console.log(payload);


    console.log("addUpdateSellerProduct url : ", url);
    console.log("payload is: ", payload);

    const res = await client.post(url, payload);
    const data = res.data;

    dispatch({
      type: "SELLER/SETPRODUCTS",
      payload: {
        products: data,
      },
    });

    return SUCCESS;

  } catch (err) {
    console.log("addUpdateSellerProduct err :>> ", err?.response?.data?.error);
    return err?.response?.data?.error;
  }
};

export const addUpdateSellerBlog = (productId, title, mainImage, body, isMainBlog, isSubBlog) => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();
    console.log(state);

    const url = BASE_URL + "/sellers/addUpdateBlog/" + (productId ?? "");

    const payload = {
      title,
      mainImage,
      body,
      mainBlog: isMainBlog,
      subBlog: isSubBlog
    };

    const res = await client.post(url, payload);
    const data = res.data;

    dispatch({
      type: "SELLER/SETBLOGS",
      payload: {
        blogs: data,
      },
    });

    return SUCCESS;

  } catch (err) {
    console.log("addUpdateSellerBlog err :>> ", err?.response?.data?.error);
    return err?.response?.data?.error;
  }
};


export const addBlog = (title, mainImage, body, isMainBlog, isSubBlog) => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();
    console.log(state);

    const url = BASE_URL + "/sellers/addBlog";

    const payload = {
      title,
      mainImage,
      body,
      mainBlog: isMainBlog,
      subBlog: isSubBlog
    };

    const res = await client.post(url, payload);
    const data = res.data;

    dispatch({
      type: "BLOGS/ADDBLOG",
      payload: {
        blog: data,
      },
    });

    return SUCCESS;

  } catch (err) {
    console.log("addBlog err :>> ", err?.response?.data?.error);
    return err?.response?.data?.error;
  }
};

export default sellerReducer;