import axiosInstance from "./axiosInstance";
import qs from "qs";

// Function to fetch a single trip by ID
const queryAll = qs.stringify({
  populate: "*",
});

async function fetchTripData(slug, populateAll = true) {
  const tripSlugQuery = qs.stringify({
    ...(populateAll ? { populate: "*" } : {}),
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });
  // Construct the URL with the trip ID and query parameters
  const { data } = await axiosInstance.get(`/trips?${tripSlugQuery}`);
  // Response data will contain the trip details
  return data.data[0];
}

// Function to fetch all trips
const fetchTrips = async (typeName) => {
  // Make the API request with query parameters
  const filteredQuery = qs.stringify({
    populate: "*",
    ...(typeName !== "all"
      ? {
          filters: {
            type: {
              $eq: typeName,
            },
          },
        }
      : {}),
  });

  const { data } = await axiosInstance.get(`/trips?${filteredQuery}`);
  return data;
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
  const { data } = await axiosInstance.get(`/trips?${specialOffersOnlyQuery}`);

  return data;
};

const fetchRelatedTrips = async (typeName, slug) => {
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
  const { data } = await axiosInstance.get(`/trips?${relatedTripsQuery}`);

  return data;
};

const fetchTripTypes = async () => {
  const { data } = await axiosInstance.get(`/trips?${queryAll}`);
  // Extract unique trip types from fetched trips

  const uniqueTripTypes = [...new Set(data.data?.map((trip) => trip.type))];

  return uniqueTripTypes;
};

// Navbar and footer data
const fetchNavbarData = async () => {
  const navbarDataQuery = qs.stringify({
    populate: "logoText,navLinks",
  });
  const { data } = await axiosInstance.get(`/global?${navbarDataQuery}`);
  return data;
};
const fetchFooterData = async () => {
  const footerDataQuery = qs.stringify({
    populate: "navLinks,contactLinks",
  });
  const { data } = await axiosInstance.get(`/global?${footerDataQuery}`);

  return data;
};

const fetchHeroSectionInfo = async () => {
  const { data } = await axiosInstance.get(`/hero-section?${queryAll}`);

  return data;
};

const fetchWhyUsInfo = async () => {
  const { data } = await axiosInstance.get(`/why-us-section?${queryAll}`);

  return data;
};

const fetchFaqInfo = async () => {
  const { data } = await axiosInstance.get(`/faq-page?${queryAll}`);

  return data;
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
  const { data } = await axiosInstance.get(`/intro-section?${iconAndImgQuery}`);

  return data;
};

const fetchClientQuestions = async () => {
  const { data } = await axiosInstance.get(`/trip-question?${queryAll}`);

  return data;
};

const fetchTripOrders = async (token) => {
  const { data } = await axiosInstance.get("/orders", {
    headers: {
      Authorization: `Bearer ${token}`, // Add the token to the Authorization header
    },
  });
  return data;
};

const tripOrders = async (body) => {
  const { data } = await axiosInstance.post("/orders", { data: body });
  return data;
};

const signIn = async (loginCredentials) => {
  const { data } = await axiosInstance.post("/auth/local", loginCredentials);
  return data;
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
  fetchTripOrders,
  tripOrders,
  signIn,
};
