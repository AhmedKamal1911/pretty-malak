import { getStrapiMediaURL } from "@/utils/getStrapiMediaUrl";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

// Adjust text alignment

const FeaturesList = ({ className, features }) => {
  return (
    <div
      style={{
        counterReset: "feature-counter",
      }}
      className={twMerge(
        `relative  sm:before:absolute sm:ps-10 overflow-hidden sm:before:w-[1px] sm:before:inset-0 sm:before:h-full sm:before:bg-lightGray`,
        className
      )}
    >
      {features?.map((feature, idx) => (
        <FeatureListItem key={idx} feature={feature} />
      ))}
    </div>
  );
};

function FeatureListItem({ feature }) {
  return (
    <div
      className={`relative counter-increment group before:duration-500 before:text-6xl before:text-lightGray before:content-[counter(feature-counter,decimal-leading-zero)] hover:before:text-black py-8 flex flex-col sm:flex-row items-center gap-10 [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:bottom-0 [&:not(:last-child)]:after:end-0 [&:not(:last-child)]:after:h-[1px] [&:not(:last-child)]:after:bg-lightGray [&:not(:last-child)]:after:w-[100vw]`}
    >
      {/* Dynamic number */}

      <div>
        <img
          src={getStrapiMediaURL(feature.icon?.url)}
          className="w-[70px] z-[-1] transition-transform duration-500 group-hover:scale-x-[-1]"
          alt=""
        />
      </div>
      <div className="relative flex md:flex-col flex-row gap-7 sm:gap-10 md:gap-4 items-center">
        <div className="z-50">
          <h5>{feature.title}</h5>
          <NavLink
            className="text-main z-50 hover:text-black transition-colors duration-700 relative after:absolute after:-end-7 after:bottom-1/2 after:w-[0px] after:hover:w-[25px] after:transition-all after:duration-700 after:h-[2px] after:bg-black after:rounded-3xl before:absolute before:-end-7 before:bottom-1/2 before:w-[25px] before:h-[2px] before:bg-main before:rounded-3xl "
            to={feature.url}
          >
            Learn More
          </NavLink>
        </div>

        <div className="md:absolute start-[calc(100%+70px)] lg:start-[calc(100%+40px)] md:-top-2 w-[120px] h-[80px] ">
          <img
            src={getStrapiMediaURL(feature.travelImg?.formats?.small?.url)}
            alt=""
            className="w-full h-full object-cover md:opacity-0 md:pointer-events-none transition-all duration-500 rotate-[20deg] group-hover:rotate-[16deg] md:group-hover:opacity-[1]"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturesList;
