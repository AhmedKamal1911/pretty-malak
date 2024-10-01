import { BoatAnimation } from "@/components/animations";

const PageLoader = () => {
  return (
    <div className="h-screen z-[9999999] bg-black flex justify-center items-center">
      <BoatAnimation />
    </div>
  );
};

export default PageLoader;
