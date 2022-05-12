import axios from "axios";

import { IAuthResponse } from "../types";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

$host.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status == 401 || error.response.status == 500) &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const response = await axios.get<IAuthResponse>(
          `${process.env.REACT_APP_API_URL}/user/refresh`,
          {
            withCredentials: true,
          }
        );

        localStorage.setItem("token", response.data.accessToken);
        return $host.request(originalRequest);
      } catch (e) {
        console.log("Not Authorized");
      }
    }

    throw error;
  }
);

$authHost.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.response.status == 401 || error.response.status == 500) &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const response = await axios.get<IAuthResponse>(
          `${process.env.REACT_APP_API_URL}/user/refresh`,
          {
            withCredentials: true,
          }
        );

        localStorage.setItem("token", response.data.accessToken);
        return $authHost.request(originalRequest);
      } catch (e) {
        console.log("Not Authorized");
      }
    }

    throw error;
  }
);

export { $host, $authHost };
