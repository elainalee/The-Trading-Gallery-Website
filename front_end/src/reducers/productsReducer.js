// import axios from "axios";
import BASE_URL from "../Axios/BASE_URL";

import client from "../Axios/auth";

const initialState = {
    products: null,
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCTS/SETPRODUCTS":
            return {
                ...state,
                user: action.payload.products,
            }

        default:
            return state;
    }
}

export default productsReducer;