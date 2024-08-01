import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DynamicInfoSection = ({ infoList }) => {
  return (
    <div>
      <ul className="flex flex-col gap-3">
        {infoList.map(({ icon, name, to }, i) => (
          <li className="flex items-center gap-2" key={i}>
            <FontAwesomeIcon
              icon={icon}
              className="text-main text-[17px] z-50"
            />

            <a
              href={`${to}${name}`}
              className="text-[#d3d3d3] text-[18px] hover:text-white transition-all duration-300 relative after:absolute after:bg-main after:rounded-lg after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-500 hover:after:w-full"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicInfoSection;
