import React from "react";
import LinksDropDown from "./LinksDropDown";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="p-4 bg-muted flex items-center justify-between sm:px-16 lg:px-20">
      <LinksDropDown />
      <div className="flex items-center gap-x-2">
        <ThemeToggle />
        <span>User Button</span>
      </div>
    </nav>
  );
};

export default Navbar;
