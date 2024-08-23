import { RxCross1 } from "react-icons/rx";

import { FaCheck } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";

const iconProps = {
  className: "w-5 h-5 relative top-[5px] shrink-0",
};
const TourOverviewDetails = ({ list, label, status }) => {
  let icon;

  switch (status) {
    case "info":
      icon = <LuInfo {...iconProps} color="orange" />;
      break;
    case "cross":
      icon = <RxCross1 {...iconProps} color="red" />;
      break;
    default:
      icon = <FaCheck {...iconProps} color="green" />;
      break;
  }

  return (
    <div className="p-6 flex flex-col sm:flex-row gap-5 sm:gap-0">
      <span className="text-xl sm:text-[19px] flex-1">{label}</span>
      <ul className="flex-1 flex flex-col gap-5 sm:gap-7">
        {list?.map(({ id, name }) => (
          <li key={id}>
            <span className="text-gray-500 text-[16px] sm:text-[18px] flex items-start gap-2 sm:gap-5 ">
              {icon}
              <span>{name}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TourOverviewDetails;
