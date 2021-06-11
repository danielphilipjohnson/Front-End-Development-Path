class Controls {
  constructor(controlBtns) {
    this.videoElem = null;

    if (controlBtns) {
      this.playBtn = controlBtns.playBtn;
      this.rewindBtn = controlBtns.rewindBtn;
      this.forwardBtn = controlBtns.forwardBtn;
    }
    // default buttons
    this.playBtn = document.getElementById("play-btn");
    this.rewindBtn = document.getElementById("rewind-btn");
    this.forwardBtn = document.getElementById("forward-btn");

    this.volume = new Volume();
    this.progressBar = new ProgressBar();
    this.videoTimer = new VideoTimer();

    this.progressInterval = null;
  }
  // split into seperate calls
  init(video) {
    this.videoElem = video;
    this.videoTimer._updateTimer(
      this.videoElem.duration,
      this.videoElem.currentTime
    );
    this.progressBar.init(video, this.videoTimer);
    this.volume.init(video);

    this.setupEvents();
  }

  videoEvents(onPlay, onPause) {
    if (this.videoElem.paused) {
      if (typeof onPlay == "function") onPlay();
    } else {
      if (typeof onPause == "function") onPause();
    }
  }
  setupEvents() {
    const newVideoEvent = () => {
      this.videoEvents(
        () => {
          this.playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
          this.videoElem.play();
          this.progressInterval = setInterval(this.updateUI.bind(this), 1000);
        },
        () => {
          this.playBtn.innerHTML = `<i class="fas fa-play"></i>`;
          this.videoElem.pause();
          clearInterval(this.progressInterval);
        }
      );
    };

    this.play(newVideoEvent);
    this.forward();
    this.rewind();
    this.progressChanged();
  }

  progressChanged() {
    this.progressBar.range.addEventListener("change", () => {
      this.progressBar.updateVideoProgress(
        this.progressBar.range.value,
        (range, currentVideoPlace, buf) => {
          range.style =
            "background:linear-gradient(to right, #cc181e 0%, #cc181e " +
            currentVideoPlace +
            "%, #777 " +
            currentVideoPlace +
            "%, #777 " +
            buf +
            "%, #444 " +
            buf +
            "%, #444 100%)";
        }
      );

      this.videoElem.currentTime = this.progressBar.range.value;

      this.videoTimer._updateTimer(
        this.videoElem.duration,
        this.videoElem.currentTime
      );
    });
  }

  play(playFunc) {
    this.playBtn.addEventListener("click", playFunc);

    this.videoElem.addEventListener("click", playFunc);
  }

  forward() {
    this.forwardBtn.addEventListener("click", () => {
      if (!this.videoElem.paused) {
        this.playBtn.innerHTML = `<i class="fas fa-play"></i>`;
        this.videoElem.pause();
        this.progressInterval = setInterval(this.updateUI.bind(this), 1000);
      }
      if (this.videoElem.currentTime < this.videoElem.duration) {
        const step = this.videoElem.duration / 100;

        this.videoElem.currentTime = (
          this.videoElem.currentTime + step
        ).toFixed(2);

        this.updateUI();
      }
    });
  }

  rewind() {
    this.rewindBtn.addEventListener("click", () => {
      if (!this.videoElem.paused) {
        playBtn.innerHTML = `<i class="fas fa-play"></i>`;
        this.videoElem.pause();
        this.progressInterval = setInterval(this.updateUI.bind(this), 1000);
      }
      if (this.videoElem.currentTime > 0) {
        const step = this.videoElem.duration / 100;

        this.videoElem.currentTime = (
          this.videoElem.currentTime - step
        ).toFixed(2);
        this.updateUI();
      }
    });
  }

  updateUI() {
    this.progressBar.updateCurrentValue(this.videoElem.currentTime);

    this.progressBar.updateVideoProgress(
      this.progressBar.range.value,
      (range, currentVideoPlace, buf) => {
        console.log(currentVideoPlace);
        range.style =
          "background:linear-gradient(to right, #cc181e 0%, #cc181e " +
          currentVideoPlace +
          "%, #777 " +
          currentVideoPlace +
          "%, #777 " +
          buf +
          "%, #444 " +
          buf +
          "%, #444 100%)";
      }
    );

    this.videoTimer._updateTimer(
      this.videoElem.duration,
      this.videoElem.currentTime
    );
  }
}

