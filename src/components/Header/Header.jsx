import React, { useState } from "react";
import logo from "../../../public/Logo/logo.png";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackGround = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackGround);
//   const easing = [0.6, -0.05, 0.01, 0.99];
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  const anime = {
    hidden: {
      y: -90,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6, 
      },
    },
  };
  const [open, setOpen] = useState(false);
  const menu = (
    <>
      <li>Home</li>
      <li>Service</li>
      <li>Creators</li>
      <li>About</li>
    </>
  );
  return (
    // style={{ position: "sticky", top: 0, zIndex: 999, height: "70px" }}
    // className={navbar ? "bg-[#e91b7bf6]" : "bg-[#0C0263]"}
    <div className="bg-[#0C0263] sticky top-0 z-50">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="navbar text-white container mx-auto"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => setOpen(!open)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <Hamburger size={26} direction="right" />
            </label>
            {open && (
              <ul
                tabIndex={0}
                className="menu menu-sm gap-2 p-5 dropdown-content bg-[#0C0263] mt-3 z-[1]  shadow text-white rounded-box w-52"
              >
                {menu}
              </ul>
            )}
          </div>
          <motion.div variants={anime} className="flex items-center gap-2">
            <img src={logo} alt="" />
            <h1 className="font-medium text-3xl ">Havas</h1>
          </motion.div>
        </div>
        <motion.div variants={anime} className="navbar-center hidden lg:flex ">
          <ul className="menu text-[16px] gap-4 menu-horizontal px-1">
            {menu}
          </ul>
        </motion.div>
        <motion.div variants={anime} className="navbar-end gap-2">
          {/* <button className="border-2 btn-sm border-indigo-500/100 hover:bg-indigo-500/100 px-7 py-1 rounded-lg">
            Login
          </button> */}
          <button className="border-2 btn-sm border-indigo-500/100 hover:bg-indigo-500/100 px-7 py-1 rounded-lg">
            Sign up
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
