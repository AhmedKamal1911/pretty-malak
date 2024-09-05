import { egyptImg } from "@/assets";
import { AboutInfoBox, OurServiceBox, SectionHeader } from "@/components";

import { aboutInfoList } from "@/data";
import useQueryWithLocale from "@/hooks/useQueryWithLocale";
import useScrollToTop from "@/hooks/useScrollToTop";
import { fetchWhyUsInfo } from "@/services/trips/queries";
import { useTranslation } from "react-i18next";

import {
  FaBookOpen,
  FaHandsHelping,
  FaRegCompass,
  FaStar,
} from "react-icons/fa";
const iconMap = {
  FaBookOpen: FaBookOpen,
  FaHandsHelping: FaHandsHelping,
  FaRegCompass: FaRegCompass,
  FaStar: FaStar,
  // Add more icons as needed
};
const AboutUs = () => {
  useScrollToTop();
  const { t } = useTranslation("global");
  const { data } = useQueryWithLocale({
    queryKey: ["whyUs"], // Object form for query key
    queryFn: fetchWhyUsInfo,
  });
  const services = data?.services ?? [];

  return (
    <div className="min-h-screen py-36 overflow-hidden">
      <div className="container">
        <SectionHeader
          introText={t("aboutUsPage.introText")}
          className="mb-5 text-center"
        />

        <AboutInfoBox aboutInfoList={aboutInfoList} />

        <div className="flex flex-col lg:flex-row mt-10 justify-center gap-10 mb-10">
          <div className="flex-1">
            <SectionHeader
              introText={t("aboutUsPage.companyInfo.introText")}
              desc={t("aboutUsPage.companyInfo.desc")}
              className="mb-6 lg:mb-16 text-center lg:text-start max-w-[600px]"
            />
            <SectionHeader
              subTitle={t("aboutUsPage.companyStory.introText")}
              desc={t("aboutUsPage.companyStory.desc")}
              className="max-w-[800px]"
              subTitleClassName={{ className: "text-black" }}
            />
          </div>
          <div className="flex-1">
            <img
              src={egyptImg}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div>
          <SectionHeader introText={t("aboutUsPage.secondaryIntroText")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-[#f1f1f1] p-2 sm:p-10 rounded-lg mt-5">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <OurServiceBox
                  key={service.id}
                  IconComponent={IconComponent}
                  {...service}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
