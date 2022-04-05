import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import blogsReducer from "./blogsReducer";
import cartReducer from "./cartReducer";
import contentsReducer from "./contentsReducer";
import paymentReducer from "./paymentReducer";
import productsReducer from "./productsReducer";
import sellerReducer from "./sellerReducer";
import userReducer from "./userReducer";

const appReducer = combineReducers({
    user: userReducer,
    seller: sellerReducer,
    admin: adminReducer,

    cart: cartReducer,
    products: productsReducer,
    contents: contentsReducer,
    blogs: blogsReducer,
    payments: paymentReducer,
});

const rootReducer = (state, action) => {
    if (action.type === "HOME/LOGOUT") {
        state.user = undefined;
        state.seller = undefined;
        state.admin = undefined;

        state.cart = undefined;
        state.payments = undefined;
    }

    return appReducer(state, action);
}

export default rootReducer;