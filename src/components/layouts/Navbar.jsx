import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  getUser,
  isAuthenticated,
  logout,
} from "../../utils/auth";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const authenticated = isAuthenticated();
  const user = getUser();

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Directory", path: "/alumni" },
    { title: "Events", path: "/events" },
    { title: "News", path: "/news" },
    { title: "Jobs", path: "/jobs" },
    { title: "Gallery", path: "/gallery" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-4 shrink-0"
          >
            <div
              className="
              w-14
              h-14
              rounded-full
              bg-white
              shadow-md
              border
              border-gray-200
              flex
              items-center
              justify-center
              overflow-hidden
              "
            >
              <img
                src="/logo.png"
                alt="BCE Alumni"
                className="w-14 h-14 object-contain"
              />
            </div>

            <div className="leading-tight">
              <h1 className="text-3xl font-extrabold text-[#0B1B4D]">
                BCE
              </h1>

              <p
                className="
                text-xs
                md:text-sm
                font-bold
                tracking-wider
                uppercase
                text-[#C99700]
                "
              >
                Alumni Welfare Association
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav
            className="
            hidden
            lg:flex
            flex-1
            justify-center
            items-center
            gap-8
            px-10
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="
                text-[17px]
                font-semibold
                text-slate-600
                hover:text-blue-700
                transition
                whitespace-nowrap
                "
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}

          <div className="hidden lg:flex items-center gap-4 shrink-0">

            {authenticated ? (
              <>
                <Link
                  to={
                    user?.role === "ADMIN"
                      ? "/admin"
                      : "/dashboard"
                  }
                  className="
                  px-5
                  py-3
                  rounded-xl
                  border
                  border-blue-600
                  text-blue-600
                  font-semibold
                  hover:bg-blue-50
                  transition
                  "
                >
                  Dashboard
                </Link>

                <button
                  onClick={logout}
                  className="
                  px-5
                  py-3
                  rounded-xl
                  bg-red-600
                  text-white
                  font-semibold
                  hover:bg-red-700
                  transition
                  "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="
                  px-6
                  py-3
                  rounded-xl
                  border
                  border-blue-600
                  text-blue-600
                  font-semibold
                  hover:bg-blue-50
                  transition
                  "
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="
                  px-4
                  py-3
                  rounded-xl
                  bg-[#F4C400]
                  text-black
                  font-bold
                  hover:bg-[#E6BA00]
                  transition
                  shadow-md
                  "
                >
                  Join Network
                </Link>
              </>
            )}

          </div>

          {/* Mobile Menu Icon */}

          <button
            className="lg:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden bg-white shadow-lg">

          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              onClick={() => setOpen(false)}
              className="
              block
              p-4
              border-b
              font-medium
              "
            >
              {link.title}
            </Link>
          ))}

          {authenticated ? (
            <>
              <Link
                to={
                  user?.role === "ADMIN"
                    ? "/admin"
                    : "/dashboard"
                }
                onClick={() => setOpen(false)}
                className="
                block
                p-4
                border-b
                text-blue-600
                font-semibold
                "
              >
                Dashboard
              </Link>

              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="
                w-full
                text-left
                p-4
                bg-red-600
                text-white
                "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="
                block
                p-4
                border-b
                text-blue-600
                font-semibold
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="
                block
                p-4
                bg-[#F4C400]
                text-black
                font-bold
                "
              >
                Join Network
              </Link>
            </>
          )}

        </div>
      )}
    </header>
  );
};

export default Navbar;