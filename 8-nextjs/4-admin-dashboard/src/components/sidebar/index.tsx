"use client";
import { links } from "@/utils/constants";
import { FC, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from "./nav-link";

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col gap-5 border-r border-zinc-300 transition-all duration-300 shadow-lg bg-white text-gray-500 ${
        isOpen ? "min-w-[150px]" : "min-w-[60px]"
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center p-5 text-2xl cursor-pointer hover:text-blue-400 transition"
      >
        <RxHamburgerMenu
          className={`transition duration-300 ${isOpen ? "rotate-90" : ""}`}
        />
      </button>

      <div>
        {links.map((i, key) => (
          <NavLink item={i} isOpen={isOpen} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
