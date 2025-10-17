import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `block pb-1 border-b-2 transition ${
      isActive
        ? `${!scrolled ? "border-white" : "border-black"} font-semibold`
        : "border-transparent hover:border-gray-300 "
    }`;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between py-3 px-10 transition-all duration-300 ${
        scrolled ? "bg-[#fdf6ea] shadow-md" : "bg-transparent text-white"
      }`}
    >
      <NavLink to="/">
        <img
          src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/lms-logo.png"
          alt="LMS Logo"
          className={`w-12 ${!scrolled && "filter brightness-0 invert"}`}
        />
      </NavLink>

      <div className="hidden md:flex space-x-6 text-sm font-medium">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about-us" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/courses" className={navLinkClass}>
          Courses
        </NavLink>
        <NavLink to="/dashboard" className={navLinkClass}>
          Dashboard
        </NavLink>
      </div>

      <div className="hidden md:flex space-x-5 text-sm font-medium">
        <NavLink to="/register" className={navLinkClass}>
          Register
        </NavLink>
        <NavLink to="/login" className={navLinkClass}>
          Login
        </NavLink>
      </div>

      <Button
        className="md:hidden  border-none"
        icon={<MenuOutlined />}
        onClick={() => setOpen(true)}
      />

      <Drawer
        title={
          <img
            src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/lms-logo.png"
            alt="LMS Logo"
            className="w-12 filter brightness-0 invert"
          />
        }
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        className="!bg-[#1e1e1e]"
      >
        <div className="flex flex-col space-y-5 text-white text-lg mt-10">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            About
          </NavLink>
          <NavLink
            to="/courses"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Courses
          </NavLink>
          <NavLink
            to="/dashboard"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/register"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            onClick={() => setOpen(false)}
            className={navLinkClass}
          >
            Login
          </NavLink>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
