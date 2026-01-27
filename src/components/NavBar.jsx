import { HashLink } from "react-router-hash-link";
import logo from '../assets/images/h4h_logo.png'
import '../css/NavBar.css';
import { useState } from "react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
                <span className={`bar ${isOpen ? "open" : ""}`}></span>
                <span className={`bar ${isOpen ? "open" : ""}`}></span>
                <span className={`bar ${isOpen ? "open" : ""}`}></span>
            </button>
            <div className={`nav-left ${isOpen ? "open" : ""}`}>
                <ul className="nav-links">
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#prizes" onClick={closeMenu}>Prizes</a></li>
                    <li><a href="#sponsors" onClick={closeMenu}>Sponsors</a></li>
                    <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
                </ul>
            </div>
            <div className="nav-logo">
                <img src={logo} className="nav-logo-image" />
            </div>
            <div className='nav-buttons'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSc4BUL6NA27dV-VGcdm_b00_SmBY_bBUN602bRfx-E6VdvotA/viewform' className="button" target="_blank" rel="noopener noreferrer">Judge Sign Up</a>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfTwDfNLT_qFDvWyBuL4kmmLOmNJX3BgCw29D5T_NyWG6a_Aw/viewform?usp=header' className="button" target="_blank" rel="noopener noreferrer">Sign Up Now!</a>
            </div>
        </nav>
    );
}

export default NavBar;