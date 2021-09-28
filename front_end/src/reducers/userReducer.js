// import axios from "axios";
import BASE_URL from "../Axios/BASE_URL";

import client from "../Axios/auth";

const initialState = {
    user: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER/SETUSER":
            return {
                ...state,
                user: action.payload.user,
            }

        default:
            return state;
    }
}

export default userReducer;