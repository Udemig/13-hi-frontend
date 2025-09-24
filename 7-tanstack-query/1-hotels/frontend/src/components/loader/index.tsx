import type { FC } from "react";
import { LoaderCircle } from "lucide-react";

const Loader: FC = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <LoaderCircle className="animate-spin text-blue-500 size-8" />
    </div>
  );
};

export default Loader;
