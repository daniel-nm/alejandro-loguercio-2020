import React, { useState } from 'react';
import { Link } from "react-router-dom";

// Styles
import { Nav } from "../styles/components/headerStyles";

// Motion
import { transition } from "../animation/header";

const Header = () => {

  // Toggle navigation menu
  const [toggleMenu, setToggleMenu] = useState(false);

  // Disable Menu button
  const [disabled, setDisabled] = useState(false);

  // Disable menu button during 1.5s to prevent button spamming and performance issues with navigation
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  }

  return (
    <Nav
      initial={{y: -70, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={transition}
    >
      {/* Logo */}
      <Link className="logo" to="/">Alejandro Loguercio</Link>
      {/* Menu button */}
      <button
        aria-label="Menu"
        className="nav__btn"
        disabled={disabled}
        onClick={() => {
          setToggleMenu(!toggleMenu);
          disableMenu();
        }}
      >
        <span className={toggleMenu ? "rotated rotated--top" : "rotated--no"}></span>
        <span className={toggleMenu ? "rotated rotated--bottom" : "rotated--no"}></span>
      </button>
    </Nav>
  )
}

export default Header
