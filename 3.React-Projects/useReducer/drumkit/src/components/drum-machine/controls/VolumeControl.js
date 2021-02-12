import React, { Component } from "react";
import { useGlobalContext } from "../../../context/context";

const VolumeControl = () => {
  const { changeVolume } = useGlobalContext();
  return (
    <div className="sample-bank">
      <p className="sample-bank__label">Volume</p>
      <input
        type="range"
        min="1"
        max="100"
        className=""
        id="volume"
        onChange={(e) => {
          changeVolume(e.target.value / 100);
        }}
      />
    </div>
  );
};
// class VolumeControl extends Component {
//   onChange(event) {
//     this.props.changeVolume(event.target.value / 100);
//   }

//   render() {
//     return (
//       <div className="sample-bank">
//         <p className="sample-bank__label">Volume</p>
//         <input
//           type="range"
//           min="1"
//           max="100"
//           className=""
//           id="volume"
//           onChange={this.onChange.bind(this)}
//         />
//       </div>
//     );
//   }
// }

export default VolumeControl;
