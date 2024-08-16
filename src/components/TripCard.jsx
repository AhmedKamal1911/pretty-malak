import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { getStrapiMediaURL } from "@/utils/getStrapiMediaUrl";
const TripCard = ({ title, offer, adultPrice, img, time, id }) => {
  const imgUrl = getStrapiMediaURL(img);
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      layout
      className="h-full"
    >
      <NavLink
        to={`/trip/${id}`}
        className="relative overflow-hidden select-none block group h-full bg-cover bg-[80%] after:absolute after:inset-0 after:bg-[#12131233] before:absolute before:inset-0 before:opacity-0 hover:before:bg-custom-gradient hover:before:opacity-[1] before:transition-all before:duration-700"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        {offer && (
          <div className="absolute text-white text-2xl right-2 top-2 bg-main w-[50px] h-[50px] rounded-full z-50 flex justify-center items-center">
            {offer}%
          </div>
        )}

        <span className="z-[50] text-white absolute top-2 flex items-center before:bg-white gap-2 after:bg-white left-2 before:w-0 before:h-0.5 after:w-6 after:h-0.5 group-hover:before:w-6 group-hover:after:w-0 after:transition-all after:duration-300 before:transition-all before:duration-300">
          {id < 10 ? `0${id}` : id}
        </span>
        <div className="z-50 absolute left-[1em] bottom-[1em] right-[1em] ">
          <h3 className="text-2xl  absolute bottom-[110px]  group-hover:bottom-[180px] sm:bottom-[110px]  sm:group-hover:bottom-[180px] md:bottom-[120px]  md:group-hover:bottom-[180px]  lg:bottom-[120px]lg:group-hover:bottom-[180px] transition-all duration-300 delay-[60ms] text-white">
            {adultPrice}$/{time}
          </h3>
          <h4 className="absolute bottom-[30px] left-0 right-0 text-white text-3xl my-2 line-clamp-2 group-hover:bottom-[80px] transition-all duration-300 delay-[50ms]">
            {title}
          </h4>
          <button className="absolute py-2 px-10 bg-main text-white bottom-[-50px] opacity-0 group-hover:bottom-[30px] group-hover:opacity-[1] transition-all  duration-500 delay-[30ms]">
            Explore
          </button>
        </div>
      </NavLink>
    </motion.div>
  );
};

export default TripCard;
