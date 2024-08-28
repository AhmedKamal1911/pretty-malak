import { Button } from "../ui/Button";

const TripReviewBox = ({ desc, buttonLabel }) => {
  return (
    <div className="flex flex-col">
      <span className="text-gray-500 text-xl">{desc}</span>
      <Button variant="primary" className="py-4 px-6 sm:py-6 sm:px-8">
        <a href="#">{buttonLabel}</a>
      </Button>
    </div>
  );
};

export default TripReviewBox;
