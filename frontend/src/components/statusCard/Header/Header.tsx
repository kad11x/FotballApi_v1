import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          Football API
        </NavLink>

        {/* Menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg bg-gray-800 px-4 py-2 hover:bg-gray-700"
          >
            Menu
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 text-gray-800 shadow-lg">
              <NavLink
                to="/teams"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Teams
              </NavLink>

              <NavLink
                to="/matches"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Matches
              </NavLink>

              <NavLink
                to="/leagues"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Leagues
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
