import React from "react";
import { DynamicInfoSection, FooterSectionHeader } from ".";
import { NavLink } from "react-router-dom";
import { contactWays, links } from "@/data";
import { dashedLines, unEvenWaves } from "@/assets";

const Footer = () => {
  return (
    <footer className="bg-[#010f25] relative h-[50vh]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div
            className="absolute w-[494px] h-[465px] left-[-100px] top-0 bottom-0"
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
            <NavLink
              to="/about-us"
              className="relative block z-10 py-3 px-12 text-xl text-white bg-main mt-5 w-fit before:absolute before:top-0 before:bottom-0 before:right-0 before:bg-black before:z-[-1] before:w-0 hover:before:w-full before:transition-all before:duration-500 hover:before:left-0"
            >
              Book Now
            </NavLink>
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
      </div>
    </footer>
  );
};

export default Footer;
