import { realYacht, smallSlideImg1, waveBg, wheel } from "@/assets";
import { SectionHeader } from "..";

const AboutUsSection = () => {
  return (
    <section className="bg-light">
      <div className="relative px-4 min-[1400px]:ms-auto min-[1400px]:w-8/12 z-[1] overflow-hidden lg:overflow-visible">
        <div className="relative p-4 md:p-12 min-[1400px]:pl-[399px] min-[1400px]:py-28 min-[1400px]:pr-[100px] min-[1400px]:pb-[89px] h-full border border-1 min-[1400px]:w-fit bg-[#f4efec] outline-offset-[-20px] outline-main outline-[10px] outline-none">
          <div className="relative z-10 p-2 md:p-0">
            <SectionHeader
              className={"max-lg:text-center lg:w-[400px]"}
              subTitle="About Us"
              introText="The experience of a lifetime"
              desc="With the largest fleet of luxury catamarans, sailing and motor yachts in Santorini we guarantee the ultimate sailing experience!"
            />
            <div className="flex items-center justify-center md:justify-start gap-5 mt-5 p-[10px] md:p-0">
              <div>
                <img
                  src={smallSlideImg1}
                  alt=""
                  className="w-[100px] h-[100px] object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span>Since year</span>
                <strong className="text-5xl text-main">2005</strong>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url("${wheel}")` }}
            className="  absolute right-[-170px] top-[-50px] lg:left-28 md:top-8 w-[300px] h-[200px] bg-no-repeat"
          />
          <div
            style={{ backgroundImage: `url("${waveBg}")` }}
            className="absolute inset-0 z-[2]"
          />
          <div
            style={{ backgroundImage: `url("${realYacht}")` }}
            className="md:z-[1] md:absolute hidden md:block md:inset-0  lg:top-0 min-[1400px]:left-[-500px] md:bg-contain md:bg-[80%] min-[1400px]:bg-[90%,0%]  min-[1400px]:h-[464px] min-[1400px]:w-[800px] min-[1400px]:z-40 md:bg-no-repeat"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
