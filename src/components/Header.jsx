import { Link } from "gatsby";
import React from "react";

export default function Header() {
  return (
    <div id="navigation" className="inner-nav show-content">
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
              <a className="smooth-scroll" href="/blog">
                Blog
              </a>
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

        <div className="mobile-toggle text-white">
          <i className="icon icon_menu-square_alt2"></i>
        </div>
      </div>
    </div>
  );
}
