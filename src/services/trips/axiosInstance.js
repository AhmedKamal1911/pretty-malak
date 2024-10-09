import { CURRENT_LANGUAGE_NAME } from "@/i18n";
import { flattenAttributes } from "@/utils/flattenAttributes";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_TOURS_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  transformResponse: (data) => flattenAttributes(JSON.parse(data)),
  // .. other options
});
// You can also log to verify
axiosInstance.interceptors.request.use(
  function (config) {
    config.params = {
      ...config.params,
      locale: CURRENT_LANGUAGE_NAME,
    };
    // Do something before request is sent

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