// allow others to change
class Volume {
  constructor() {
    this.volumeBtn = document.getElementById("volume-btn");
    this.volumeBar = document.getElementById("volume-range");
    this.volumeControl = document.querySelector(".volume-container");
    this.video = null;
  }

  init(video) {
    this.video = video;
    this.change();
    this.hoverControl();
    this.leaveControl();
    this.mute();
  }

  mute() {
    // allow others to change style
    this.volumeBtn.addEventListener("click", (e) => {
      if (this.video.volume > 0) {
        this.video.volume = 0;
        this.volumeBtn.children[0].innerHTML = `<i class="fas fa-volume-mute"></i>`;
      } else {
        this.video.volume = 1;
        this.volumeBtn.children[0].innerHTML = `<i class="fas fa-volume-up"></i>`;
      }
    });
  }

  change() {
    this.volumeBar.addEventListener("change", (e) => {
      this.video.volume = e.target.value / 100;
    });
  }

  hoverControl() {
    this.volumeBtn.addEventListener("mouseenter", () => {
      this.volumeControl.classList.remove("hidden");
    });
  }

  leaveControl() {
    this.volumeBar.addEventListener("mouseleave", () => {
      this.volumeControl.classList.add("hidden");
    });
  }
}

class VideoTimer {
  constructor(timerElem) {
    this.timer = timerElem || document.getElementById("timer");
  }
  // need to allow user some flexibility making custom
  _updateTimer(videoDuration, videoCurrentTime) {
    console.log(videoDuration);
    this.timer.textContent = Math.round(videoDuration - videoCurrentTime);
  }
}

class ProgressBar {
  constructor() {
    this.range = document.querySelector(".range");
    this.video = null;
    this.range.value = 0;
    this.range.max = video.duration;
  }
  init(videoTimer) {
    this.video = video;
    this.videoTimer = videoTimer;

    this.range.addEventListener("change", () => {
      this.updateVideoProgress(
        this.range.value,
        this.range.value,
        (range, currentVideoPlace, buf) => {
          range.style =
            "background:linear-gradient(to right, #cc181e 0%, #cc181e " +
            currentVideoPlace +
            "%, #777 " +
            currentVideoPlace +
            "%, #777 " +
            buf +
            "%, #444 " +
            buf +
            "%, #444 100%)";
        }
      );

      this.video.currentTime = this.range.value;

      if (typeof updateTime == "function")
        updateTime(this.video.duration, this.video.currentTime);
    });
  }

  updateCurrentValue(newValue) {
    this.range.value = newValue;
  }

  createVideoSliderEvent(updateTime, callback) {
    this.range.addEventListener("change", () => {
      this.updateVideoProgress(this.range.value, callback);

      this.video.currentTime = this.range.value;

      if (typeof updateTime == "function")
        updateTime(this.video.duration, this.video.currentTime);
    });
  }
  // buffering should be prop on video
  updateVideoProgress(currentVideoPlace, callback) {
    currentVideoPlace = (100 / this.video.duration) * currentVideoPlace;

    let buf = (100 - currentVideoPlace) / 4 + parseInt(currentVideoPlace);

    if (typeof callback == "function")
      callback(this.range, currentVideoPlace, buf);
  }

  updateUI() {}
}

class PlayableVideo {
  constructor(videoId) {
    this.videoElem = document.getElementById(videoId);
    this.videoElem.currentTime = 0;
  }
}

class VideoPlayer {
  constructor(playableVideo, controls) {
    this.playableVideo = playableVideo;
    this.video = playableVideo.videoElem;

    controls.init(this.video);
  }
}

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  new VideoPlayer(
    new PlayableVideo("video"),

    new Controls({
      playBtn: document.getElementById("play-btn"),
      rewindBtn: document.getElementById("rewind-btn"),
      forwardBtn: document.getElementById("forward-btn"),
    })
  );
});
