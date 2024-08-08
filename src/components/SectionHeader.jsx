import { twMerge } from "tailwind-merge";

const SectionHeader = ({
  subTitle,
  introText,
  desc,
  className,
  subTitleProps,
}) => {
  return (
    <div className={twMerge("space-y-2", className)}>
      <h5
        className={twMerge(
          "text-main text-2xl tracking-wide",
          subTitleProps?.className
        )}
      >
        {subTitle}
      </h5>
      <h3 className="text-black text-3xl lg:text-4xl">{introText}</h3>
      {desc && <p className="text-gray-500 text-[17px] leading-8">{desc}</p>}
    </div>
  );
};

export default SectionHeader;
