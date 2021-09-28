import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import userReducer from "./userReducer";

const appReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
})

const rootReducer = (state, action) => {
    // if (action.type === "HOME/LOGOUT") {
    //     state = undefined;
    // }

    return appReducer(state, action);
}

export default rootReducer;