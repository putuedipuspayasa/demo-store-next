import { BASE_URL } from "@/domain/constants/apiRoutes";
import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000, // Timeout of 60 seconds
});

// Optional: Interceptors for request and response handling
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request config if needed (e.g., add headers)
    if (config.headers["Content-Type"] === undefined) {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful response
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
