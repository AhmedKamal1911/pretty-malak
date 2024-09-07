import { getStrapiMediaURL } from "@/utils/getStrapiMediaUrl";

const TripBanner = ({ bannerImg, type, title, t }) => {
  return (
    <div className="h-[300px] relative after:inset-0 after:bg-[#0c0c0c81] after:absolute">
      <div className="h-full">
        <img
          src={getStrapiMediaURL(bannerImg)}
          alt=""
          className="h-full w-full object-cover object-[0%,55%]"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-40 text-center w-full xl:w-[40%] px-2">
        <h5 className="text-4xl text-main mb-5">
          {t(`tripInfo.types.${type}`)}
        </h5>
        <h2 className="text-4xl lg:text-6xl text-white !leading-[1.4]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default TripBanner;
