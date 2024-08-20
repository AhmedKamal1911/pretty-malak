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
const fetchTrips = async (typeName) => {
  // Make the API request with query parameters
  const filters =
    typeName !== "all"
      ? {
          filters: {
            type: {
              typeName: {
                $eq: typeName,
              },
            },
          },
        }
      : {};

  const filteredQuery = qs.stringify({
    populate: "*",
    ...filters,
  });

  const response = await axiosInstance.get(`/trips?${filteredQuery}`);
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

const fetchRelatedTrips = async (typeName, tripId) => {
  // Construct query parameters
  const relatedTripsQuery = qs.stringify({
    populate: "*",
    filters: {
      type: {
        typeName: {
          $eq: typeName,
        },
      },
      id: {
        $ne: tripId,
      },
    },
  });
  // Make the API request with query parameters
  const response = await axiosInstance.get(`/trips?${relatedTripsQuery}`);

  return response.data;
};

const fetchTripTypes = async () => {
  const trips = await axiosInstance.get(`/trips?${queryAll}`);
  // Extract unique trip types from fetched trips

  const uniqueTripTypes = [
    ...new Set(trips.data.data?.map((trip) => trip.type.typeName)),
  ];

  return uniqueTripTypes;
};

const fetchGlobalInfo = async () => {
  // Construct query parameters

  // Make the API request with query parameters
  const response = await axiosInstance.get(`/global?${queryAll}`);
  const globalInfo = response?.data;
  return globalInfo;
};

export {
  fetchTrips,
  fetchSpecialTrips,
  fetchTripData,
  fetchRelatedTrips,
  fetchTripTypes,
};
