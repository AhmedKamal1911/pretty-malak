import { useInView } from "framer-motion";
import { useRef } from "react";

// Custom hook to get a ref and inView state based on an id
const useSectionInView = () => {
  const ref = useRef(null);

  // useInView hook from framer-motion
  const inView = useInView(ref, {
    amount: "all",
    once: true,
  });
  console.log(inView);
  return { ref, inView };
};

export default useSectionInView;
