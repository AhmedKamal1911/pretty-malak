import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const FeaturesList = ({ className, features }) => {
  return (
    <div
      style={{
        counterReset: "feature-counter",
      }}
      className={twMerge(
        "relative  sm:before:absolute sm:pl-10 overflow-hidden sm:before:w-[0.2px] sm:before:inset-0 sm:before:h-full sm:before:bg-lightGray",
        className
      )}
    >
      {features.map((feature, idx) => (
        <FeatureListItem key={idx} feature={feature} />
      ))}
    </div>
  );
};

function FeatureListItem({ feature }) {
  return (
    <div className="relative counter-increment group before:duration-500 before:text-6xl before:text-lightGray before:content-[counter(feature-counter,decimal-leading-zero)] hover:before:text-black py-8 flex flex-col sm:flex-row items-center gap-10 [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:bottom-0 [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:h-[1px] [&:not(:last-child)]:after:bg-lightGray [&:not(:last-child)]:after:w-[100vw]">
      {/* Dynamic number */}

      <div>
        <img
          src={feature.icon}
          className="w-[70px] transition-transform duration-500 group-hover:scale-x-[-1]"
          alt=""
        />
      </div>
      <div className="relative flex md:flex-col flex-row gap-2 items-center">
        <div>
          <h5>{feature.title}</h5>
          <NavLink className="text-gray-400" to={feature.url}>
            Learn More
          </NavLink>
        </div>

        <div className="md:absolute md:left-full md:-top-2 w-[120px] h-[90px] ">
          <img
            src={feature.travelImg}
            alt=""
            className="w-full h-full object-cover md:opacity-0 md:pointer-events-none transition-all duration-500 rotate-[20deg] group-hover:rotate-[16deg] md:group-hover:opacity-[1]"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturesList;
