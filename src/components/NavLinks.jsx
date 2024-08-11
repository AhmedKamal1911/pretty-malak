import { links } from "@/data";

import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const NavLinks = ({ className, disableInitialAnimation = false }) => {
  return (
    <nav>
      <ul
        className={twMerge(
          `flex gap-6 ${disableInitialAnimation ? "" : "animate-smooth-show"} `,
          className
        )}
      >
        {links.map(({ to, name }) => (
          <li className="text-white" key={name}>
            <NavLink
              to={to}
              key={name}
              className="text-lg py-2 block relative after:w-0 hover:after:w-full after:transition-all after:duration-700 after:absolute after:bottom-0 after:left-0 after:h-[3px]  after:bg-gradient-to-r after:from-main after:to-white"
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
