const TripDetail = ({ icon, detail }) => {
  return (
    <div className="flex md:flex-row  items-center gap-2">
      {icon}

      <span className="text-[18px]">{detail}</span>
    </div>
  );
};

export default TripDetail;
