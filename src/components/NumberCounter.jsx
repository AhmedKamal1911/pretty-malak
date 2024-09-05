import { animate } from "framer-motion";
import { useState, useEffect } from "react";
import useSectionInView from "@/hooks/useSectionInView";
import { twMerge } from "tailwind-merge";

const NumberCounter = ({ from = 0, to = 1000, numberProps }) => {
  const { ref, inView } = useSectionInView();
  const [currentValue, setCurrentValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const start = Number(from);
      const end = Number(to);

      const controls = animate(start, end, {
        duration: 2,
        ease: "easeInOut",
        onUpdate(value) {
          setCurrentValue(value.toFixed(0)); // Update the state instead of textContent
        },
      });

      return () => {
        controls.stop(); // Cleanup
      };
    }
  }, [from, to, inView]);

  return (
    <span ref={ref} className={twMerge("text-4xl", numberProps)}>
      {currentValue}
    </span>
  );
};

export default NumberCounter;
