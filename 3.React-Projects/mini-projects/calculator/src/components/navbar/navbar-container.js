import React from "react";

const NavbarContainer = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Js Calculator
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a
              class="nav-link"
              href="https://codepen.io/danielphilipjohnson/pen/abdpKOv"
              target="_blank"
            >
              Codepen <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/2.Front-End-Libraries-Certification/4.%20Build%20a%20JavaScript%20Calculator"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://danielphilipjohnson.com"
              target="_blank"
            >
              Personal Website
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarContainer;
