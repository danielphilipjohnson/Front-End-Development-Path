import React from "react";

const Footer = () => {
  return (
    <footer className="main__footer" id="main-footer">
      <div className="container">
        <div className="main__footer__top">
          <div className="disclaimer">
            <h4>Content Disclaimer</h4>
            <p>
              {" "}
              The content of this project came from
              <a
                id="tribute-link"
                target="_blank"
                rel="noreferrer"
                href="https://en.wikipedia.org/wiki/HP_20b"
              >
                Wikipedia
              </a>
              , and
              <a href="https://support.hp.com/gb-en/product/hp-20b-business-consultant-financial-calculator/3732534">
                HP
              </a>
            </p>
          </div>

          <ul className="social-icons-footer">
            <li className="nav-item twitter">
              <a
                href="https://twitter.com/danielp_johnson"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>

            <li className="nav-item facebook">
              <a
                href="https://www.facebook.com/DanielPhilipJohnson/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>

            <li className="nav-item github">
              <a
                href="https://github.com/danielphilipjohnson/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>

            <li className="nav-item linkedin">
              <a
                href="https://www.linkedin.com/in/daniel-philip-johnson/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="main__footer__bottom">
          <p>
            Copyright &copy; 2020. All Rights Reserved | Designed and built with{" "}
            <span className="heart">❤️</span>
            by{" "}
            <a href="https://danielphilipjohnson.com">Daniel Philip Johnson </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
