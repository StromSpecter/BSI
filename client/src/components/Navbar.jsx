import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiMailFill,
  RiMenu4Fill,
  RiTiktokFill,
  RiCloseFill,
  RiArrowDownSFill,
  RiArrowUpSFill,
} from "react-icons/ri";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed z-50 w-full bg-white">
      {/* Top Section */}
      <div className="relative w-screen h-40">
        <div className="absolute top-0 w-full bg-green-700 h-14 rounded-b-3xl">
          <div className="container flex flex-col items-center justify-center w-full h-full gap-2 mx-auto text-white md:flex-row md:justify-between">
            <p className="text-xs font-medium">
              Welcome to Bank Sampah Induk Rumah Harum
            </p>
            <div className="flex flex-row items-center gap-2.5">
              <p className="text-xs font-medium">Contact Us :</p>
              <RiMailFill />
              <RiInstagramFill />
              <RiFacebookBoxFill />
              <RiTiktokFill />
            </div>
          </div>
        </div>

        {/* Navbar Menu */}
        <div className="absolute bottom-0 w-full bg-green-500 h-14">
          <div className="container flex flex-row items-center justify-end w-full h-full px-5 mx-auto md:justify-center md:px-0">
            <ul className="flex-row items-center hidden gap-4 md:flex">
              <li
                className={`text-white w-fit justify-center flex px-4 py-1 ${
                  isActive("/") ? "border-b-2 border-white" : ""
                }`}
              >
                <a href="/">Home</a>
              </li>
              <li
                className={`text-white w-fit justify-center flex px-4 py-1 ${
                  isActive("/about-us") ? "border-b-2 border-white" : ""
                }`}
              >
                <a href="/about-us">About Us</a>
              </li>

              {/* Program Dropdown */}
              <li className="relative">
                <button
                  className={`text-white flex items-center gap-1 px-4 py-1 ${
                    isActive("/program") ? "border-b-2 border-white" : ""
                  }`}
                  onClick={toggleDropdown}
                >
                  Program
                  {isDropdownOpen ? (
                    <RiArrowUpSFill className="ml-1" />
                  ) : (
                    <RiArrowDownSFill className="ml-1" />
                  )}
                </button>
                {isDropdownOpen && (
                  <ul className="absolute z-10 w-48 mt-1 text-white bg-green-600 rounded-lg shadow-lg">
                    <li className="px-4 py-2 rounded-t-lg hover:bg-green-700">
                      <a href="/program/minyak-jelantah">Minyak Jelantah</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-green-700">
                      <a href="/program/angkut-gratis">Angkut Gratis</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-green-700">
                      <a href="/program/menabung">Menabung</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-green-700">
                      <a href="/program/edukasi">Edukasi</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-green-700">
                      <a href="/program/dokumen">Dokumen</a>
                    </li>
                    <li className="px-4 py-2 rounded-b-lg hover:bg-green-700">
                      <a href="/program/industri">Industri</a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`text-white w-fit justify-center flex px-4 py-1 ${
                  isActive("/publikasi") ? "border-b-2 border-white" : ""
                }`}
              >
                <a href="/publikasi">Publikasi</a>
              </li>
            </ul>

            {/* Mobile Menu Icon */}
            <div className="flex w-10 h-10 md:hidden" onClick={toggleSidebar}>
              {isOpen ? (
                <RiCloseFill className="w-full h-full text-white" />
              ) : (
                <RiMenu4Fill className="w-full h-full text-white" />
              )}
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="fixed flex flex-row items-center justify-center h-20 bg-white border rounded-full w-60 top-16 left-10">
          <div className="w-12 h-12">
            <img
              src={logo}
              alt="logo"
              className="object-center w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <p className="text-xs font-medium text-green-400">
              Bank Sampah Induk
            </p>
            <p className="text-lg font-bold text-green-600">Rumah Harum</p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-green-500 z-40 transform mt-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-5">
          <ul className="flex flex-col items-start text-white">
            <li
              className={`py-2 px-5 w-full hover:bg-green-600 rounded-md ${
                isActive("/") ? "bg-white text-green-500" : ""
              }`}
            >
              <a href="/">Home</a>
            </li>
            <li
              className={`py-2 px-5 w-full hover:bg-green-600 rounded-md ${
                isActive("/about-us") ? "bg-white text-green-500" : ""
              }`}
            >
              <a href="/about-us">About Us</a>
            </li>

            {/* Program Dropdown in Mobile */}
            <li>
              <button
                className="flex items-center w-full gap-1 px-5 py-2 rounded-md hover:bg-green-600"
                onClick={toggleDropdown}
              >
                Program
                {isDropdownOpen ? (
                  <RiArrowUpSFill className="ml-1" />
                ) : (
                  <RiArrowDownSFill className="ml-1" />
                )}
              </button>
              {isDropdownOpen && (
                <ul className="pl-0">
                  <li className="px-5 py-2 rounded-md hover:bg-green-600">
                    <a href="/program/minyak-jelantah">Minyak Jelantah</a>
                  </li>
                  <li className="px-5 py-2 rounded-md hover:bg-green-600">
                    <a href="/program/angkut-gratis">Angkut Gratis</a>
                  </li>
                  <li className="px-5 py-2 rounded-md hover:bg-green-600">
                    <a href="/program/menabung">Menabung</a>
                  </li>
                  <li className="px-5 py-2 rounded-md hover:bg-green-600">
                    <a href="/program/edukasi">Edukasi</a>
                  </li>
                  <li className="px-5 py-2 rounded-md hover:bg-green-600">
                    <a href="/program/dokumen">Dokumen</a>
                  </li>
                  <li className="px-5 py-2 rounded-md hover:bg-green-600">
                    <a href="/program/industri">Industri</a>
                  </li>
                </ul>
              )}
            </li>

            <li
              className={`py-2 px-5 w-full hover:bg-green-600 rounded-md ${
                isActive("/publikasi") ? "bg-white text-green-500" : ""
              }`}
            >
              <a href="/publikasi">Publikasi</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
