import React, { useState } from 'react';
import logo from '../assets/Logo .svg';
import burger from '../assets/hamburger.svg';
import basket from '../assets/Basket.svg';

function Header({ onHomeClick, onReservationsClick }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <header>
        <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
            <img src={burger} alt="Menu" className="hamburger-icon"/>
        </button>

        <img src = {logo} alt = "logo"></img>
        <img src = {basket} alt = "basket"></img>
        
        <div className={`mobile-menu-container ${isOpen ? 'open' : ''}`}>
            <div className="mobile-menu">
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                    &times;
                </button>
          
                <nav>
                    <a href="/" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="" onClick={() => setIsOpen(false)}>About</a>
                    <a href="" onClick={() => setIsOpen(false)}>Menu</a>
                    <a href="" onClick={() => setIsOpen(false)}>Reservations</a>
                    <a href="" onClick={() => setIsOpen(false)}>Order Online</a>
                    <a href="" onClick={() => setIsOpen(false)}>Login</a>
                </nav>
            </div>
      </div>
    </header>
  );
}

export default Header;