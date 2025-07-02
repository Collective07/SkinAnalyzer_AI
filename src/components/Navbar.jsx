// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when resizing to larger screens
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  return (
    <nav className={`bg-slate-900/80 backdrop-blur-lg sticky top-0 z-50 transition-all duration-300 border-b border-white/10 ${scrolled ? "shadow-2xl py-2" : "py-4"}`}>
      <div className="max-w-8xl mx-auto px-10 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative">
            {/* <img
              src="../images/logo.png"
              alt="SkinAnalyzer AI Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain group-hover:scale-110 transition-transform duration-300"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <span className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all duration-300 ${scrolled ? "text-2xl" : "text-2xl sm:text-3xl"}`}>
            SkinAnalyzer AI
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 lg:space-x-10 text-gray-300 font-semibold text-base lg:text-lg">
          <NavLink to="/" text="Overview" />
          <NavLink to="/about" text="Features" />
          <NavLink to="/predict" text="Scan" />
          <NavLink to="/team" text="About Us" />
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 group z-50"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`block w-8 h-0.5 bg-emerald-400 rounded transition-all duration-300 ease-in-out group-hover:bg-emerald-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-8 h-0.5 bg-emerald-400 rounded my-1.5 transition-all duration-300 ease-in-out group-hover:bg-emerald-300 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-8 h-0.5 bg-emerald-400 rounded transition-all duration-300 ease-in-out group-hover:bg-emerald-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-lg z-40 transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-slate-900/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 border-l border-white/10 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full pt-24 px-8">
            <ul className="flex flex-col space-y-6 font-semibold text-gray-300 text-lg">
              <MobileNavLink to="/" text="Overview" setMobileOpen={setMobileOpen} />
              <MobileNavLink to="/about" text="Features" setMobileOpen={setMobileOpen} />
              <MobileNavLink to="/predict" text="Scan" setMobileOpen={setMobileOpen} />
              <MobileNavLink to="/team" text="About Us" setMobileOpen={setMobileOpen} />
            </ul>
            
            <div className="mt-auto pb-12 pt-12 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <h3 className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">Connect With Us</h3>
                <a 
                  href="https://in.linkedin.com/in/ankitk247" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn.Ankit
                </a>
                <a 
                  href="https://www.linkedin.com/in/nishkarsh70" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn.Nishkarsh
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Reusable NavLink component
function NavLink({ to, text }) {
  return (
    <li>
      <Link
        to={to}
        className="relative group text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium"
      >
        {text}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full blur-sm opacity-50"></span>
      </Link>
    </li>
  );
}

// Mobile NavLink component
function MobileNavLink({ to, text, setMobileOpen }) {
  return (
    <li>
      <Link
        to={to}
        className="block py-3 px-4 rounded-xl hover:bg-white/5 hover:text-emerald-400 transition-all duration-300 border border-transparent hover:border-emerald-400/20 group"
        onClick={() => setMobileOpen(false)}
      >
        <span className="flex items-center">
          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
          {text}
        </span>
      </Link>
    </li>
  );
}