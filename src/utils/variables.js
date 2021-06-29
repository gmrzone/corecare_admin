import axios from "axios";
export const BASE_API_URL = process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000" : "https://afzalsaiyed.corecare.in";

axios.interceptors.request.use(
    (config) => {
        config.baseURL = BASE_API_URL;
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

export default axios;
