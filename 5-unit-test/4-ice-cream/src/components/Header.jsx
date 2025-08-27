import { useState } from "react";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-red-600 text-white sticky top-0 z-50">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/public/images/logo.svg" alt="Drop Cream Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">Drop Cream</span>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <a
                href="#"
                className="text-white hover:text-red-200 transition-colors duration-200 font-medium"
                role="button"
                tabIndex={0}
              >
                Anasayfa
              </a>
              <a
                href="#"
                className="text-white hover:text-red-200 transition-colors duration-200 font-medium"
                role="button"
                tabIndex={0}
              >
                Hakkımızda
              </a>
              <a
                href="#"
                className="text-white hover:text-red-200 transition-colors duration-200 font-medium"
                role="button"
                tabIndex={0}
              >
                Yakındakiler
              </a>
            </nav>

            {/* Search Icon */}
            <button
              className="p-2 hover:bg-red-700 rounded-full transition-colors duration-200"
              aria-label="Search"
              role="button"
              tabIndex={0}
            >
              <IoSearchOutline className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/public/images/logo.svg" alt="Drop Cream Logo" className="w-6 h-6" />
              <span className="text-lg font-bold">Drop Cream</span>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-2">
              {/* Search Icon */}
              <button
                className="p-2 hover:bg-red-700 rounded-full transition-colors duration-200"
                aria-label="Search"
                role="button"
                tabIndex={0}
              >
                <IoSearchOutline className="w-5 h-5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="p-2 hover:bg-red-700 rounded-full transition-colors duration-200"
                onClick={handleMobileMenuToggle}
                aria-label="Toggle menu"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleMobileMenuToggle();
                  }
                }}
              >
                {isMobileMenuOpen ? <IoClose className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-red-700 border-t border-red-500">
            <nav className="px-4 py-2 space-y-2">
              <a
                href="#"
                className="block py-3 px-2 text-white hover:bg-red-800 rounded transition-colors duration-200 font-medium"
                onClick={handleMenuItemClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleMenuItemClick();
                  }
                }}
              >
                Anasayfa
              </a>
              <a
                href="#"
                className="block py-3 px-2 text-white hover:bg-red-800 rounded transition-colors duration-200 font-medium"
                onClick={handleMenuItemClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleMenuItemClick();
                  }
                }}
              >
                Hakkımızda
              </a>
              <a
                href="#"
                className="block py-3 px-2 text-white hover:bg-red-800 rounded transition-colors duration-200 font-medium"
                onClick={handleMenuItemClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleMenuItemClick();
                  }
                }}
              >
                Yakındakiler
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
