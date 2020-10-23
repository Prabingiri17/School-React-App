import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

function Navbar() {
  //    using state to handle the hamburger menu
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="NavbarItems">
      {/* creating hamburger menu hereunder */}
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a
                className={item.cName}
                href={item.url}
                onClick={closeMobileMenu}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
