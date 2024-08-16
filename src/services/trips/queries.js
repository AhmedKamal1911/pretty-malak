import axiosInstance from "./axiosInstance";
import qs from "qs";

// Function to fetch a single trip by ID
const queryAll = qs.stringify({ populate: "*" });
async function fetchTripData(tripId) {
  // Construct the URL with the trip ID and query parameters
  const response = await axiosInstance.get(`/trips/${tripId}?${queryAll}`);

  // Response data will contain the trip details
  const tripData = response;

  return tripData;
}

// Function to fetch all trips
const fetchAllTrips = async () => {
  // Make the API request with query parameters
  const response = await axiosInstance.get(`/trips?${queryAll}`);

  return response.data;
};

const fetchSpecialTrips = async () => {
  // Construct query parameters
  const specialOffersOnlyQuery = qs.stringify({
    populate: "*",
    filters: {
      offer: {
        $ne: null,
      },
    },
  });
  // Make the API request with query parameters
  const response = await axiosInstance.get(`/trips?${specialOffersOnlyQuery}`);

  return response.data;
};

export { fetchAllTrips, fetchSpecialTrips, fetchTripData };
