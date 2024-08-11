import { features } from "@/data";
import { SectionHeader } from "..";

import FeaturesList from "../FeaturesList";
import { mapBackground } from "@/assets";
const IntroSection = () => {
  return (
    <section className="py-[120px] overflow-hidden bg-light relative z-10">
      <div
        style={{
          backgroundImage: `url('${mapBackground}')`,
        }}
        className="h-[935px] absolute left-0 top-0  w-full bg-[50%] bg-no-repeat z-[-1] bg-cover"
      />
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-center gap-10 md:gap-0">
          <div className="text-center flex-1 md:pr-[100px]">
            <SectionHeader
              className="lg:w-[400px] mx-auto"
              subTitle="Travel experience"
              introText="We are here to help you have the best trip"
              desc="With a large group of diverse, fun and exciting trips in Egypt, we guarantee you a new experience!"
            />
            <div className="mt-16 space-y-10">
              <h3 className="font-signature text-4xl">Seif Haraz</h3>
              <h6 className="text-xl">Seif Haraz</h6>
              <span className="text-gray-500">CEO</span>
            </div>
          </div>
          <FeaturesList className="flex-1" features={features} />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
