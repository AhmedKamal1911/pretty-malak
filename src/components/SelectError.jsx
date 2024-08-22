import { TfiFaceSad } from "react-icons/tfi";

const SelectError = () => {
  return (
    <div className="flex items-center gap-1">
      <TfiFaceSad className="text-red-600 w-[18px] h-[18px]" />
      <span className="text-red-600">Fetch Error</span>
    </div>
  );
};

export default SelectError;
