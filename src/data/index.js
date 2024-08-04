import {
  camp,
  diving,
  egypt,
  kingdom,
  slideImg1,
  slideImg2,
  slideImg3,
  smallSlideImg1,
  smallSlideImg2,
  smallSlideImg3,
  yacht,
} from "@/assets";

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
    to: "/about",
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

export const specialOffers = [
  {
    id: 1,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    title:
      "Hurghada To Luxor Day Trip + Air Ballonsssssssssssssssssssssssssssssssssssssssssss",
  },
  {
    id: 2,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg2,
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 3,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg3,
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 4,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 5,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 6,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 7,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 8,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 9,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 10,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
    title: "Hurghada To Luxor Day Trip + Air Ballon",
  },
  {
    id: 11,
    time: "One Day",
    offer: "10%",
    price: 135,
    img: slideImg1,
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
