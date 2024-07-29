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
