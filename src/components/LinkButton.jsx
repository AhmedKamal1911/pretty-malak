import { NavLink } from "react-router-dom";

const LinkButton = ({ text }) => {
  return (
    <NavLink
      to="/about-us"
      className="relative block z-10 py-3 px-12 text-xl text-white bg-main mt-5 w-fit before:absolute before:top-0 before:bottom-0 before:right-0 before:bg-black before:z-[-1] before:w-0 hover:before:w-full before:transition-all before:duration-500 hover:before:left-0"
    >
      {text}
    </NavLink>
  );
};

export default LinkButton;
