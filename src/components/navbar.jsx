import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const NavbarLink = ({ text, active = false }) => {
  console.log(active);
  return (
    <div
      className={
        " h-[25px] font-normal text-lg font-header flex flex-row justify-center items-center transition-all duration-300 ease-out hover:scale-[1.2] hover:tracking-[0.2rem] " +
        (active && "active")
      }
    >
      {[...text].map((char, index) => {
        return (
          <div
            className="hover:font-bold hover:scale-[1.2] transition-all"
            key={index}
          >
            {char}
          </div>
        );
      })}
    </div>
  );
};

const Navbar = () => {
  const loc = useLocation();

  return (
    <div className="fixed top-0 left-0 w-full select-none flex justify-end items-center">
      <ul className="flex justify-between items-center p-7 gap-7 w-[25vw]">
        <li>
          <Link to="/">
            <NavbarLink text="Home" active={loc.pathname === "/"} />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <NavbarLink text="About" active={loc.pathname === "/about"} />
          </Link>
        </li>
        <li>
          <Link to="/product">
            <NavbarLink text="Product" active={loc.pathname === "/product"} />
          </Link>
        </li>
        <li>
          <Link to="/grid">
            <NavbarLink text="Grid" active={loc.pathname === "/grid"} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
