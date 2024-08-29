const TripPriceDetail = ({ price, age }) => {
  return (
    <div className="flex gap-3">
      <span className="text-2xl sm:text-3xl font-bold">${price}</span>
      <span className="self-end text-grayDesc font-semibold text-[14px] sm:text-[18px]">
        / {age}
      </span>
    </div>
  );
};

export default TripPriceDetail;
