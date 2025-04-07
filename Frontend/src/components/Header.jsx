import { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/img/logo/logo_01.png";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";

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
      path: "/contact" 
    },
  ];

  return (
    <header className="fixed w-full top-0 bg-white shadow-md z-50 border-b-4 border-transparent transition-all duration-300 before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-500 hover:before:w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={logo1}
            alt="EWC Infratech"
            className="h-20 w-auto"
            // style={{ animation: "spin 7s linear infinite" }}
          />
          <div className="-translate-x-4">
            <p className="text-[25px] ">Infratech Pvt. Ltd.</p>
            <p className="text-sm text-[#151572] font-[cursive]" >
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
                  to={item.path}
                  className="text-gray-800 text-[20px] font-bold hover:text-gray-600 transition relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-orange-500 before:transition-all before:duration-300 group-hover:before:w-full"
                >
                  {item.name}
                </Link>
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
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="flex gap-1 items-center bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-500 transition"
          >
            <FaPhoneAlt className="text-white"></FaPhoneAlt>
            Call Us
          </Link>
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
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMobileMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/">
            <img src={logo1} alt="NIA Construction" className="h-10 w-auto" />
          </Link>
          <button className="text-gray-600 text-xl" onClick={toggleMobileMenu}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block text-gray-800 text-lg font-medium"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={sub.path}
                          className="block text-gray-600 hover:text-gray-800"
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
      </div>
    </header>
  );
};

export default Header;
