import React from "react";
import Img from "../assets/restauranfood.jpg";
import "./Footer.css";
import { Link } from "react-router-dom";

const navList = [
  { name: "Home", link: "/" },
  { name: "About", link: "/About" },
  { name: "Menu", link: "/Menu" },
  { name: "Reservations", link: "/Reservations" },
  { name: "OrderOnline", link: "/OrderOnline" },
  { name: "Login", link: "/Login" },
];

const Footer = () => {
  return (
    <footer>
      <img src={Img} alt="restauranfood" width="162px" height="279px" />
      <div>
        <h3>Doormat Navigations</h3>
        <ul>
          {navList.map((item) => {
            return (
              <li key={item}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li key="Adress">
            <a href="/">Adress</a>
          </li>
          <li key="Phone Number">
            <a href="/">Phone Number</a>
          </li>
          <li key="Email">
            <a href="/">Email</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <ul>
          <li key="Adress">
            <a href="/">Adress</a>
          </li>
          <li key="Phone Number">
            <a href="/">Phone Number</a>
          </li>
          <li key="Email">
            <a href="/">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
