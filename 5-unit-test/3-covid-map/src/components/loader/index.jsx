import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div data-testid="loader" className="flex justify-center col-span-3 py-8">
      <div className="relative">
        <FaSpinner className="animate-spin text-4xl text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text" />
        <div className="absolute inset-0 animate-ping opacity-20">
          <FaSpinner className="text-4xl text-pink-500" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
