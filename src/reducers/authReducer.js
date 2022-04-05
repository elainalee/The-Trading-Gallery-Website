import axios from "axios";
import BASE_URL from "../Axios/BASE_URL";

import client from "../Axios/auth";

import { AUTH_INVALID, ERROR, SUCCESS } from "../utils/constants";
import { getUser } from "./userReducer";
import { getSeller } from "./sellerReducer";
import { getStatus, removeAll, setJWT, setStatus } from "../Axios/asyncStorage";


const initialState = {
    loggedInUser: undefined,
    loggedInSeller: undefined,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUTH/LOGINUSER":
            return {
                ...state,
                loggedInUser: true,
                loggedInSeller: false,
        }

        case "AUTH/LOGINSELLER":
            return {
                ...state,
                loggedInUser: false,
                loggedInSeller: true,
        }

        case "AUTH/LOGOUT":
            return {
                ...state,
                loggedInUser: false,
                loggedInSeller: false,
        }

        case "AUTH/USER_NOT_LOGGED_IN":
            return {
                ...state,
                loggedInUser: false,
        }

        case "AUTH/SELLER_NOT_LOGGED_IN":
            return {
                ...state,
                loggedInSeller: false,
        }

        default:
            return state;
    }
}


export const checkJWT = () => async (dispatch, getState) => {
    try {
        console.log("----1: in checkjwt");
        const status = await getStatus();

        console.log("----2: got status. ", status);

        if (status === "user") {
            console.log("checkJWT: case of a !user!");
            dispatch({ type: "AUTH/LOGINUSER" });
            dispatch(getUser());
        } else if (status === "seller") {
            console.log("checkJWT: case of a !seller!");
            dispatch({ type: "AUTH/LOGINSELLER" });
            dispatch(getSeller());
        }

        return SUCCESS;

    } catch (err) {
        if (err.message !== AUTH_INVALID) {
            console.log("-----invalid!!!!");
            return ERROR;
        }
    }
}

export const requestForResetCode = (email) => async (dispatch, getState) => {
    try {
        const url = BASE_URL + "/home/generate-reset-code";

        const payload = {
            email,
        };

        const res = await axios.post(url, payload);

        const data = res.data;

        console.log("--",data);

        return SUCCESS;

    } catch (err) {
        console.log("requestForResetCode err :>> ", err?.response?.data?.error);
        return err?.response?.data?.error;
    }
}

export const checkResetCode = (email, resetCode) => async (dispatch, getState) => {
    try {
        const url = BASE_URL + "/home/check-reset-code";

        const payload = {
            email,
            resetCode
        };

        const res = await axios.post(url, payload);

        const data = res.data;

        console.log("--",data);

        return SUCCESS;

    } catch (err) {
        console.log("checkResetCode err :>> ", err?.response?.data?.error);
        return err?.response?.data?.error;
    }
}

export const resetPassword = (email, resetCode, resetPassword) => async (dispatch, getState) => {
    try {
        const url = BASE_URL + "/home/reset-password";

        const payload = {
            email,
            resetCode,
            resetPassword
        };

        const res = await axios.post(url, payload);

        const data = res.data;

        return SUCCESS;

    } catch (err) {
        console.log("resetPassword err :>> ", err?.response?.data?.error);
        return err?.response?.data?.error;
    }
}


export const logInUser = (email, password) => async (dispatch, getState) => {
    try {
        const url = BASE_URL + "/home/login";

        const payload = {
            email,
            password
        };

        const res = await axios.post(url, payload);

        const data = res.data;

        // await AsyncStorage.setItem("jwt", data.jwt);
        await setJWT(data.jwt);
        await setStatus("user");
        // await AsyncStorage.setItem("email", email);

        // await AsyncStorage.setItem("status", "user");

        dispatch({ type: "AUTH/LOGINUSER" });
        
        return SUCCESS;

    } catch (err) {
        console.log("logInUser err :>> ", err?.response?.data?.error);
        return err?.response?.data?.error;
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

        await setJWT(data.jwt);
        await setStatus("seller");

        // await AsyncStorage.setItem("jwt", data.jwt);
        // await AsyncStorage.setItem("email", email);

        // await AsyncStorage.setItem("status", "seller");

        dispatch({ type: "AUTH/LOGINSELLER" });
        
        return SUCCESS;

    } catch (err) {
        console.log("logInSeller err :>> ", err?.response?.data?.error);
        return err?.response?.data?.error;
    }
}

export const logOut = () => async (dispatch, getState) => {
    await removeAll();
    dispatch({ type: "HOME/LOGOUT" });
    dispatch({ type: "AUTH/LOGOUT" });
    // AsyncStorage.removeItem("jwt")
    //     .then((status) => {
    //         AsyncStorage.removeItem("status");
    //         dispatch({ type: "HOME/LOGOUT" });
    //         dispatch({ type: "AUTH/LOGOUT" });
    //     });
    
    return SUCCESS;
}

export const signUp = (userInfo) => async (dispatch, getState) => {
    try {
        const url = BASE_URL + "/home/signup";

        const payload = {
            ...userInfo
        }

        const res = await axios.post(url, payload);

        console.log("--?");

        const data = res.data;

        // await AsyncStorage.setItem("jwt", data.jwt);
        await setJWT(data.jwt);

        dispatch({ type: "AUTH/LOGINUSER" });

        // await AsyncStorage.setItem("email", userInfo.email);
        
        return SUCCESS;
    } catch (err) {
        console.log("signUp err :>> ", err?.response?.data?.error);
        // return ERROR;
        return err?.response?.data?.error;
    }
    
}


export default authReducer;