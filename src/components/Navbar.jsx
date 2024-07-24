import { logo } from "@/assets";
import React from "react";
import { links } from "../../data";

import { NavLink } from "react-router-dom";
import LanguageSelectMenu from "./LanguageSelectMenu";
const Navbar = () => {
  console.log(links);
  return (
    <header>
      <div className="container mx-auto ">
        <div className="flex justify-between items-center ">
          <div>
            <img src={logo} alt="logo" className="h-[40px]" />
          </div>
          <div className="flex gap-16 items-center">
            <nav className="flex gap-6">
              {links.map(({ to, name }) => (
                <li className="list-none text-main" key={name}>
                  <NavLink to={to} key={name} className="py-6 block">
                    {name}
                  </NavLink>
                </li>
              ))}
            </nav>
            <LanguageSelectMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
