import axios from "axios";
import BASE_URL from "../Axios/BASE_URL";

import { AUTH_INVALID, ERROR, SUCCESS } from "../utils/constants";
import { getUser } from "./userReducer";
import { getSeller } from "./sellerReducer";
import { getStatus, removeAll, setEmail, setJWT, setStatus } from "../Axios/asyncStorage";


export const checkJWT = () => async (dispatch, getState) => {
    try {
        const status = await getStatus();

        if (status === "user") {
            dispatch(getUser());
        } else if (status === "seller") {
            dispatch(getSeller());
        }

        return SUCCESS;

    } catch (err) {
        if (err.message !== AUTH_INVALID) {
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

        await setJWT(data.jwt);
        await setStatus("user");
        await setEmail(email);
        
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
        await setEmail(email);
        
        return SUCCESS;

    } catch (err) {
        console.log("logInSeller err :>> ", err?.response?.data?.error);
        return err?.response?.data?.error;
    }
}

export const logOut = () => async (dispatch, getState) => {
    await removeAll();
    dispatch({ type: "HOME/LOGOUT" });
    
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

        await setJWT(data.jwt);
        await setStatus("user");
        await setEmail(userInfo.email);
        
        return SUCCESS;
    } catch (err) {
        console.log("signUp err :>> ", err?.response?.data?.error);
        return err?.response?.data?.error;
    }
    
}