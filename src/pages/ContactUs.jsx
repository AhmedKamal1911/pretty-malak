import { slideImg1 } from "@/assets";
import { ContactForm, SectionHeader } from "@/components";

import useScrollToTop from "@/hooks/useScrollToTop";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation("global");
  useScrollToTop();
  return (
    <div className="relative min-h-screen py-36 ">
      <div
        style={{ backgroundImage: `url('${slideImg1}')` }}
        className="absolute inset-0 z-[-1] bg-cover blur-[5px]"
      />
      <div className="container">
        <div className="flex flex-col items-stretch lg:flex-row bg-white rounded-xl min-h-[934px]">
          <div className="flex-1">
            <img
              src={slideImg1}
              alt=""
              className="w-full h-full object-[50%_center] lg:object-cover p-[5px] rounded-l-xl rounded-r-none "
            />
          </div>
          <div className="flex flex-col flex-1  p-2 md:p-5 lg:p-12">
            <SectionHeader
              className="mb-8"
              introText={t("contactUsPage.introText")}
              desc={t("contactUsPage.desc")}
            />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
