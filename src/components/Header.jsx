import { Link } from "gatsby";
import React, { useState } from "react";

export default function Header() {
  const [mobileNavShow, setMobileNavShow] = useState(false);

  function handleMobileNavClick() {
    setMobileNavShow((prev) => !prev);
  }
  return (
    <div
      id="navigation"
      className={`inner-nav show-content ${mobileNavShow && "open-nav"}`}
    >
      <div className="row">
        <div className="medium-2 columns">
          <img className="logo" alt="logo" src={"/img/logo2.png"} />
        </div>

        <div className="medium-10 columns text-right">
          <ul id="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a
                className="smooth-scroll"
                href="https://tucia.com/af/auneil"
                rel="nofollow"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="smooth-scroll"
                href="https://tucia.com/af/auneil"
                rel="nofollow"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="smooth-scroll"
                href="https://tucia.com/af/auneil"
                rel="nofollow"
              >
                Services
              </a>
            </li>
            <li>
              <Link className="smooth-scroll" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <a
                className="smooth-scroll"
                href="https://tucia.com/af/auneil"
                rel="nofollow"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="smooth-scroll"
                href="https://tucia.com/af/auneil"
                rel="nofollow"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div
          className="mobile-toggle text-white"
          onClick={handleMobileNavClick}
        >
          <i className="icon icon_menu-square_alt2"></i>
        </div>
      </div>
    </div>
  );
}
