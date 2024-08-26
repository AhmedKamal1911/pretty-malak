import { useLanguage } from "@/contexts/LanguageProvider";

import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const DynamicInfoSection = ({ infoList }) => {
  const { isRTL } = useLanguage();
  return (
    <div>
      <ul className="flex flex-col gap-3 z-40 relative">
        {infoList.map(({ url, text, id, type }) => (
          <li className="flex items-center gap-2" key={id}>
            {isRTL ? (
              <MdOutlineKeyboardDoubleArrowLeft className="text-main" />
            ) : (
              <MdOutlineKeyboardDoubleArrowRight className="text-main" />
            )}

            <NavLink
              to={`${type === "tel" ? "tel:" : type === "mail" ? "mailto:" : ""}${url}`}
              target={type === "externalLink" ? "_blank" : ""}
              className="text-[#d3d3d3] text-[18px] hover:text-white transition-all duration-300 relative after:absolute after:bg-main after:rounded-lg after:start-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-500 hover:after:w-full"
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicInfoSection;
