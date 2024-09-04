import {
  AboutUsSection,
  HeroSection,
  IntroSection,
  SpecialOffersSection,
  TripsSection,
  WhyChooseUsSection,
} from "@/components";

import useScrollToTop from "@/hooks/useScrollToTop";

const Home = () => {
  useScrollToTop();

  return (
    <main>
      <HeroSection />
      <IntroSection />
      <AboutUsSection />
      <SpecialOffersSection />
      <WhyChooseUsSection />
      <TripsSection />
    </main>
  );
};

export default Home;
