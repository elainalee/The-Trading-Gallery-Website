import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_INVALID } from "../utils/constants";

const client = axios.create();

client.interceptors.request.use(
    async (config) => {
        const jwt = await AsyncStorage.getItem("jwt");

        console.log("in auth: jwt ", jwt);

        if (jwt) {
            config.headers["Authorization"] = "Bearer " + jwt;
        }
        return config;
    },
    (err) => {
        Promise.reject(err);
    }
);

client.interceptors.response.use(
    (res) => res,
    async (err) => {
        if (err.response && err.response.status === 401) {
            await AsyncStorage.removeItem("jwt");
            throw new Error(AUTH_INVALID);
        } else {
            throw err;
        }
    }
)

export default client;