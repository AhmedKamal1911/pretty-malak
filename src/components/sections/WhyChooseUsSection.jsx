import { mapBackground, wavesWithBoat, waveyMapImg } from "@/assets";
import {
  FaBookOpen,
  FaHandsHelping,
  FaRegCompass,
  FaStar,
} from "react-icons/fa";
// Map of icon names to their respective components
const iconMap = {
  FaBookOpen: FaBookOpen,
  FaHandsHelping: FaHandsHelping,
  FaRegCompass: FaRegCompass,
  FaStar: FaStar,
  // Add more icons as needed
};
import { AboutInfoBox, SectionHeader } from "..";
import { aboutInfoList } from "@/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";
import { useQuery } from "@tanstack/react-query";
import { fetchWhyUsInfo } from "@/services/trips/queries";
import { getStrapiMediaURL } from "@/utils/getStrapiMediaUrl";

const WhyChooseUsSection = () => {
  const { data } = useQuery({
    queryKey: ["whyUs"], // Object form for query key
    queryFn: fetchWhyUsInfo,
  });
  const services = data?.services ?? [];
  const imagesList = data?.images.data ?? [];

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
        className="absolute animate-bouncing-left-right start-0 bottom-[-90px] md:bottom-0  h-[705px] w-[431px] bg-[50%] bg-no-repeat bg-cover"
      />

      <div className="container">
        <AboutInfoBox
          aboutInfoList={aboutInfoList}
          className="bg-[#ffffff9c] gap-28 relative"
        />
        <div className="mt-16 relative">
          <div>
            <h2
              data-text={"Why Choose Us"}
              className="stroke-fill w-fit mx-auto whitespace-nowrap mb-5 text-5xl md:text-8xl xl:text-[120px] text-center relative after:content-[attr(data-text)] after:absolute after:inset-0 after:w-0 after:z-[1] after:transition-all after:duration-500 hover:after:w-full after:overflow-hidden"
            >
              Why Choose Us
            </h2>
            <div className="flex flex-col xl:flex-row lg:items-center">
              <div className="flex-1">
                <div className="relative hidden xl:block">
                  <div className="relative after:absolute after:inset-0 after:w-[398px] after:bg-[#9c775918]">
                    <img src={waveyMapImg} alt="" className="" />
                  </div>
                  <div className="absolute start-[200px] bottom-[150px] rounded-md overflow-hidden">
                    <img
                      src={getStrapiMediaURL(imagesList[0]?.url)}
                      alt=""
                      className="w-[400px] h-[400px] object-cover"
                    />
                  </div>
                  <div className="absolute start-[100px] bottom-[80px] bg-white p-2 rounded-md">
                    <img
                      src={getStrapiMediaURL(imagesList[1]?.url)}
                      alt=""
                      className="w-[200px] h-[250px] object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <SectionHeader
                  subTitle="First-class full service"
                  subTitleProps={{ className: "text-4xl md:text-6xl" }}
                  className="mb-8 text-center"
                />
                <Accordion type="single" collapsible>
                  {services.map(({ name, desc, id, icon }) => {
                    const IconComponent = iconMap[icon] || null;

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
