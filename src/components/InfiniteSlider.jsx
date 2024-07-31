import { Children, cloneElement } from "react";

const InfiniteSlider = ({ children }) => {
  const childrenClone = Children.map(children, (child) =>
    cloneElement(child, {
      "aria-hidden": true,
    })
  );
  return (
    <div className="mb-9 overflow-hidden">
      <div className="w-[max-content] animate-infiniteSlide py-10 bg-white flex gap-[50px]">
        {children}
        {childrenClone}
      </div>
    </div>
  );
};

export default InfiniteSlider;
