import {
  camp,
  clientReviews,
  customExperince,
  diving,
  egypt,
  kingdom,
  seaLocations,
  slideImg1,
  slideImg2,
  slideImg3,
  smallSlideImg1,
  smallSlideImg2,
  smallSlideImg3,
  trophy,
  yacht,
} from "@/assets";
import {
  FaBookOpen,
  FaHandsHelping,
  FaRegCompass,
  FaStar,
} from "react-icons/fa";

export const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Trips",
    to: "/Trips",
  },
  {
    name: "FAQs",
    to: "/faqs",
  },

  {
    name: "About Us",
    to: "/about-us",
  },

  {
    name: "Contact Us",
    to: "/contact-us",
  },
];
export const languages = [
  {
    name: "EN",
    icon: kingdom,
  },
  {
    name: "AR",
    icon: egypt,
  },
];
export const languageImages = {
  EN: kingdom,
  AR: egypt,
};

export const heroSliderImages = [
  {
    large: slideImg1,
    small: smallSlideImg1,
  },
  {
    large: slideImg2,
    small: smallSlideImg2,
  },
  {
    large: slideImg3,
    small: smallSlideImg3,
  },
];

export const features = [
  {
    icon: yacht,
    travelImg: smallSlideImg1,
    title: "Luxury Cruises",
    url: "https://www.google.com",
  },
  {
    icon: camp,
    travelImg: smallSlideImg1,
    title: "Best-crewed yachts",
    url: "https://www.google.com",
  },
  {
    icon: diving,
    travelImg: smallSlideImg1,
    title: "Best Sailing Experience",
    url: "https://www.google.com",
  },
  {
    icon: yacht,
    travelImg: smallSlideImg1,
    title: "Best Sailing Experience",
    url: "https://www.google.com",
  },
];

export const allTrips = [
  {
    id: 1,
    time: "One Day",

    price: 135,
    img: slideImg1,
    type: "safari",
    title:
      "Hurghada To Luxor Day Trip + Air Ballonsssss sssss sssssss sssssss ssssssssss ssssss sss",
  },
  {
    id: 2,
    time: "One Day",

    price: 135,
    img: slideImg2,
    type: "safari",
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 3,
    time: "One Day",

    price: 135,
    img: slideImg3,
    type: "safari",
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 4,
    time: "One Day",

    price: 135,
    img: slideImg1,
    type: "safari",
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 5,
    time: "One Day",

    price: 135,
    img: slideImg1,
    type: "safari",
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 6,
    time: "One Day",

    price: 135,
    img: slideImg1,
    type: "safari",
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 7,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    type: "safari",
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 8,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    type: "sea",
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 9,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    type: "sea",
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 10,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    type: "sea",
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 11,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    type: "sea",
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 12,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 13,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 14,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 15,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
];
export const specialTrips = allTrips.filter((trip) => trip.offer);
export const contactWays = [
  {
    to: "tel:",
    name: "01054818953",
  },
  {
    to: "mailto:",
    name: "mohameD@gmail.com",
  },
  {
    to: "location",
    name: "30 Commercial Road Fratton, Australia",
  },
];

export const sliderBreakPoints = {
  // when window width is >= 640px (Tailwind: sm)
  640: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  // when window width is >= 768px (Tailwind: md)
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // when window width is >= 1024px (Tailwind: lg)
  1024: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  // when window width is >= 1280px (Tailwind: xl)
  1280: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

export const tripsTypes = [
  {
    value: "sea",
    label: "Sea",
  },
  {
    value: "safari",
    label: "Safari",
  },
];

export const travelCategories = [
  { value: "Adventure" },
  { value: "Beach" },
  { value: "Cultural" },
  { value: "Family" },
  { value: "Luxury" },
  { value: "Nature" },
  { value: "Road Trip" },
  { value: "Romantic" },
  { value: "Skiing" },
  { value: "Safari" },
];

export const clientQuestions = [
  {
    id: 1,
    question: "is it accessible?",
    answer: "yes it is",
  },
  {
    id: 2,
    question: "is it accessible?",
    answer: "yes it is",
  },
  {
    id: 3,
    question: "is it accessible?",
    answer: "yes it is",
  },
  {
    id: 4,
    question: "is it accessible?",
    answer: "yes it is",
  },
  {
    id: 5,
    question: "is it accessible?",
    answer: "yes it is",
  },
  {
    id: 6,
    question: "is it accessible?",
    answer: "yes it is",
  },
  {
    id: 7,
    question: "is it accessible?",
    answer:
      "yes it is sdfasfas fas fasfasf asfasas sss ssssf asfasffffffssssssssssssss ssssssssssssssssssss sssssssss ssssssssss ssssss ssss sssss ssssss ssssss ssssss ssssssss sss ssss  sssssssss s sssss sssss sssss sss ssssss ssssssss ssssss ssss sssssss sssssss sssss sssssss sssssss   sssssssssssss ssssss sss sssssssssss sssss ssssssss ssssss sssssss ssss sssss ssssss ssssss ssss sssssssssssss ssssssss ssssss sssssss ssss ssssssssss",
  },
  {
    id: 8,
    question: "is it accessible?",
    answer: "yes it is",
  },
];

export const aboutInfoList = [
  {
    id: 1,
    img: customExperince,
    count: "700",
    about: "Customers",
  },
  {
    id: 2,
    img: seaLocations,
    count: "30",
    about: "Locations",
  },
  {
    id: 3,
    img: trophy,
    count: "40",
    about: "our awards",
  },
  {
    id: 4,
    img: clientReviews,
    count: "800",
    about: "Reviews",
  },
];

export const ourServices = [
  {
    id: 1,
    icon: FaBookOpen,
    name: "Expert Knowledge",
    desc: "With extensive experience and a profound understanding of Egypt's heritage, our team offers insights and access to hidden gems that fewothers can.",
  },
  {
    id: 2,
    icon: FaRegCompass,
    name: "Customized Experiences",
    desc: "We believe every traveler is unique. Our personalized itineraries are designed to cater to your specific desires whether youre an adventurer, a history buff, or a luxury seeker.",
  },
  {
    id: 3,
    icon: FaStar,
    name: "Quality and Comfort",
    desc: "From handpicked accommodations to comfortable transportation and top-notch customer service, we prioritize your comfort and satisfaction at every step of your journey.",
  },
  {
    id: 4,
    icon: FaHandsHelping,
    name: "Client Service 24/7",
    desc: " Our strong relationships with local communities and businesses allow us to offer authentic experiences and support sustainable tourism practices.",
  },
];
