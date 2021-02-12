import React from "react";
import Controls from "../controls/Controls";
import VolumeControl from "../controls/VolumeControl";

import { useGlobalContext } from "../../../context/context";

import "./display.css";

const Display = () => {
  const { soundFileName } = useGlobalContext();
  return (
    <header id="display" className="top">
      <div className="drum-display">
        <h2 className="drum-display__title">{soundFileName}</h2>
        <img
          src="https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/2.Front-End-Libraries-Certification/3.%20Build%20a%20Drum%20Machine/src/img/waves.webp"
          alt="Logo"
        />

        <div className="sample-bank">
          <p className="sample-bank__label">Tune</p>
          <input type="range" min="1" max="100" defaultValue="50" />
        </div>

        <div className="sample-bank">
          <p className="sample-bank__label">Gain</p>
          <input type="range" min="1" max="100" defaultValue="50" />
        </div>
        <div className="sample-bank">
          <p className="sample-bank__label">Pan</p>
          <input type="range" min="1" max="100" defaultValue="50" />
        </div>

        <VolumeControl />

        <Controls />
      </div>
    </header>
  );
};

export default Display;
