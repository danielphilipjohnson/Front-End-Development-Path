import React from "react";

const NavbarContainer = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
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
              rel="noreferrer"
            >
              Codepen <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/danielphilipjohnson/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://danielphilipjohnson.com"
              target="_blank"
              rel="noreferrer"
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
