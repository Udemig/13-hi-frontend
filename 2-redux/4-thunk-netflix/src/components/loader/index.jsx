import { LoaderCircle } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-center my-20">
      <LoaderCircle className="text-red-500 animate-spin size-7" />
    </div>
  );
};

export default Loader;
