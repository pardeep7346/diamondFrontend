import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useScrollDirection from "../hooks/useScrollDirection";
import axios from "axios";

const Navbar = () => {
  const scrollDirection = useScrollDirection();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("accessToken");

  const logout = async () => {
    const token = localStorage.getItem("accessToken");
    // console.log(`the logout token is : Bearer ${token}`);
    if (!token) {
      console.warn("No token found, redirecting to login");
      localStorage.removeItem("accessToken");
      navigate("/login");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/admin/logout",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      // console.log("Logout response:", response.data);
      localStorage.removeItem("accessToken");
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err.response?.data || err.message);
      localStorage.removeItem("accessToken"); // Clear token on error
      navigate("/login");
    }
    
  };

  return (
    <>
      {/* Main Navbar */}
      <div className=" flex justify-between items-center px-4 py-2 md:px-10 bg-transparent">
        <Link to="/">
          <div className="h-fit w-fit shadow-[0_0_15px_5px_rgba(255,255,255,0.8)] bg-white/90 p-1  rounded-full">
            <img
              src="./logo1.png"
              alt="Logo"
              className="h-15 rounded-full bg-white"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-row items-center gap-10">
          <li>
            <Link to="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-orange-500 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="hover:text-orange-500 transition-colors"
            >
              Courses
            </Link>
          </li>
        </ul>
      
        {location.pathname === "/login" && (
          <button
           className="h-fit px-5 py-1 rounded-full bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 text-white drop-shadow-sm drop-shadow-white"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        )}
        {location.pathname === "/" && !isLoggedIn && (
          <button
           className="h-fit px-5 py-1 rounded-full bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 text-white drop-shadow-sm drop-shadow-white"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
        {isLoggedIn && location.pathname !== "/login" && (
          <button
           className="h-fit px-5 py-1 rounded-full bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 text-white drop-shadow-sm drop-shadow-white"
            onClick={logout}
          >
            Logout
          </button>
        )}

      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div
        className={`md:hidden fixed  left-0 right-0 bg-white/20  py-2 px-3 backdrop-blur-sm z-50 rounded-full w-[90vw] mx-auto ${
          scrollDirection === "down" ? "-bottom-20" : "bottom-0"
        } transition-transform duration-300 ease-in-out}`}
      >
        <ul className="flex justify-around items-center">
          <li>
            <Link
              to="/about"
              className="flex flex-col items-center "
              title="About"
            >
              <img
                src="./md.gif"
                alt=""
                className="h-10 rounded-full p-1  bg-white"
              />
            </Link>
          </li>
          <li>
            <Link to="/" className="flex flex-col items-center" title="Home">
              <img
                src="./Bank.gif"
                alt=""
                className="h-10 rounded-full p-1 bg-white"
              />
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="flex flex-col items-center"
              title="Contact"
            >
              <img
                src="./Book.gif"
                alt=""
                className="h-10 rounded-full p-1 bg-white"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
