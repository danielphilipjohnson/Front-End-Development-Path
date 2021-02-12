import React from "react";
import SelectSoundBank from "../drum-machine/controls/SelectSoundBank";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav-logo">
          <h1>@ DrumMachine v1</h1>
        </li>
        <li>
          <div className="mid">
            <SelectSoundBank classes="sound-select" name="sounds" id="sounds" />
            {/* <select className="sound-select" name="sounds" id="sounds">
              <option value="default">Club - Default</option>
              <option value="extra">Extra</option>
            </select> */}

            <div className="btn-drum btn-drum--sm">
              <span>130</span>
            </div>
            <div className="btn-drum btn-drum--active btn-drum--sm">
              <i className="fas fa-play"></i>
            </div>
            <div className="btn-drum btn-drum--sm">
              <i className="fas fa-circle"></i>
            </div>
          </div>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};
export default Navbar;
