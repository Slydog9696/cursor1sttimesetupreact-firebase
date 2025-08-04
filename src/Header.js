import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">React Firebase App</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li><a href="#home" className="header-nav-link">Home</a></li>
            <li><a href="#about" className="header-nav-link">About</a></li>
            <li><a href="#contact" className="header-nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;