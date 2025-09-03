import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiSolidHomeSmile } from 'react-icons/bi';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { RiRobot2Fill } from 'react-icons/ri';
import { FaUserDoctor } from 'react-icons/fa6';
import logo from "../assets/me_logo.png";



function Header() {
    // dummy login state (replace later with real auth check)
    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <header className=" sticky top-0 z-50 tracking-wider shadow-lg text-lg font-mono bg-amber-50">
            <nav className="flex items-center justify-between px-6 py-3">
                {/* Left - Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        className="mr-3 h-28 m-0"
                        alt="Logo"
                    />
                </Link>

                {/* Center - NavLinks */}
                <div className="flex-1 flex justify-center gap-12">
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            isActive ? "text-orange-600 font-semibold  p-1 px-2" : "text-slate-600 p-1 px-4 border-0 rounded-2xl hover:text-orange-600 hover:scale-105 transition duration-400 ease-in-out "
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
                            isActive ? "text-orange-600 font-semibold  p-1 px-2" : "text-slate-600 p-1 px-4 border-0 rounded-2xl hover:text-orange-600 hover:scale-105 transition duration-400 ease-in-out"
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
                            isActive ? "text-orange-600 font-semibold  p-1 px-2" : "text-slate-600 p-1 px-4 border-0 rounded-2xl hover:text-orange-600 hover:scale-105 transition duration-400 ease-in-out"
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
                            isActive ? "text-orange-600 font-semibold  p-1 px-2" : "text-slate-600 p-1 px-4 border-0 rounded-2xl hover:text-orange-600 hover:scale-105 transition duration-400 ease-in-out"
                        }
                    >
                        <div className="flex items-center gap-2">
                            <FaUserDoctor className="text-2xl" />
                            <span>COUNSELOR</span>
                        </div>
                    </NavLink>
                </div>

                {/* Right - Login/Profile */}
                <div>
                    {loggedIn ? (
                        <Link to="/profile">
                            <img
                                src="https://i.pravatar.cc/40"
                                alt="Profile"
                                className="h-14 w-14 rounded-full border-2 border-blue-500"
                            />
                        </Link>
                    ) : (
                        <NavLink to="/login">
                            <button className="bg-orange-600 px-3 py-1 rounded-2xl text-white hover:bg-orange-700 transition duration-300 ease-in-out">
                                LOGIN
                            </button>
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;