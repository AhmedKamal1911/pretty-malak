import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../data";
import { twMerge } from "tailwind-merge";

const NavLinks = ({ className }) => {
  return (
    <nav>
      <ul className={twMerge("flex gap-6 animate-smooth-show", className)}>
        {links.map(({ to, name }) => (
          <li className="text-white" key={name}>
            <NavLink
              to={to}
              key={name}
              className="text-lg py-2 block relative hover:after:animate-fill-to-right after:absolute after:bottom-0 after:left-0 after:h-[2px] after:content-[''] after:bg-gradient-to-r after:from-main after:to-transparent"
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
