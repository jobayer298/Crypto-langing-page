import React, { useState } from "react";
import logo from "../../../public/Logo/logo.png";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // const [navbar, setNavbar] = useState(false);
  // const changeBackGround = () => {
  //   if (window.scrollY >= 70) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBackGround);
  //   const easing = [0.6, -0.05, 0.01, 0.99];
  const handleLogout = () => {
    logout()
      .then()
      .catch((err) => console.log(err));
  };
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
      <li>
        <a className="hover:text-white" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="hover:text-white" href="#top">
          Top NFT
        </a>
      </li>
      <li>
        <a className="hover:text-white" href="#creators">
          Creators
        </a>
      </li>
      <li>
        <a className="hover:text-white" href="#gallery">
          Gallery
        </a>
      </li>
      <li>
        <a className="hover:text-white" href="#collections">
          Collections
        </a>
      </li>
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
          <motion.div variants={anime}>
            <Link to="/">
              <div className="flex items-center gap-2">
                <img src={logo} alt="" />
                <h1 className="font-medium text-3xl ">Havas</h1>
              </div>
            </Link>
          </motion.div>
        </div>
        <motion.div variants={anime} className="navbar-center hidden lg:flex ">
          <ul className="menu text-[16px]  menu-horizontal px-1">{menu}</ul>
        </motion.div>
        <motion.div variants={anime} className="navbar-end gap-2">
          {/* <button className="border-2 btn-sm border-indigo-500/100 hover:bg-indigo-500/100 px-7 py-1 rounded-lg">
            Login
          </button> */}
          {user ? (
            <button
              onClick={handleLogout}
              style={{
                background:
                  "linear-gradient(130deg, #FF56F6 18.31%, #B936EE 43.26%, #3BACE2 85.44%, #406AFF 100%)",
                backdropFilter: "blur(96px)",
                boxShadow: "0px 4px 97px 0px rgba(255, 86, 246, 0.51)",
              }}
              className="btn btn-sm outline-0 border-0 text-white"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button
                style={{
                  background:
                    "linear-gradient(130deg, #FF56F6 18.31%, #B936EE 43.26%, #3BACE2 85.44%, #406AFF 100%)",
                  backdropFilter: "blur(96px)",
                  boxShadow: "0px 4px 97px 0px rgba(255, 86, 246, 0.51)",
                }}
                className="btn btn-sm outline-0 border-0 text-white"
              >
                Login
              </button>
            </Link>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
