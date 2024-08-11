const TripDetailsBox = ({
  tour,
  tourFrom,
  departureTime,
  tripDays,
  returnTime,
  maxGuests,
}) => {
  return (
    <div className="p-6">
      <ul className="flex flex-col gap-5 sm:gap-7">
        <li className="flex flex-col sm:flex-row">
          <span className="text-xl sm:text-[19px] flex-1">tour :</span>
          <span className="text-gray-500 flex-1 text-[16px] sm:text-[18px]">
            {tour}
          </span>
        </li>
        <li className="flex flex-col sm:flex-row">
          <span className="text-xl sm:text-[19px] flex-1">tour from :</span>
          <span className="text-gray-500 flex-1 text-[16px] sm:text-[18px]">
            {tourFrom}
          </span>
        </li>
        <li className="flex flex-col sm:flex-row">
          <span className="text-xl sm:text-[19px] flex-1">
            departure Time :
          </span>
          <span className="text-gray-500 flex-1 text-[16px] sm:text-[18px]">
            {departureTime}
          </span>
        </li>
        <li className="flex flex-col sm:flex-row">
          <span className="text-xl sm:text-[19px] flex-1">trip days :</span>
          <span className="text-gray-500 flex-1 text-[16px] sm:text-[18px]">
            {tripDays}
          </span>
        </li>
        <li className="flex flex-col sm:flex-row">
          <span className="text-xl sm:text-[19px] flex-1">return time :</span>
          <span className="text-gray-500 flex-1 text-[16px] sm:text-[18px]">
            {returnTime}
          </span>
        </li>
        {maxGuests && (
          <li className="flex flex-col sm:flex-row">
            <span className="text-xl sm:text-[19px] flex-1">Max Guests :</span>
            <span className="text-gray-500 flex-1 text-[16px] sm:text-[18px]">
              {maxGuests}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TripDetailsBox;
