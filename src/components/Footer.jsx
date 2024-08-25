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
import { fetchGlobalInfo } from "@/services/trips/queries";
import { useQuery } from "@tanstack/react-query";

const Footer = () => {
  const { data } = useQuery({
    queryKey: ["footer"], // Object form for query key
    queryFn: fetchGlobalInfo,
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
              title="about us"
              desc="  We strongly support best practice sharing across our operations around
          the world"
            />
            <Button asChild variant="primary" className="py-6 px-7">
              <NavLink to="/about-us">Book Now</NavLink>
            </Button>
          </div>
          <div>
            <FooterSectionHeader title="contact us" />
            <DynamicInfoSection infoList={contactLinks} />
          </div>
          <div>
            <FooterSectionHeader title="quick links" />
            <DynamicInfoSection infoList={linksList} />
          </div>
          <div>
            <FooterSectionHeader
              title="reach us"
              desc="you can reach us by :"
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
            &copy; Copyrights reserved by Ahmed Kamal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
