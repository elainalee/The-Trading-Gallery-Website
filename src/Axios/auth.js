import axios from "axios";

import { AUTH_INVALID } from "../utils/constants";
import { getJWT, removeAll } from "./asyncStorage";


const client = axios.create();

client.interceptors.request.use(
    async (config) => {
        const jwt = await getJWT();

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
            await removeAll();
            throw new Error(AUTH_INVALID);
        } else {
            throw err;
        }
    }
)

export default client;