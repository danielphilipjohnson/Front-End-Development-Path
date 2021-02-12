import React from "react";
import { useGlobalContext } from "./context/context";

import Display from "./components/drum-machine/display/display";
import PadBank from "./components/drum-machine/pad-bank/PadBank";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

import "./App.css";
import "./drum.css";

function App() {
  const { loading } = useGlobalContext();

  return (
    <div id="drum-machine" className="App">
      <Navbar />
      <main>
        <Sidebar />
        <div className="drumkit">
          <div className="control-panel">
            <div className="controls">
              <div className="btn-group">
                <button className="btn-drum btn-drum--active">Record</button>
                <button className="btn-drum btn-drum">Edit</button>
              </div>
              <Display />
            </div>
            <PadBank />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
