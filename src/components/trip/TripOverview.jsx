const TripOverview = ({ title, desc }) => {
  return (
    <div className="mb-5">
      <h3 className="text-[23px] text-center sm:text-start sm:text-3xl mb-5">
        {title}
      </h3>
      {desc && (
        <p className="text-[15px] lg:text-[17px] text-gray-500 leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
};

export default TripOverview;
