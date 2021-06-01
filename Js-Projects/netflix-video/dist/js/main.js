class NetflixVideo {
  constructor(videoElem, timerElem, rangeElem) {
    this.video = videoElem || document.getElementById("video");

    this.timer = timerElem || document.getElementById("timer");
    this.range = rangeElem || document.querySelector(".range");

    // Set default behaviour
    this.video.currentTime = 0;
    this.range.value = 0;
    this.range.max = this.video.duration;

    this.progressInterval = null;
    this._updateTime();
    this.createVideoSliderEvent();
    this.clickVideoToPlay();
  }

  _updateTime() {
    this.timer.textContent = Math.round(
      this.video.duration - this.video.currentTime
    );
  }

  updateVideoProgress(currentTime) {
    let currentVideoPlace = currentTime;

    currentVideoPlace = (100 / this.video.duration) * currentVideoPlace;

    let buf = (100 - currentVideoPlace) / 4 + parseInt(currentVideoPlace);

    // later make away for users to add their own style functionality
    const updateProgressStyle = () => {
      this.range.style =
        "background:linear-gradient(to right, #cc181e 0%, #cc181e " +
        currentVideoPlace +
        "%, #777 " +
        currentVideoPlace +
        "%, #777 " +
        buf +
        "%, #444 " +
        buf +
        "%, #444 100%)";
    };
    // make a new function
    updateProgressStyle();
  }

  createVideoSliderEvent() {
    this.range.addEventListener("mousemove", () => {
      this.updateVideoProgress(this.range.value);

      this.video.currentTime = this.range.value;

      this._updateTime();
    });
  }

  clickVideoToPlay() {
    this.video.addEventListener("click", () => {
      if (this.video.paused) {
        this.video.play();
        this.progressInterval = setInterval(this.f.bind(this), 1000);
      } else {
        this.video.pause();

        clearInterval(this.progressInterval);
      }
    });
  }
  // play and pause btn

  // skip forward

  // skip backwards
  f() {
    this.range.value = this.video.currentTime;
    this.updateVideoProgress(this.range.value);
    this._updateTime();
  }
}
// make state like redux for PAUSED
// load initial item
window.addEventListener("DOMContentLoaded", function () {
  new NetflixVideo(
    document.getElementById("video"),
    document.getElementById("timer"),
    document.querySelector(".range")
  );
});
