import { twMerge } from "tailwind-merge";
import { Reveal } from ".";

const SectionHeader = ({
  subTitle,
  introText,
  desc,
  className,
  subTitleClassName,
  descClassName,
  subTitleRevealClassName,
  introTextRevealClassName,
}) => {
  return (
    <div className={twMerge("space-y-6", className)}>
      <Reveal className={subTitleRevealClassName}>
        <h5
          className={twMerge(
            "text-main text-3xl tracking-wide",
            subTitleClassName?.className
          )}
        >
          {subTitle}
        </h5>
      </Reveal>
      <Reveal className={introTextRevealClassName}>
        <h3 className="text-black text-3xl lg:text-4xl">{introText}</h3>
      </Reveal>
      {desc && (
        <p
          className={twMerge(
            "text-grayDesc text-[18px] leading-8",
            descClassName
          )}
        >
          {desc}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
