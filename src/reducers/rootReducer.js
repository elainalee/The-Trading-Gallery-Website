import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import userReducer from "./userReducer";

const appReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    products: productsReducer,
})

const rootReducer = (state, action) => {
    if (action.type === "HOME/LOGOUT") {
        state.auth = undefined;
        state.user = undefined;
    }

    return appReducer(state, action);
}

export default rootReducer;