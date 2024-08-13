import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    // This ensures the window scrolls to the top when the component mounts (including refresh)
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollToTop;
