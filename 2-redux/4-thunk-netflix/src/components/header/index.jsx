import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { list } = useSelector((store) => store.listReducer);
  return (
    <header className="mb-10 flex justify-between items-center backdrop-blur-sm bg-black/30 -mx-5 md:-mx-10 lg:-mx-15 xl:-mx-20 px-5 md:px-10 lg:px-15 xl:px-20 py-4 rounded-2xl border border-white/10 shadow-lg">
      <Link
        to="/"
        className="transition-transform duration-300 hover:scale-105"
      >
        <img src="/logo.svg" alt="netflix" className="max-w-[150px]" />
      </Link>

      <Link
        to="/watch-list"
        className="flex gap-3 items-center hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 font-medium"
      >
        <div className="relative">
          <Bookmark className="transition-transform duration-300 hover:scale-110" />
          <span className="absolute right-[-13px] top-[-13px] bg-gradient-to-r from-red-500 to-red-600 size-6 grid place-items-center text-xs font-bold rounded-full shadow-lg shadow-red-500/50 animate-pulse">
            {list.length}
          </span>
        </div>
        İzleme Listesi
      </Link>
    </header>
  );
};

export default Header;
