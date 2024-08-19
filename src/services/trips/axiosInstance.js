import { flattenAttributes } from "@/utils/flattenAttributes";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_TOURS_BASE_URL}/api`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TRIPS_TOKEN}`,
    "Content-Type": "application/json",
  },
  transformResponse: (data) => flattenAttributes(JSON.parse(data)),
  // .. other options
});
// You can also log to verify

export default axiosInstance;
