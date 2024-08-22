import {
  // camp,
  clientReviews,
  customExperince,
  // diving,
  // egypt,
  // egyptImg,
  // kingdom,
  // paradise,
  seaLocations,
  // slideImg1,
  // slideImg2,
  // slideImg3,
  // smallSlideImg1,
  // smallSlideImg2,
  // smallSlideImg3,
  trophy,
  // yacht,
} from "@/assets";

// export const languages = [
//   {
//     name: "EN",
//     icon: kingdom,
//   },
//   {
//     name: "AR",
//     icon: egypt,
//   },
// ];
// export const languageImages = {
//   EN: kingdom,
//   AR: egypt,
// };

// export const heroSliderImages = [
//   {
//     large: slideImg1,
//     small: smallSlideImg1,
//   },
//   {
//     large: slideImg2,
//     small: smallSlideImg2,
//   },
//   {
//     large: slideImg3,
//     small: smallSlideImg3,
//   },
// ];

// export const features = [
//   {
//     icon: yacht,
//     travelImg: smallSlideImg1,
//     title: "sea Cruises",
//     url: "/trips",
//   },
//   {
//     icon: diving,
//     travelImg: smallSlideImg1,
//     title: "diving trips",
//     url: "/trips",
//   },
//   {
//     icon: camp,
//     travelImg: smallSlideImg1,
//     title: "safari trips",
//     url: "/trips",
//   },
// ];

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

// export const allTrips = [
//   {
//     id: 1,
//     time: "One Day",
//     departureTime: "Around 4:30 AM",
//     tripDays: "Daily",
//     returnTime: "Around 8:30 PM",
//     maxGuests: 25,
//     tourFrom: "tours From Hurghada",
//     desc: "This program is for you if you've always wanted to discover more about the mysterious history of ancient Egypt.On this tour, you'll visit the biggest temple in the world, the Karnak Temple, the magnificent temple of Queen Hatshepsut, one of the strongest women who could rule Egypt for about 20 years, and has a beautiful temple with a unique female architecture on the west bank of luxor, especially designed for her by her famous architect the enormous Memnon Statues, two of the biggest ancient Egyptian statues with a height around 20 meters, belongs to the grandpa of king Tutankhamun.More and more secrets about ancient Pharaohs you will discover on this trip, don't miss it.",
//     type: "safari",
//     title: "Day Trip To Luxor From Hurghada",
//     tour: "Day Trip From Hurghada To Luxor",
//     adultPrice: 35,
//     childPrice: 10,
//     offer: 10,
//     imgs: [paradise, slideImg2, slideImg3, egyptImg],
//     tourPlan: [
//       "Our guide will pick you up from your hotel and by a comfortable air-conditioned bus you will go to one day tour to Cairo.",
//       "In Cairo with a guide you will visit the great pyramids of Giza, the Sphinx. and the valley temple of king Chephren.",
//       "Then you will go for lunch, then visiting natural oil shop. After that you will go to old Cairo for visiting the Hanging Church, Abi Sergius Church and Amr Ibn Al-Assa Mosque.",
//       "At the end of the day, driving back to Hurghada, arriving to the hotel around 11:30 PM",
//     ],

