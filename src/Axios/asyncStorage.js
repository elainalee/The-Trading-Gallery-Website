import AsyncStorage from "@react-native-async-storage/async-storage";

// All constant variables stored in AsyncStorage
const STATUS = "status";
const USERID = "userID";
const CARTID = "cartID";
const JWT = "jwt";
const EMAIL = "email";


// Getters
export const getStatus = async () => {
    const status = await AsyncStorage.getItem(STATUS);
    return status;
}

export const getUserID = async () => {
    const userID = await AsyncStorage.getItem(USERID);
    return userID;
}

export const getCartID = async () => {
    const cartID = await AsyncStorage.getItem(CARTID);
    return cartID;
}

export const getEmail = async () => {
    const email = await AsyncStorage.getItem(EMAIL);
    return email;
}

export const getJWT = async () => {
    const jwt = await AsyncStorage.getItem(JWT);
    return jwt;
}


// Setters
export const setStatus = async (newStatus) => {
    await AsyncStorage.setItem(STATUS, newStatus);
}

export const setEmail = async (email) => {
    await AsyncStorage.setItem(EMAIL, email);
}

export const setJWT = async (jwt) => {
    await AsyncStorage.setItem(JWT, jwt);
}

export const setUserInfo = async (user) => {
    await AsyncStorage.setItem(USERID, user?._id);
    await AsyncStorage.setItem(CARTID, user?.cartID);
}

export const removeAll = async () => {
    await AsyncStorage.removeItem(JWT);
    await AsyncStorage.removeItem(STATUS);
    await AsyncStorage.removeItem(USERID);
    await AsyncStorage.removeItem(CARTID);
}