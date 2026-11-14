import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>FASHION STORE</h2>
                <p>Wear Your Style. Express Your Identity</p>
            </div>

            <div className="footer-links" id="contact">
                <a href="#">Home</a>
                <a href="#shop">Shop</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Fashion Store. All Right Reserved</p>
            </div>
        </footer>
    )
}

export default Footer;