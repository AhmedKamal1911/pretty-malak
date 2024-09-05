import { useInView } from "framer-motion";
import { useRef } from "react";

// Custom hook to get a ref and inView state based on an id
const useSectionInView = () => {
  const ref = useRef(null);

  // useInView hook from framer-motion
  const inView = useInView(ref, {
    amount: 0.5,
    once: true,
  });

  return { ref, inView };
};

export default useSectionInView;
