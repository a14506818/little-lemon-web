import React from "react";
import Logo from "../assets/Logo.svg";
import "./Nav.css";
import { Link } from "react-router-dom";

const navList = [
  { name: "Home", link: "/" },
  { name: "About", link: "/About" },
  { name: "Menu", link: "/Menu" },
  { name: "Reservations", link: "/Reservations" },
  { name: "OrderOnline", link: "/OrderOnline" },
  { name: "Login", link: "/Login" },
];

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="Logo SVG" />
      <ul>
        {navList.map((item) => {
          return (
            <li key={item.name}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
