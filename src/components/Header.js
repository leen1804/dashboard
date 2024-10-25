import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md rounded-2xl bg-customDark">
      <div className="text-2xl font-bold">Swift</div>
      <div className="flex items-center space-x-3">
        <img
          src="admin-avatar.png"
          alt="Admin"
          className="w-10 h-10 rounded-full"
        />
        <span>Admin</span>
      </div>
    </header>
  );
}

export default Header;
