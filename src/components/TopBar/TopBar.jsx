import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';

function TopBar() {
  const [darkMode, setDarkMode] = useDarkMode();
  const handleMode = () => setDarkMode(!darkMode);
  return (
    <div className="mx-14 pl-12 mt-3">
      <span onClick={handleMode}>
        {darkMode ? (
          <FaSun size="24" className="top-navigation-icon" />
        ) : (
          <FaMoon size="24" className="top-navigation-icon" />
        )}
      </span>
    </div>
  )
}

export default TopBar
