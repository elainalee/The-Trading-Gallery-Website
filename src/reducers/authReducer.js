import axios from "axios";
import BASE_URL from "../Axios/BASE_URL";

import client from "../Axios/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_INVALID, ERROR, SUCCESS } from "../utils/constants";


const initialState = {
    loggedIn: false,
    seller: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUTH/LOGIN":
            return {
                ...state,
                loggedIn: true,
        }

        case "AUTH/LOGINSELLER":
            return {
                ...state,
                loggedIn: true,
                seller: true,
        }

        case "AUTH/LOGOUT":
            return {
                ...state,
                loggedIn: false,
                seller: false,
        }

        default:
            return state;
    }
}


export const checkJWT = () => async (dispatch, getState) => {
    try {
        const url = BASE_URL + "/token";
        const res = await client.post(url);

        const data = res.data;

        await AsyncStorage.setItem("jwt", data.jwt);

        dispatch({ type: "AUTH/LOGIN" });
        return SUCCESS;

    } catch (err) {
        if (err.message !== AUTH_INVALID) {
            return ERROR;
        }
    }
}

export const logIn = (email, password) => async (dispatch, getState) => {
    try {
        const url = BASE_URL + "/home/login";

        const payload = {
            email,
            password
        };

        const res = await axios.post(url, payload);

        const data = res.data;

        await AsyncStorage.setItem("jwt", data.jwt);
        await AsyncStorage.setItem("email", email);

        dispatch({ type: "AUTH/LOGIN" });
        
        return SUCCESS;

    } catch (err) {
        return ERROR;
    }
}

export const logInSeller = (email, password) => async (dispatch, getState) => {
    try {
        const url = BASE_URL + "/home/loginSeller";

        const payload = {
            email,
            password
        };

        const res = await axios.post(url, payload);

        const data = res.data;

        await AsyncStorage.setItem("jwt", data.jwt);
        await AsyncStorage.setItem("email", email);

        dispatch({ type: "AUTH/LOGINSELLER" });
        
        return SUCCESS;

    } catch (err) {
        return ERROR;
    }
}

export const logOut = () => async (dispatch, getState) => {
    AsyncStorage.removeItem("jwt")
        .then((status) => {
            dispatch({ type: "HOME/LOGOUT" });
        });
    
    return SUCCESS;
}

export const signUp = (userInfo) => async (dispatch, getState) => {
    try {
        const url = BASE_URL + "/home/signup";

        const payload = {
            ...userInfo
        }

        await AsyncStorage.setItem("email", userInfo.email);

        const res = await axios.post(url, payload);
        
        return SUCCESS;
    } catch (err) {
        return ERROR;
    }
    
}


export default authReducer;