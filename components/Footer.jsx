
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Cake Shop. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/categories">Categories</a>
        <a href="/cake">Cake Details</a>
        <a href="/cart">Cart</a>
        <a href="/about">About Us</a>
      </div>
    </footer>
  );
}

export default Footer;
