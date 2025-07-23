import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.svg" alt="netflix" className="max-w-[150px]" />
      </Link>

      <Link to="/watch-list" className="flex gap-4 items-center hover:text-gray-300 transition">
        <div className="relative">
          <Bookmark />
          <span className="absolute right-[-13px] top-[-13px] bg-red-500 size-6 grid place-items-center text-sm font-semibold rounded-full">
            10
          </span>
        </div>
        İzleme Listesi
      </Link>
    </header>
  );
};

export default Header;
