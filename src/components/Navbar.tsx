import React from "react";

const Navbar = () => {
  return (
    <div className="w- h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-4 text-2xl font-bold">
        {/* LOGO */}
        <img src="/logo.png" alt="logo" className="w-8 h-8" />
        <span>AmineBlog</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">m</div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex">D</div>
    </div>
  );
};

export default Navbar;
