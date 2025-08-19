import { FaSpinner } from "react-icons/fa";

const Loader = ({ designs }) => {
  return (
    <div className={`flex justify-center items-center ${designs}`}>
      <FaSpinner className="animate-spin text-lg text-blue-500" />
    </div>
  );
};

export default Loader;
