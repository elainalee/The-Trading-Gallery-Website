import { combineReducers } from "redux";
import authReducer from "./authReducer";
import contentsReducer from "./contentsReducer";
import productsReducer from "./productsReducer";
import sellerReducer from "./sellerReducer";
import userReducer from "./userReducer";

const appReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    seller: sellerReducer,
    products: productsReducer,
    contents: contentsReducer,
})

const rootReducer = (state, action) => {
    if (action.type === "HOME/LOGOUT") {
        state.auth = undefined;
        state.user = undefined;
        state.seller = undefined;
    }

    return appReducer(state, action);
}

export default rootReducer;