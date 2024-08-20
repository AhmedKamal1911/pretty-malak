import NotFoundAnimation from "@/components/animations/NotFoundAnimation";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <NotFoundAnimation />
      <h2 className="text-5xl sm:text-6xl mt-5 font-bold text-clip error-stroke">
        Page Not Found
      </h2>
    </div>
  );
};

export default NotFoundPage;
