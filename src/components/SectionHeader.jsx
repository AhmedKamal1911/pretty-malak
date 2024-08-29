import { twMerge } from "tailwind-merge";

const SectionHeader = ({
  subTitle,
  introText,
  desc,
  className,
  subTitleProps,
  descProps,
}) => {
  return (
    <div className={twMerge("space-y-6", className)}>
      <h5
        className={twMerge(
          "text-main text-3xl tracking-wide",
          subTitleProps?.className
        )}
      >
        {subTitle}
      </h5>
      <h3 className="text-black text-3xl lg:text-4xl">{introText}</h3>
      {desc && (
        <p
          className={twMerge("text-grayDesc text-[18px] leading-8", descProps)}
        >
          {desc}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
