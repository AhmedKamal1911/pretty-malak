import axiosInstance from "./axiosInstance";
import qs from "qs";

// Function to fetch a single trip by ID
const queryAll = qs.stringify({
  populate: "*",
});

async function fetchTripData(tripId) {
  // Construct the URL with the trip ID and query parameters
  const response = await axiosInstance.get(`/trips/${tripId}?${queryAll}`);

  // Response data will contain the trip details
  const tripData = response;
  console.log(tripData);
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
              $eq: typeName,
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

const fetchRelatedTrips = async (typeName, slug) => {
  console.log({ typeName, slug });
  // Construct query parameters
  const relatedTripsQuery = qs.stringify({
    populate: "*",
    filters: {
      type: {
        $eq: typeName,
      },
      slug: {
        $ne: slug,
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
    ...new Set(trips.data.data?.map((trip) => trip.type)),
  ];

  return uniqueTripTypes;
};

// Navbar and footer data
const fetchNavbarData = async () => {
  const navbarDataQuery = qs.stringify({
    populate: "logoText,navLinks",
  });
  const response = await axiosInstance.get(`/global?${navbarDataQuery}`);
  const navbarData = response?.data;

  return navbarData;
};
const fetchFooterData = async () => {
  const footerDataQuery = qs.stringify({
    populate: "navLinks,contactLinks",
  });
  const response = await axiosInstance.get(`/global?${footerDataQuery}`);
  const footerData = response?.data;

  return footerData;
};

const fetchHeroSectionInfo = async () => {
  const response = await axiosInstance.get(`/hero-section?${queryAll}`);
  const heroInfo = response?.data;
  return heroInfo;
};

const fetchWhyUsInfo = async () => {
  const response = await axiosInstance.get(`/why-us-section?${queryAll}`);
  const whyUsInfo = response?.data;
  return whyUsInfo;
};

const fetchFaqInfo = async () => {
  const response = await axiosInstance.get(`/faq-page?${queryAll}`);
  const faqsInfo = response?.data;
  return faqsInfo;
};

const fetchIntroInfo = async () => {
  const iconAndImgQuery = qs.stringify({
    populate: {
      featuresBox: {
        populate: {
          icon: true,
          travelImg: true,
        },
      },
    },
  });
  const response = await axiosInstance.get(`/intro-section?${iconAndImgQuery}`);
  const introInfo = response?.data;
  return introInfo;
};

const fetchClientQuestions = async () => {
  const response = await axiosInstance.get(`/trip-question?${queryAll}`);
  const clientQuestions = response?.data;
  return clientQuestions;
};

const tripOrders = async (data) => {
  const response = await axiosInstance.post("/orders", { data: data });
  return response.data;
};

const signIn = async (loginCredentials) => {
  const response = await axiosInstance.post("/auth/local", loginCredentials);
  return response.data;
};

export {
  fetchTrips,
  fetchSpecialTrips,
  fetchTripData,
  fetchRelatedTrips,
  fetchTripTypes,
  fetchNavbarData,
  fetchFooterData,
  fetchHeroSectionInfo,
  fetchWhyUsInfo,
  fetchFaqInfo,
  fetchIntroInfo,
  fetchClientQuestions,
  tripOrders,
  signIn,
};
