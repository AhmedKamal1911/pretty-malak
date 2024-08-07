import { features } from "@/data";
import { SectionHeader } from "..";

import FeaturesList from "../FeaturesList";
import { mapBackground } from "@/assets";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";
const IntroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const mainControls = useAnimation();

  console.log(isInView, "inview");
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section className="py-[120px] bg-light relative z-10" ref={sectionRef}>
      <div
        style={{
          backgroundImage: `url('${mapBackground}')`,
        }}
        className="h-[935px] absolute left-0 top-0 w-full bg-[50%] bg-no-repeat z-[-1] bg-cover"
      />
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-center gap-10 md:gap-0">
          <motion.div
            className="text-center flex-1 md:pr-[100px]"
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            exit="hidden"
            transition={{ delay: 2 }}
          >
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
          </motion.div>
          <FeaturesList className="flex-1" features={features} />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
