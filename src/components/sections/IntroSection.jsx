const IntroSection = () => {
  return (
    <section className="py-[80px] bg-lightCyan">
      <div className="flex justify-center">
        <h3
          className="text-main text-5xl relative after:absolute after:bottom-0 after:bg-main after:h-[4px] after:w-[75%] after:left-0 
        before:absolute before:bottom-[-8px] before:bg-main before:h-[4px] before:w-[60%] before:left-0
        hover:after:w-full
        hover:before:w-[75%]
        after:transition-all
        before:transition-all
        "
        >
          About Us
        </h3>
      </div>
    </section>
  );
};

export default IntroSection;
