import { egyptImg } from "@/assets";
import { AboutInfoBox, OurServiceBox, SectionHeader } from "@/components";
import { aboutInfoList } from "@/data";
import useScrollToTop from "@/hooks/useScrollToTop";
import { fetchWhyUsInfo } from "@/services/trips/queries";
import { useQuery } from "@tanstack/react-query";
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
  const { data } = useQuery({
    queryKey: ["whyUs"], // Object form for query key
    queryFn: fetchWhyUsInfo,
  });
  const services = data?.services ?? [];

  return (
    <div className="min-h-screen py-36">
      <div className="container">
        <SectionHeader introText="ABOUT US" className="mb-5 text-center" />

        <AboutInfoBox aboutInfoList={aboutInfoList} />

        <div className="flex flex-col lg:flex-row mt-10 justify-center gap-10 mb-10">
          <div className="flex-1">
            <SectionHeader
              introText="SeaCrew Team"
              desc=" Welcome to SeaCrew, your ultimate gateway to exploring the
              timeless wonders of Egypt. We are passionate about crafting
              unforgettable travel experiences that immerse you in the rich
              history, vibrant culture, and breathtaking landscapes of this
              ancient land."
              className="mb-6 lg:mb-16 text-center lg:text-left max-w-[600px]"
            />
            <SectionHeader
              subTitle="our story"
              desc="Founded with a deep love for Egypt and a desire to share its magic
            with the world, [Your Company Name] has been providing exceptional
            travel services for [X] years. Our team of dedicated travel experts
            and local guides are committed to ensuring that each journey is
            unique, enriching, and tailored to your interests and preferences."
              className="max-w-[800px]"
              subTitleProps={{ className: "text-black" }}
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
          <SectionHeader introText="why choose us ?" />
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
