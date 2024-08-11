const TripPriceDetail = ({ price, age }) => {
  return (
    <div className="flex gap-3">
      <span className="text-2xl sm:text-4xl font-bold">${price}</span>
      <span className="self-end text-gray-500 text-[14px] sm:text-xl">
        / {age}
      </span>
    </div>
  );
};

export default TripPriceDetail;
