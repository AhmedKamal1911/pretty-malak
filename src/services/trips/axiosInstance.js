import { flattenAttributes } from "@/utils/flattenAttributes";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://localhost:1337/api`,
  headers: {
    Authorization: `Bearer 41fcfcf496460c9bf8197e94329bf99cd307bfaba646c5f90d543f19f5a1216eaf2aba633f31e4166ded658d3e80e19f57080152a7ffe54db82237841abf9ed8f214e9452b3503c84dee2c84b528e014dc4a9a05dabdd9d3c9137112b961324314a7f9654181e84da8afab31c85473ba6005d7e4845189f241f4078861dded58`,
    "Content-Type": "application/json",
  },
  transformResponse: (data) => flattenAttributes(JSON.parse(data)),
  // .. other options
});
// You can also log to verify

export default axiosInstance;
