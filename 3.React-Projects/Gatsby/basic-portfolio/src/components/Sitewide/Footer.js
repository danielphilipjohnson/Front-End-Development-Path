import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    <footer id="main-footer">
      <div className="container">
        <div className="footer-top">
          <div className="sitemap">
            <p>
              <Link to="/about">About</Link>
            </p>
            <p>
              <Link to="/blogs">Blogs</Link>
            </p>
            <p>
              <a href="/contact">Contact</a>
            </p>
          </div>

          <ul className="social-icons">
            <li className="nav-item twitter">
              <a
                href="https://twitter.com/danielp_johnson"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </li>

            <li className="nav-item facebook">
              <a
                href="https://www.facebook.com/DanielPhilipJohnson"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </li>

            <li className="nav-item github">
              <a
                href="https://github.com/danielphilipjohnson/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>

            <li className="nav-item linkedin">
              <a
                href="https://www.linkedin.com/in/daniel-philip-johnson/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()}. All Rights Reserved |
            Designed and built with
            <span className="heart" role="img" aria-label="love">
              ❤️
            </span>
            by
            <a
              href="https://twitter.com/danielp_johnson"
              target="_blank"
              rel="noreferrer"
            >
              Daniel Philip Johnson
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
