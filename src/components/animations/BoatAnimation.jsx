import { boatIcon } from "@/assets";

const BoatAnimation = () => {
  return (
    <div className="relative w-[200px] h-[200px]">
      {/* Arc Spinner */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full z-50 h-full border-4 border-transparent border-t-[#eee6dc] rounded-full animate-spin" />
      </div>

      {/* Boat Icon */}
      <div className="relative z-10 border-[5px] border-[#616060] rounded-full w-[200px] h-[200px] flex items-center justify-center">
        <img
          src={boatIcon}
          className="w-full boat max-w-[150px] relative -top-2"
          alt="Boat Icon"
        />
      </div>
    </div>
  );
};

export default BoatAnimation;