//     highlights: [
//       "Karnak Temples",
//       "The Temple of Queen Hatshepsut",
//       "The colossal statues of Memnon",
//       "Boat trip by the River Nile",
//       "Banana island ( Optional )",
//     ],
//     includedServices: [
//       "Transfer from your hotel by air conditioned comfort coach.",
//       "Entrance fees for all the mentioned below sightseeings.",
//       "English-speaking guide.",
//       "Open buffet lunch.",
//     ],
//     notIncluded: [
//       "Drinks",
//       "Extra charge 5$ per person for the transfer from Sahl Hashesh and Makadi Bay hotels.",
//       "Banana Island ( Optional )",
//     ],
//     dontForget: [
//       "Comfort shoes and wear.",
//       "Breakfast box ( you should book it in the hotel ).",
//       "Drinking water.",
//       "Pocket money for souvenirs.",
//       "Sun glasses | Sun Hat",
//     ],
//   },
//   {
//     id: 2,
//     time: "One Day",
//     departureTime: "Around 4:30 AM",
//     tripDays: "Daily",
//     returnTime: "Around 8:30 PM",
//     maxGuests: 25,
//     tourFrom: "tours From Hurghada",
//     desc: "This program is for you if you've always wanted to discover more about the mysterious history of ancient Egypt.On this tour, you'll visit the biggest temple in the world, the Karnak Temple, the magnificent temple of Queen Hatshepsut, one of the strongest women who could rule Egypt for about 20 years, and has a beautiful temple with a unique female architecture on the west bank of luxor, especially designed for her by her famous architect the enormous Memnon Statues, two of the biggest ancient Egyptian statues with a height around 20 meters, belongs to the grandpa of king Tutankhamun.More and more secrets about ancient Pharaohs you will discover on this trip, don't miss it.",
//     type: "safari",
//     title: "Day Trip To Luxor From Hurghada",
//     tour: "Day Trip From Hurghada To Luxor",
//     adultPrice: 35,
//     childPrice: 10,
//     offer: 10,
//     imgs: [paradise, slideImg2, slideImg3, egyptImg],
//     tourPlan: [
//       "Our guide will pick you up from your hotel and by a comfortable air-conditioned bus you will go to one day tour to Cairo.",
//       "In Cairo with a guide you will visit the great pyramids of Giza, the Sphinx. and the valley temple of king Chephren.",
//       "Then you will go for lunch, then visiting natural oil shop. After that you will go to old Cairo for visiting the Hanging Church, Abi Sergius Church and Amr Ibn Al-Assa Mosque.",
//       "At the end of the day, driving back to Hurghada, arriving to the hotel around 11:30 PM",
//     ],

//     highlights: [
//       "Karnak Temples",
//       "The Temple of Queen Hatshepsut",
//       "The colossal statues of Memnon",
//       "Boat trip by the River Nile",
//       "Banana island ( Optional )",
//     ],
//     includedServices: [
//       "Transfer from your hotel by air conditioned comfort coach.",
//       "Entrance fees for all the mentioned below sightseeings.",
//       "English-speaking guide.",
//       "Open buffet lunch.",
//     ],
//     notIncluded: [
//       "Drinks",
//       "Extra charge 5$ per person for the transfer from Sahl Hashesh and Makadi Bay hotels.",
//       "Banana Island ( Optional )",
//     ],
//     dontForget: [
//       "Comfort shoes and wear.",
//       "Breakfast box ( you should book it in the hotel ).",
//       "Drinking water.",
//       "Pocket money for souvenirs.",
//       "Sun glasses | Sun Hat",
//     ],
//   },
// ];
// export const specialTrips = allTrips.filter((trip) => trip.offer);

// export const clientQuestions = [
//   {
//     id: 1,
//     question: "how to book a trip?",
//     answer:
//       "It is very easy to book a trip. On our website you choose the trip you need, fill out the booking form and send it. You can also do it directly, through whatsapp, Viber, Telegram , Gmail. And our operator will answer you.",
//   },
//   {
//     id: 2,
//     question: "how to book private trip?",
//     answer:
//       "It is very easy to book a private trip. On our website you choose the trip you need, fill out the booking form and send it and contact with us to book it as private trip. You can also do it directly, through whatsapp, Viber, Telegram , Gmail. And our operator will answer you.",
//   },
//   {
//     id: 3,
//     question: "how and when to pay for the trip?",
//     answer:
//       "Almost all our trips are paid before the start of it, in our office or in the bus, or during the trip.",
//   },
//   {
//     id: 4,
//     question: "are we insured during the excursion?",
//     answer:
//       "The insurance company is a separate organization, and it gives you an insurance conditions that are valid anywhere in Egypt. Not only on trips, but also everywhere in Egypt. The insurance policy contains the contact numbers of the representatives of the insurance company in Egypt, by which you can directly contact them without help of the tour operator representative.",
//   },
// ];
