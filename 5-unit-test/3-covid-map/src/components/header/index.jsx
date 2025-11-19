import { PiVirus } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-white/10 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white shadow-modern backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex gap-3 items-center group">
          <PiVirus className="text-4xl text-pink-500 group-hover:text-pink-400 transition-all duration-300 group-hover:rotate-180" />
          <span className="font-bold text-xl bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Covid-10
          </span>
        </Link>

        <nav className="flex gap-6">
          <Link
            to="/"
            className="hover:text-pink-300 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Anasayfa
          </Link>
          <Link
            to="/"
            className="hover:text-pink-300 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Sonuçlarımız
          </Link>
          <Link
            to="/"
            className="max-md:hidden hover:text-pink-300 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Hakkımızda
          </Link>
          <Link
            to="/"
            className="max-md:hidden hover:text-pink-300 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-400 hover:after:w-full after:transition-all after:duration-300"
          >
            İletişim
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
