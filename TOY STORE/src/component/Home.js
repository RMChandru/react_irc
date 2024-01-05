import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>TOYFINITY</h1>
        <p>Making every playtime moment count, with toys !</p>
       
      </header>

      <main>
        <div className="mn">
            <h2 className="head">More Than a Store, It's a Toy Wonderland!</h2>
            <button className="button"><Link to="/Menu" className="men" >Buy Now!</Link></button>
            
        </div>

      </main>

      <footer>
        <div className="footer-links">
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
