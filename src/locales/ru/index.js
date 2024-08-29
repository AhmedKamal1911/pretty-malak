const RU_LANG = {
  global: {
    loadingText: "Загрузка",
    timingSystem: {
      AM: "утром",
      PM: "вечером",
    },
    inputs: {
      country: {
        introText: "Выберите страну...",
        notFound: "Страна не найдена.",
        searchCountry: "Поиск страны...",
      },
      date: {
        selectText: "Выберите",
        dateInFuture: {
          tomorrow: "завтра",
          "in 3 days": "Через 3 дня",
          "in a week": "Через неделю",
          "in 15 days": "Через 15 дней",
        },
      },
    },
    toasts: {
      messageToast: {
        successMessage: "Ваше сообщение отправлено.",
        failedMessage: "Не удалось отправить, что-то не так!",
      },
    },
    contactForm: {
      name: "Полное имя :",
      email: "Электронная почта :",
      subject: "Введите тему :",
      message: "Введите здесь свое сообщение :",
      contactFormButtonLabel: "Подтверждать",
      validation: {
        emailRequired: "Введите свой адрес электронной почты.",
        emailInvalid: "Укажите действующий адрес электронной почты.",
        messageRequired: "Пожалуйста, введите ваше сообщение.",
        nameMin: "Ваше имя должно быть длиной не менее 2 символов.",
        nameMax: "Ваше имя не должно превышать 50 символов.",
        subjectMin: "Пожалуйста, введите тему.",
        subjectMax:
          "Тема слишком длинная, она должна быть не длиннее 30 символов.",
      },
    },
    bookTripForm: {
      firstName: "Ваше имя :",
      lastName: "Фамилия :",
      email: "Электронная почта :",
      phoneNumber: "Введите свой номер телефона :",
      hotelName: "Введите название вашего отеля :",
      checkDate: "Выберите дату",

      adult: "количество взрослых",
      child: "количество детей",
      message: "Введите здесь свое сообщение.",
      bookTripFormButtonLabel: "Подтверждать",
      validation: {
        emailRequired: "Требуется адрес электронной почты",
        emailInvalid: "Неверный адрес электронной почты",
        messageRequired: "Сообщение обязательно",
        firstNameMin: "Имя должно быть длиной не менее 2 букв.",
        firstNameMax: "Имя должно содержать не более 50 букв.",
        lastNameMin: "Фамилия должна быть длиной не менее 2 букв.",
        lastNameMax: "Фамилия должна содержать не более 50 букв.",
        phoneNumberMin: "Номер телефона должен содержать не менее 10 цифр.",
        phoneNumberInvalid: "Неверный номер телефона",
        hotelNameRequired: "Название отеля обязательно",
        adultNumberMin: "Количество взрослых должно быть не менее 1",
        childNumberNegative: "Номер ребенка должен быть не менее 0 или более",
        checkDateRequired: "Укажите дату заезда.",
        countryRequired: "Страна обязательна",
      },
    },
  },

  homePage: {
    introSection: {
      subTitle: "Опыт путешествий",
      learnMoreTitle: "узнать больше",
      managerName: "Seif Haraz",
      managerRank: "администратор",
    },
    aboutUsSection: {
      subTitle: "Кто мы",
      introText: "Почувствуйте магию Египта",
      aboutDesc:
        "Добро пожаловать в SeaCrew, ваш главный шлюз для исследования вечных чудес Египта. Мы увлечены созданием незабываемых путешествий, которые погрузят вас в богатую историю, яркую культуру и захватывающие дух пейзажи этой древней земли!",
      aboutButtonLabel: "Читать далее",
      dateLabel: "Год с",
    },
    infiniteSlider: {
      0: "Приключение",
      1: "Пляж",
      2: "Культурный",
      3: "Семья",
      4: "Роскошь",
      5: "Природа",
      6: "археологический",
      7: "Море",
      8: "Расслабление",
      9: "Сафари",
    },
    specialOffersSection: {
      subTitle: "Специальные предложения",
      introText: "Получите специальные предложения на поездки",
    },
    whyChooseUsSection: {
      achievementsSection: {
        0: "Клиенты",
        1: "Места",
        2: "Наши награды",
        3: "обзоры",
      },
      heading: "Почему стоит выбрать нас",
      subTitle: "Первоклассный полный сервис",
    },
    tripsSection: {
      subTitle: "Наши поездки",
      introText: "Посмотрите на наши поездки",
      tripsButtonLabel: "Показать все",
    },
  },
  contactUsPage: {
    introText: "СВЯЖИТЕСЬ С НАМИ",
    desc: "Отвечаем на ваши вопросы в любое время",
  },
  faqsPage: {
    subTitle: "Часто задаваемые вопросы",
    introText: "Есть вопрос?",
    desc: "Добро пожаловать на нашу страницу Часто задаваемые вопросы! Здесь вы найдете ответы на самые распространенные вопросы о наших услугах, и ​​политиках. Если вы ищете информацию о наших предложениях, устраняете неполадки или просто хотите узнать, как все работает, у нас есть все необходимое.",
    formIntroText: "У вас еще есть вопросы?",
  },
  aboutUsPage: {
    introText: "Кто мы",
    companyInfo: {
      introText: "Команда SeaCrew",
      desc: "Добро пожаловать в SeaCrew, ваш главный шлюз для исследования вечных чудес Египта. Мы увлечены созданием незабываемых путешествий, которые погрузят вас в богатую историю, яркую культуру и захватывающие дух пейзажи этой древней земли.",
    },
    companyStory: {
      introText: "Наша история",
      desc: "Основанная с глубокой любовью к Египту и желанием поделиться его магией с миром, компания Seacrow предоставляет исключительные туристические услуги уже 19 лет. Наша команда преданных своему делу экспертов по путешествиям и местных гидов стремится сделать каждое путешествие уникальным, обогащающим и соответствующим вашим интересам и предпочтениям.",
    },
    secondaryIntroText: "Почему стоит выбрать нас ?",
  },
  tripsPage: {
    subTitle: "Все поездки",
    introText: "Изучите наши поездки",
    selectTypeMenu: {
      title: "Выберите тип",
      types: {
        activities: "Деятельность",
        safari: "Сафари",
        sea: "Море",
      },
    },
  },
  tripInfo: {
    types: {
      activities: "Деятельность",
      safari: "Сафари Путешествие",
      sea: "Морское путешествие",
    },
    navbarInfo: {
      information: "Информация",
      tourPlan: "План тура",
      faq: "вопросы",
      reviews: "Обзоры",
    },
    tripTime: {
      "part day": "Неполный день",
      "one day": "полный день",
    },
    toursFrom: "Туры из",
    priceForAdultText: "Взрослый",
    priceForChildText: "Ребенок * До 11 лет",
    tripDetails: {
      tourTitleText: "путешествие",
      tourFromText: "Тур из",
      departureTimeText: "Время отправления",
      tripDaysText: "дни поездки",
      returnTimeText: "Время возвращения",
      maxGuestsText: "Максимальное количество гостей",
    },
    tripDays: {
      daily: "Ежедневно",
    },

    tripOverviewDetails: {
      highlightsText: "Самое интересное",
      includedServicesText: "Включенные услуги",
      notIncludedText: "Не включенные услуги",
      dontForgetText: "Не забудьте",
    },
    tourPlanIntroText: "План тура",
    questionsIntroText: "Часто задаваемые вопросы",
    relatedTripsSubTitle: "Похожие поездки",
    emptyRelatedTripsText: "Нет связанных поездок",
    clientReviews: {
      introText: "Отзывы клиентов",
      desc: "Здесь вы можете оставить отзыв",
      reviewButtonLabel: "Обзор",
    },
    exploreButtonLabel: "показывать",
  },
  footer: {
    aboutUsSection: {
      title: "О нас",
      desc: "Мы решительно поддерживаем обмен передовым опытом в рамках нашей деятельности по всему миру.",
      aboutUsButtonLabel: "Узнайте, кто мы",
    },
    contactUsSectionTitle: "Связаться с нами",
    quickLinksSectionTitle: "Быстрые ссылки",
    reachUsSection: {
      title: "Свяжитесь с нами",
      desc: "Вы можете связаться с нами:",
    },
    copyRightReference: "Авторские права защищены SeaCrew",
    poweredBy: "Питаться от : ",
  },
};

export default RU_LANG;
