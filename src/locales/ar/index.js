const AR_LANG = {
  global: {
    loadingText: "تحميل",
    timingSystem: {
      AM: "صباحًا",
      PM: "مساءً",
    },
    inputs: {
      country: {
        introText: "اختر البلد...",
        notFound: "لم يتم العثور علي البلد.",
        searchCountry: "ابحث عن البلد...",
      },
      date: {
        selectText: "اختر",
        dateInFuture: {
          tomorrow: "غدا",
          "in 3 days": "خلال 3 ايام",
          "in a week": "خلال اسبوع",
          "in 15 days": "خلال 15 يوم",
        },
      },
    },
    toasts: {
      messageToast: {
        successMessage: "لقد تم ارسال رسالتك.",
        failedMessage: "فشل الإرسال هناك خطأ ما!",
      },
    },
    contactForm: {
      name: "الاسم بالكامل :",
      email: "البريد الالكتروني :",
      subject: "اكتب موضوعك :",
      message: "اكتب رسالتك هنا :",
      contactFormButtonLabel: "تأكيد",
      validation: {
        emailRequired: "من فضلك قم بأدخال البريد الالكتروني.",
        emailInvalid: "يرجى ادخال عنوان بريد إلكتروني صالح.",
        messageRequired: "من فضلك أدخل رسالتك.",
        nameMin: "يجب أن يتكون اسمك من حرفين على الأقل.",
        nameMax: "لا يجب أن يتجاوز اسمك 50 حرفًا.",
        subjectMin: "الرجاء إدخال الموضوع.",
        subjectMax: "الموضوع طويل جدًا، يجب أن يتكون من 30 حرفًا أو أقل.",
      },
    },
    bookTripForm: {
      firstName: "الاسم الاول :",
      lastName: "الاسم الاخير :",
      email: "البريد الالكتروني :",
      phoneNumber: "اكتب رقم هاتفك :",
      hotelName: "اكتب اسم الفندق :",
      checkDate: "اختر موعد الحجز",

      adult: "عدد البالغين",
      child: "عدد الاطفال",
      message: "اكتب رسالتك هنا.",
      bookTripFormButtonLabel: "تأكيد",
      validation: {
        emailRequired: "عنوان البريد الإلكتروني مطلوب",
        emailInvalid: "عنوان البريد الإلكتروني غير صالح",
        messageRequired: "لا يمكن ترك محتوي الرسالة فارغاً",
        firstNameMin: "يجب أن يكون الاسم الأول مكونًا من حرفين على الأقل",
        firstNameMax: "يجب أن يكون الاسم الأول مكونًا من 50 حرفًا أو أقل",
        lastNameMin: "يجب أن يكون اسم العائلة مكونًا من حرفين على الأقل",
        lastNameMax: "يجب أن يكون اسم العائلة مكونًا من 50 حرفًا أو أقل",
        phoneNumberMin: "يجب أن يتكون رقم الهاتف من 10 أرقام على الأقل",
        phoneNumberInvalid: "رقم الهاتف غير صالح",
        hotelNameRequired: "اسم الفندق مطلوب",
        adultNumberMin: "يجب أن يكون عدد البالغين 1 على الأقل",
        childNumberNegative: "يجب أن يكون عدد الاطفال 0 علي الاقل ",
        checkDateRequired: "تاريخ تسجيل الوصول مطلوب",
        countryRequired: "الدولة مطلوبة",
      },
    },
  },

  homePage: {
    introSection: {
      subTitle: "تجربة السفر",
      learnMoreTitle: "اعرف المزيد",
      managerName: "سيف حراز",
      managerRank: "المدير التنفيذي",
    },
    aboutUsSection: {
      subTitle: "من نحن",
      introText: "استمتع بسحر مصر",
      aboutDesc:
        "مرحبًا بك في SeaCrew، بوابتك المثالية لاستكشاف عجائب مصر الخالدة. نحن شغوفون بتصميم تجارب سفر لا تُنسى تغمرك بالتاريخ الغني والثقافة النابضة بالحياة والمناظر الطبيعية الخلابة لهذه الأرض القديمة!",
      aboutButtonLabel: "اقرأ المزيد",
      dateLabel: "منذ عام",
    },
    infiniteSlider: {
      0: "مغامرة",
      1: "شاطئ",
      2: "ثقافي",
      3: "عائلي",
      4: "رفاهية",
      5: "طبيعي",
      6: "اثري",
      7: "بحر",
      8: "استرخاء",
      9: "سفاري",
    },
    specialOffersSection: {
      subTitle: "العروض الخاصة",
      introText: "احصل على عروض خاصة جدًا على الرحلات",
    },
    whyChooseUsSection: {
      achievementsSection: {
        0: "العملاء",
        1: "الاماكن",
        2: "جوائزنا",
        3: "التقييمات",
      },
      heading: "لماذا تختارنا",
      subTitle: "خدمة كاملة من الدرجة الأولى",
    },
    tripsSection: {
      subTitle: "رحلاتنا",
      introText: "قم بإلقاء نظرة على رحلاتنا",
      tripsButtonLabel: "اظهر الجميع",
    },
  },
  contactUsPage: {
    introText: "تواصل معنا",
    desc: "خدمة كاملة علي مدار اليوم والاسبوع",
  },
  faqsPage: {
    subTitle: "الأسئلة الشائعة",
    introText: "لديك سؤال ؟",
    desc: "مرحبًا بك في صفحة الأسئلة الشائعة لدينا! ستجد هنا إجابات على الأسئلة الأكثر شيوعًا حول خدماتنا وسياساتنا. سواء كنت تبحث عن معلومات حول عروضنا، أو استكشاف مشكلة ما وإصلاحها، أو مجرد فضول حول كيفية عمل الأشياء، فنحن نوفر لك كل ما تحتاجه.",
    formIntroText: "هل لا يزال لديك سؤال ؟",
  },
  aboutUsPage: {
    introText: "من نحن",
    companyInfo: {
      introText: "فريق SeaCrew",
      desc: "مرحبًا بك في SeaCrew، بوابتك المثالية لاستكشاف عجائب مصر الخالدة. نحن شغوفون بتصميم تجارب سفر لا تُنسى تغمرك بالتاريخ الغني والثقافة النابضة بالحياة والمناظر الطبيعية الخلابة لهذه الأرض القديمة.",
    },
    companyStory: {
      introText: "قصتنا",
      desc: "تأسست شركة SeaCrew بحب عميق لمصر ورغبة في مشاركة سحرها مع العالم، وتقدم خدمات سفر استثنائية منذ 19 عامًا. يلتزم فريقنا من خبراء السفر المتفانين والمرشدين المحليين بضمان أن تكون كل رحلة فريدة ومثرية ومصممة خصيصًا لاهتماماتك وتفضيلاتك.",
    },
    secondaryIntroText: "لماذا تختارنا ؟",
  },
  tripsPage: {
    subTitle: "جميع الرحلات",
    introText: "استكشف رحلاتنا",
    selectTypeMenu: {
      title: "اختر النوع",
      types: {
        activities: "نشاطات",
        safari: "سفاري",
        sea: "بحر",
      },
    },
  },
  tripInfo: {
    types: {
      activities: "نشاطات",
      safari: "رحلة سفاري",
      sea: "رحلة بحرية",
    },
    navbarInfo: {
      information: "معلومات",
      tourPlan: "الخطة",
      faq: "الاسئلة",
      reviews: "التقييمات",
    },
    tripTime: {
      "part day": "جزء من اليوم",
      "one day": "يوم",
    },
    toursFrom: "الرحلة من",
    priceForAdultText: "البالغين",
    priceForChildText: "الاطفال * حتي 11 سنة",
    tripDetails: {
      tourTitleText: "الرحلة",
      tourFromText: "الرحلة من",
      departureTimeText: "وقت المغادرة",
      tripDaysText: "ايام توافر الرحلة",
      returnTimeText: "وقت العودة",
      maxGuestsText: "الحد الاقصي للضيوف",
    },
    tripDays: {
      daily: "يوميا",
    },

    tripOverviewDetails: {
      highlightsText: "ابرز الانشطة",
      includedServicesText: "الخدمات المشمولة",
      notIncludedText: "غير شامل",
      dontForgetText: "لا تنسي",
    },
    tourPlanIntroText: "خطة الرحلة",
    questionsIntroText: "الاسئلة الشائعة",
    relatedTripsSubTitle: "رحلات ذات صلة",
    emptyRelatedTripsText: "لا توجد رحلات ذات صلة",
    clientReviews: {
      introText: "تقييمات العملاء",
      desc: "هنا يمكنك ان تترك تقييم",
      reviewButtonLabel: "تقييم",
    },
    exploreButtonLabel: "عرض",
  },
  footer: {
    aboutUsSection: {
      title: "من نحن",
      desc: "نحن ندعم بشدة مشاركة أفضل الممارسات عبر عملياتنا في جميع أنحاء العالم",
      aboutUsButtonLabel: "اعرف من نكون",
    },
    contactUsSectionTitle: "اتصل بنا",
    quickLinksSectionTitle: "روابط سريعة",
    reachUsSection: {
      title: "كيف تصل الينا",
      desc: "يمكنك الوصول الينا من خلال :",
    },
    copyRightReference: "جميع الحقوق محفوظه لدي SeaCrew",
    poweredBy: "مدعوم بواسطة : ",
  },
};
export default AR_LANG;
