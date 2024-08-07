import { DynamicInfoSection, FooterSectionHeader } from ".";
import { NavLink } from "react-router-dom";
import { contactWays, links } from "@/data";
import { dashedLines, unEvenWaves } from "@/assets";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Button } from "./ui/Button";

const Footer = () => {
  return (
    <footer className="bg-[#050a16] relative min-h-[50vh] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div
            className="absolute w-[494px] h-[465px] left-[-100px] top-0 bottom-0 "
            style={{ backgroundImage: `url(${unEvenWaves})` }}
            alt=""
          />
          <div
            className="absolute w-[247px] h-[477px] right-[0px] top-0 bottom-0"
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
            <DynamicInfoSection infoList={contactWays} />
          </div>
          <div>
            <FooterSectionHeader title="quick links" />
            <DynamicInfoSection infoList={links} />
          </div>
          <div>
            <FooterSectionHeader
              title="reach us"
              desc="We strongly support best
practice sharing across our operations"
            />
          </div>
        </div>
        <div className="relative p-8 bg-[#363d5371] flex flex-col gap-5 md:flex-row justify-between items-center">
          <p className="text-main text-xl text-center md:text-left">
            &copy; Copyrights reserved by Ahmed Kamal
          </p>
          <div className="flex items-center gap-5">
            <NavLink to="" className=" bg-white">
              <FaFacebookSquare size="30px" color="#1877F2" />
            </NavLink>
            <NavLink to="tel:01450151145">
              <IoLogoWhatsapp color="#25d366" size="30px" />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
