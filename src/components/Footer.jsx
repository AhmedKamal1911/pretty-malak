import { DynamicInfoSection, FooterSectionHeader } from ".";
import { NavLink } from "react-router-dom";

import {
  dashedLines,
  facebook,
  instgram,
  unEvenWaves,
  whatsapp,
} from "@/assets";

import { Button } from "./ui/Button";
import { fetchFooterData } from "@/services/trips/queries";

import useQueryWithLocale from "@/hooks/useQueryWithLocale";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("global");
  const { data } = useQueryWithLocale({
    queryKey: ["footer"],
    queryFn: fetchFooterData,
  });

  const linksList = data?.navLinks ?? [];
  const contactLinks = data?.contactLinks ?? [];
  return (
    <footer className="bg-[#050a16] relative min-h-[50vh] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div
            className="absolute w-[494px] h-[465px] start-[-100px] top-0 bottom-0 "
            style={{ backgroundImage: `url(${unEvenWaves})` }}
            alt=""
          />
          <div
            className="absolute w-[247px] h-[477px] end-[0px] top-0 bottom-0"
            style={{ backgroundImage: `url(${dashedLines})` }}
            alt=""
          />
          <div>
            <FooterSectionHeader
              title={t("footer.aboutUsSection.title")}
              desc={t("footer.aboutUsSection.desc")}
            />
            <Button asChild variant="primary" className="py-6 px-7">
              <NavLink to="/about-us">
                {t("footer.aboutUsSection.aboutUsButtonLabel")}
              </NavLink>
            </Button>
          </div>
          <div>
            <FooterSectionHeader title={t("footer.contactUsSectionTitle")} />
            <DynamicInfoSection infoList={contactLinks} />
          </div>
          <div>
            <FooterSectionHeader title={t("footer.quickLinksSectionTitle")} />
            <DynamicInfoSection infoList={linksList} />
          </div>
          <div>
            <FooterSectionHeader
              title={t("footer.reachUsSection.title")}
              desc={t("footer.reachUsSection.desc")}
            />
            <div className="flex gap-3 mt-5">
              <NavLink to="https://www.facebook.com" className=" bg-white">
                <img src={facebook} alt="" className="w-[35px] h-[35px]" />
              </NavLink>
              <NavLink to="tel:01450151145">
                <img src={whatsapp} alt="" className="w-[35px] h-[35px]" />
              </NavLink>

              <NavLink to="tel:01450151145">
                <img src={instgram} alt="" className="w-[35px] h-[35px]" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="relative p-5 bg-[#363d5371]  gap-5">
          <p className="text-main text-xl text-center">
            &copy; {t("footer.copyRightReference")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
