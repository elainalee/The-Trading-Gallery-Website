import { combineReducers } from "redux";
import blogsReducer from "./blogsReducer";
import cartReducer from "./cartReducer";
import contentsReducer from "./contentsReducer";
import paymentReducer from "./paymentReducer";
import productsReducer from "./productsReducer";
import sellerReducer from "./sellerReducer";
import userReducer from "./userReducer";

const appReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    seller: sellerReducer,
    products: productsReducer,
    contents: contentsReducer,
    blogs: blogsReducer,
    payments: paymentReducer,
});

const rootReducer = (state, action) => {
    if (action.type === "HOME/LOGOUT") {
        state.user = undefined;
        state.cart = undefined;
        state.seller = undefined;
        state.payments = undefined;
    }

    return appReducer(state, action);
}

export default rootReducer;