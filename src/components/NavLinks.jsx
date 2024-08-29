import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const NavLinks = ({
  className,
  disableInitialAnimation = false,
  linksList,
}) => {
  return (
    <nav>
      <ul
        className={twMerge(
          `flex gap-6 ${disableInitialAnimation ? "" : "animate-smooth-show"} `,
          className
        )}
      >
        {linksList?.map(({ url, text, id }) => (
          <li className="text-white" key={id}>
            <NavLink
              to={url}
              className="text-2xl  min-[1200px]:text-xl py-2 block relative after:w-0 hover:after:w-full after:transition-all after:duration-700 after:absolute after:bottom-0 after:start-0 after:h-[3px]  after:bg-gradient-to-r after:from-main after:to-white"
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
