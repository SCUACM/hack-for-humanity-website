import { HashLink } from "react-router-hash-link";
import logo from '../assets/images/h4h_logo_glowing.png'
import '../css/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#prizes">Prizes</a></li>
                    <li><a href="#sponsors">Sponsors</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </div>
            <div className="nav-logo">
                <img src={logo} className="nav-logo-image" />
            </div>
            <div className='nav-buttons'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSc4BUL6NA27dV-VGcdm_b00_SmBY_bBUN602bRfx-E6VdvotA/viewform' class="button" target="_blank" rel="">Judge Sign Up</a>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfTwDfNLT_qFDvWyBuL4kmmLOmNJX3BgCw29D5T_NyWG6a_Aw/viewform?usp=header' class="button" target="_blank" rel="noopener noreferrer">Sign Up Now!</a>
            </div>
        </nav>
    );
}

export default NavBar;