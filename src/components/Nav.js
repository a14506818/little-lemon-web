import React from "react";
import Logo from "../assets/Logo.svg";
import "./Nav.css";
import { Link } from "react-router-dom";

const navList = [
  { name: "Home", link: "/little-lemon-web/" },
  { name: "About", link: "/little-lemon-web/About" },
  { name: "Menu", link: "/little-lemon-web/Menu" },
  { name: "Reservations", link: "/little-lemon-web/Reservations" },
  { name: "OrderOnline", link: "/little-lemon-web/OrderOnline" },
  { name: "Login", link: "/little-lemon-web/Login" },
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
