import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div data-testid="loader" className="flex justify-center col-span-3">
      <FaSpinner className="animate-spin text-blue-500" />
    </div>
  );
};

export default Loader;
