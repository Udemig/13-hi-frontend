import { FC } from "react";
import { GoSearch } from "react-icons/go";

const Input: FC = () => {
  return (
    <form className="flex items-center gap-2 text-gray-500">
      <button className="text-zinc-700">
        <GoSearch />
      </button>

      <input type="text" placeholder="Ara" className="p-1 outline-none" />
    </form>
  );
};

export default Input;
