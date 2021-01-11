import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    <footer id="main-footer">
      <div class="container">
        <div class="footer-top">
          <div class="sitemap">
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">Blog</a>
            </p>
            <p>
              <a href="#">Contact</a>
            </p>
          </div>

          <ul class="social-icons">
            <li class="nav-item twitter">
              <a href="https://twitter.com/danielp_johnson">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </li>

            <li class="nav-item facebook">
              <a href="https://www.facebook.com/DanielPhilipJohnson">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </li>

            <li class="nav-item github">
              <a href="https://github.com/danielphilipjohnson/">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>

            <li class="nav-item linkedin">
              <a href="https://www.linkedin.com/in/daniel-philip-johnson/">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p>
            Copyright &copy; 2020. All Rights Reserved | Designed and built with{" "}
            <span class="heart">❤️</span>
            by <a href="">Daniel Philip Johnson </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
