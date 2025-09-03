import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-violet-600 text-gray-300 py-10 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">MindEngine</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your Companion in Mental Wellness.  
            Support, guidance, and hope at your fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/home" className="hover:text-pink-400">Home</a></li>
            <li><a href="/test" className="hover:text-pink-400">Take a Test</a></li>
            <li><a href="/courses" className="hover:text-pink-400">Courses</a></li>
            <li><a href="/Counselor" className="hover:text-pink-400">Connect with Therapist</a></li>
            
            <li><NavLink to="/Helpline" className="hover:text-pink-400">Helpline</NavLink></li>
            {/* <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            isActive ? "text-orange-600 font-semibold  p-1 px-2" : "text-slate-600 p-1 px-4 border-0 rounded-2xl hover:text-orange-600 hover:scale-105 transition duration-400 ease-in-out "
                        }
                    >
                        <div className="flex items-center gap-2">
                            <BiSolidHomeSmile className="text-2xl" />
                            <span>HOME</span>
                        </div>
                    </NavLink> */}
          </ul>
        </div>

        {/* Crisis Reminder */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Crisis Support</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            If you are in crisis, please call  
            <span className="text-pink-400 font-semibold"> +91 9999 666 555 </span>  
            immediately — help is available 24/7.
          </p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex gap-4">
            <a href="mailto:support@mindcare.com" className="hover:text-pink-400">
              <Mail />
            </a>
            <a href="#" className="hover:text-pink-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-pink-400">
              <Instagram />
            </a>
            <a href="#" className="hover:text-pink-400">
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t  mt-10 pt-6 text-center text-sm text-gray-300">
        <p>
          © {new Date().getFullYear()} MindCare. All rights reserved.  
          <span className="ml-2">
            <a href="/privacy" className="hover:text-pink-400">Privacy Policy</a> ·{" "}
            <a href="/terms" className="hover:text-pink-400">Terms</a> ·{" "}
            <a href="/disclaimer" className="hover:text-pink-400">Disclaimer</a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
