import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { FiSun } from 'react-icons/fi';
import { RiMoonLine } from 'react-icons/ri';
import { BsHouseFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavMenu = ({ darkMode, setDarkMode }) => {
  const iconSize = 30;
  const location = useLocation();
  const borderColor = '#808880';
  const themeStyle = {
    backgroundColor: darkMode ? '#181818' : '#f5f5f5',
    color: darkMode ? '#f5f5f5' : '#808880',
    borderBottom: `1px solid ${borderColor}`, 
    fontSize: '20px',
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar
      className="mt-2"
      collapseOnSelect
      expand="sm"
      style={themeStyle}
    >
      <Link to="/" style={{ textDecoration: 'none', color: borderColor }}>
        <BsHouseFill />
        {location.pathname === '/' ? '/' : '/research'}
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <div className="ml-auto">
        <Button
          onClick={toggleTheme}
          style={{
            backgroundColor: themeStyle.backgroundColor,
            color: themeStyle.color,
            border: 'none',
            padding: 0,
          }}
        >
          {darkMode ? <FiSun size={20} /> : <RiMoonLine size={20} />} 
        </Button>
      </div>
    </Navbar>
  );
};

export default NavMenu;
