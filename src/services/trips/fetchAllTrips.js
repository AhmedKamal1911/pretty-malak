import axiosInstance from "./axiosInstance";

const fetchAllTrips = async () => {
  const response = await axiosInstance.get("/trips");

  return response.data;
};
export default fetchAllTrips;
