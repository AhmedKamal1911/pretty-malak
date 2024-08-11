import {
  mapBackground,
  slideImg1,
  slideImg2,
  wavesWithBoat,
  waveyMapImg,
} from "@/assets";
import { AboutInfoBox, SectionHeader } from "..";
import { aboutInfoList, ourServices } from "@/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-32 bg-light overflow-hidden">
      <div
        style={{
          backgroundImage: `url('${mapBackground}')`,
        }}
        className="absolute inset-0 w-full bg-[55%] bg-no-repeat bg-cover"
      />
      <div
        style={{
          backgroundImage: `url('${wavesWithBoat}')`,
        }}
        className="absolute left-0 bottom-0  h-[705px] w-[431px] bg-[50%] bg-no-repeat bg-cover"
      />

      <div className="container">
        <AboutInfoBox
          aboutInfoList={aboutInfoList}
          className="bg-[#ffffff9c] gap-28 relative"
        />
        <div className="mt-16 relative">
          <div>
            <h2 className="stroke-fill mb-5 text-6xl md:text-8xl xl:text-[120px] text-center relative">
              Why Choose Us
            </h2>
            <div className="flex flex-col xl:flex-row lg:items-center">
              <div className="flex-1">
                <div className="relative hidden xl:block">
                  <div className="relative after:absolute after:inset-0 after:w-[398px] after:bg-[#9c775918]">
                    <img src={waveyMapImg} alt="" className="" />
                  </div>
                  <div className="absolute left-[200px] bottom-[150px] rounded-md overflow-hidden">
                    <img
                      src={slideImg1}
                      alt=""
                      className="w-[400px] h-[400px] object-cover"
                    />
                  </div>
                  <div className="absolute left-[100px] bottom-[80px] bg-white p-2 rounded-md">
                    <img
                      src={slideImg2}
                      alt=""
                      className="w-[200px] h-[250px] object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <SectionHeader
                  subTitle="First-class full service"
                  subTitleProps={{ className: "text-6xl" }}
                  className="mb-8 text-center"
                />
                <Accordion type="single" collapsible>
                  {ourServices.map(({ name, desc, id, icon }) => {
                    const IconComponent = icon;
                    return (
                      <AccordionItem
                        value={`item-${id}`}
                        key={id}
                        className="mb-1 border-none shadow"
                      >
                        <AccordionTrigger className="border-0 p-5 bg-white transition-all data-[state=open]:bg-main data-[state=open]:text-white text-[17px]">
                          <IconComponent />
                          {name}
                        </AccordionTrigger>
                        <AccordionContent className="p-5 bg-white text-[17px]">
                          {desc}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
