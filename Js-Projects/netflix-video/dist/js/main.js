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
  constructor(rangeElem, video) {
    this.range = rangeElem || document.querySelector(".range");

    // split this into values
    this.video = video;
    this.range.value = 0;
    this.range.max = video.duration;
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
}

class PlayableVideo {
  constructor() {
    this.videoElem = document.getElementById("video");
    this.videoElem.currentTime = 0;

    this.progressInterval = null;
    this.range = null;
    this.videoTimer = null;
  }

  init(range, videoTimer) {
    this.range = range;
    console.log(this.range);
    this.videoTimer = videoTimer;
    this.clicked();
  }

  updateUI() {
    this.range.updateCurrentValue(this.videoElem.currentTime);

    // style dupication
    this.range.updateVideoProgress(
      this.range.range.value,
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

    this.videoTimer._updateTimer(
      this.videoElem.duration,
      this.videoElem.currentTime
    );
  }

  videoEvents(onPlay, onPause) {
    if (this.videoElem.paused) {
      if (typeof onPlay == "function") onPlay();
    } else {
      if (typeof onPause == "function") onPause();
    }
  }

  clicked() {
    const playBtn = document.getElementById("play-btn");
    const rewindBtn = document.getElementById("rewind-btn");
    const forwardBtn = document.getElementById("forward-btn");
    const VolumeBtn = document.getElementById("volume-btn");
    const VolumeBar = document.getElementById("volume-range");

    VolumeBar.addEventListener("change", (e) => {
      this.videoElem.volume = e.target.value / 100;
    });
    // move out
    // VolumeBtn.addEventListener("click", () => {
    //   if (this.videoElem.volume > 0) {
    //     this.videoElem.volume = 0;
    //     VolumeBtn.children[0].innerHTML = `<i class="fas fa-volume-mute"></i>`;

    //     // show mute
    //   } else {
    //     this.videoElem.volume = 1;
    //     VolumeBtn.children[0].innerHTML = `<i class="fas fa-volume-up"></i>`;
    //   }
    // });

    const newVideoEvent = () => {
      this.videoEvents(
        () => {
          playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
          this.videoElem.play();
          this.progressInterval = setInterval(this.updateUI.bind(this), 1000);
        },
        () => {
          playBtn.innerHTML = `<i class="fas fa-play"></i>`;
          this.videoElem.pause();
          clearInterval(this.progressInterval);
        }
      );
    };

    this.videoElem.addEventListener("click", newVideoEvent);

    playBtn.addEventListener("click", newVideoEvent);

    // repetitive
    forwardBtn.addEventListener("click", () => {
      if (!this.videoElem.paused) {
        playBtn.innerHTML = `<i class="fas fa-play"></i>`;
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

    rewindBtn.addEventListener("click", () => {
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
}
// buffering should be prop on video

class NetflixVideo {
  constructor(playableVideo, rangeElem, videoTimer) {
    this.playableVideo = playableVideo;
    this.video = playableVideo.videoElem;

    this.range = rangeElem || document.querySelector(".range");

    this.videoTimer = videoTimer;

    this.videoTimer._updateTimer(this.video.duration, this.video.currentTime);

    this.progressBar = new ProgressBar(rangeElem, this.video);

    this.playableVideo.init(this.progressBar, this.videoTimer);

    this.progressBar.createVideoSliderEvent(
      (videoDuration, videoCurrentTime) => {
        this.videoTimer._updateTimer(videoDuration, videoCurrentTime);
      },
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
  }
}

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  new NetflixVideo(
    new PlayableVideo(),
    document.querySelector(".range"),
    new VideoTimer()
  );
});

// once video made allow users to set controls.
