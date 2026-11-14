import { useState } from "react";
import "./navbar.css";

function Navbar({ cartCount, onCartClick }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        
        <nav className="navbar">
            <div className="nav-action">
                <button
                    className="hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "≡" : "≡"}
                </button>
            </div>

                <h2>ONLINE STORE</h2>

            <ul className={isOpen ? "nav-links active" : "nav-links"}>
                <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="#shop" onClick={() => setIsOpen(false)}>Shop</a></li>
                <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>

            <button className="cart-button" onClick={onCartClick} >Cart ({cartCount})</button>



        </nav>
    )
}

export default Navbar;