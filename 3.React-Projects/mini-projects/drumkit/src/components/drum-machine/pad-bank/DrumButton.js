import React, { Component } from "react";

class DrumButton extends Component {
  constructor(props) {
    super(props);

    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound(e) {
    const sound = document.getElementById(this.props.keyTrigger);

    this.props.updateDisplaySoundFileName(this.props.soundId);
    sound.volume = this.props.audioVolume;
    sound.currentTime = 0;
    sound.play();
  }

  render() {
    var myClasses = "drum-button " + this.props.id;
    return (
      <div>
        <div
          id={this.props.soundId}
          onClick={this.playSound}
          className={myClasses}
        >
          <p>{this.props.keyTrigger}</p>
          <audio
            id={this.props.keyTrigger}
            src={this.props.source}
            onKeyPress={this.handleKeyPress}
          ></audio>
        </div>
      </div>
    );
  }
}
export default DrumButton;
