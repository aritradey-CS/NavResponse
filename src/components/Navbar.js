import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaicons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* first logo part */}

        <div className="logo">
          <h2>
            <span>A</span>ritra's
            <br />
            <span>D</span>iary
          </h2>
        </div>

        {/* second menu part */}

        <div
          className={
            showMediaicons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/pages">Pages</NavLink>
            </li>
            <li>
              <NavLink to="/gallary">Gallary</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>

        {/* Social media links */}

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/aritra.mukhapadhyaydey/"
                target="-aritra"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/aritra_dey_cs/"
                target="-aritra"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@aritradey1411/videos"
                target="-aritra"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hambuerger menu start */}

          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaicons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      {/* <section className="hero-section">
        <p>Welcome to</p>
        <h1>Aritra's Diary</h1>
      </section> */}
    </>
  );
};

export default Navbar;
