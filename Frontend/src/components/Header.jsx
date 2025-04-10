import { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/img/logo/logo_01.png";
import { FaPhone, FaPhoneAlt, FaEnvelope, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Clients",
      path: "/clients",
    },
    {
      name: "Projects",
      // path: "/projects",
      submenu: [
        { name: "OnGoing", path: "/current-projects" },
        { name: "Completed", path: "/past-projects" },
      ],
    },
    {
      name: "News & Events",
      path: "/news-events",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <header className="fixed w-full top-0 bg-white shadow-md z-50 border-b-4 border-transparent transition-all duration-300 before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-500 hover:before:w-full">
      <div className="max-w-full  px-4 md:px-6 lg:px-8 flex justify-between items-center py-2">
        {/* Logo */}
        {/* <Link to="/" className="flex items-center group">
          <img
            src={logo1}
            alt="EWC Infratech"
            className="h-20 w-auto"
          />
          <div className="-translate-x-4">
            <p className="text-[25px] ">Infratech Pvt. Ltd.</p>
            <p className="text-sm text-[#151572] font-[cursive]" >
              Building Excellence, Defining Future.
            </p>
          </div>
        </Link> */}
        <Link to="/" className="flex items-center group space-x-2">
          <img
            src={logo1}
            alt="EWC Infratech"
            className="h-16 w-auto md:h-20 transition-all duration-300"
          />
          <div className="-translate-x-2 md:-translate-x-4">
            <p className="text-lg md:text-2xl font-semibold text-black">
              Infratech Pvt. Ltd.
            </p>
            <p className="text-xs md:text-sm text-[#151572] font-[cursive]">
              Building Excellence, Defining Future.
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6 text-[18px]">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.path || "#"} // fallback if no path
                  className="flex items-center text-gray-800 text-[20px] font-bold hover:text-gray-600 transition relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300 group-hover:before:w-full"
                >
                  {item.name}
                  {item.submenu && <FaChevronDown className="ml-1 text-xs" />}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex} className="border-b last:border-none">
                        <Link
                          to={sub.path}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Call-to-Action Button */}
        {/* <div className="hidden md:block">
          <Link
            to="/contact"
            className="flex gap-1 items-center bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-500 transition"
          >
            <FaPhoneAlt className="text-white"></FaPhoneAlt>
            Call Us
          </Link>
        </div> */}
        <div className=" hidden md:flex items-center space-x-6  text-gray-700">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-blue-600" />
            <span className="text-[20px]">+91 11 4352 4767</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={toggleMobileMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out backdrop-blur-sm ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Logo and Close Button */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <Link to="/" onClick={toggleMobileMenu}>
            <img src={logo1} alt="EWC Infratech" className="h-10 w-auto" />
          </Link>
          <button
            className="text-gray-600 hover:text-gray-900 text-2xl transition"
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="p-5">
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={toggleMobileMenu}
                  className="block text-gray-700 text-lg font-semibold hover:text-orange-500 transition duration-200"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <ul className="ml-4 mt-3 space-y-2">
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={sub.path}
                          onClick={toggleMobileMenu}
                          className="block text-gray-500 text-base hover:text-gray-700 transition"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <div className="md:flex items-center space-x-6  text-gray-700">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-blue-600" />
                <span className="text-[16px]">+91 11 4352 4767</span>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
