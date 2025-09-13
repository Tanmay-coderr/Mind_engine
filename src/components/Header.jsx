import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiSolidHomeSmile, BiSolidPhoneCall } from "react-icons/bi";
import { RiRobot2Fill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/me_logo.png";

function Header() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 tracking-wider shadow-lg text-lg font-mono bg-gradient-to-r from-blue-100 via-pink-10 to-purple-100">
      <nav className="flex items-center justify-between px-6 py-3">
        {/* Left - Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="mr-3 h-20 md:h-28 m-0" alt="Logo" />
        </Link>

        {/* Center - NavLinks (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center gap-12">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold p-1 px-2"
                : "text-slate-600 p-1 px-4 rounded-2xl hover:text-orange-600 hover:scale-105 transition duration-300"
            }
          >
            <div className="flex items-center gap-2">
              <BiSolidHomeSmile className="text-2xl" />
              <span>HOME</span>
            </div>
          </NavLink>
          <NavLink
            to="/helpline"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold p-1 px-2"
                : "text-slate-600 p-1 px-4 rounded-2xl hover:text-orange-600 hover:scale-105 transition duration-300"
            }
          >
            <div className="flex items-center gap-2">
              <BiSolidPhoneCall className="text-2xl" />
              <span>HELPLINE</span>
            </div>
          </NavLink>
          <NavLink
            to="/ai"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold p-1 px-2"
                : "text-slate-600 p-1 px-4 rounded-2xl hover:text-orange-600 hover:scale-105 transition duration-300"
            }
          >
            <div className="flex items-center gap-2">
              <RiRobot2Fill className="text-2xl" />
              <span>AI SUPPORT</span>
            </div>
          </NavLink>
          <NavLink
            to="/counselor"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold p-1 px-2"
                : "text-slate-600 p-1 px-4 rounded-2xl hover:text-orange-600 hover:scale-105 transition duration-300"
            }
          >
            <div className="flex items-center gap-2">
              <FaUserDoctor className="text-2xl" />
              <span>COUNSELOR</span>
            </div>
          </NavLink>
        </div>

        {/* Right - Login/Profile */}
        <div className="hidden md:block">
          {loggedIn ? (
            <Link to="/profile">
              <img
                src="https://i.pravatar.cc/40"
                alt="Profile"
                className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-blue-500"
              />
            </Link>
          ) : (
            <NavLink to="/login">
              <button className="bg-orange-600 px-3 py-1 rounded-2xl text-white hover:bg-orange-700 transition duration-300">
                LOGIN
              </button>
            </NavLink>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col px-6 py-4 space-y-4">
          <NavLink to="/home" onClick={() => setMenuOpen(false)}>
            HOME
          </NavLink>
          <NavLink to="/helpline" onClick={() => setMenuOpen(false)}>
            HELPLINE
          </NavLink>
          <NavLink to="/ai" onClick={() => setMenuOpen(false)}>
            AI SUPPORT
          </NavLink>
          <NavLink to="/counselor" onClick={() => setMenuOpen(false)}>
            COUNSELOR
          </NavLink>

          {loggedIn ? (
            <Link to="/profile" onClick={() => setMenuOpen(false)}>
              <div className="flex items-center gap-2">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="Profile"
                  className="h-12 w-12 rounded-full border-2 border-blue-500"
                />
                <span>Profile</span>
              </div>
            </Link>
          ) : (
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              <button className="bg-orange-600 px-3 py-1 rounded-2xl text-white hover:bg-orange-700 transition duration-300">
                LOGIN
              </button>
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
