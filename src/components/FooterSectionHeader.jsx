import { lineWaves } from "@/assets";

const FooterSectionHeader = ({ title, desc }) => {
  return (
    <div className="relative">
      <h3 className="relative text-main text-xl mb-10">
        {title}
        <div
          className="absolute w-[30px] h-[9px]"
          style={{ backgroundImage: `url('${lineWaves}')` }}
        />
      </h3>
      {desc && <p className="text-white lg:w-[270px]">{desc}</p>}
    </div>
  );
};

export default FooterSectionHeader;
