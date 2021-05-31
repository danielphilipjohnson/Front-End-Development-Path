class NetflixVideo {
  constructor() {}
}
// make state like redux for PAUSED
// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const range = document.querySelector(".range");
  const timer = document.getElementById("timer");
  const video = document.getElementById("video");

  range.addEventListener("mousemove", function (e) {
    var val = this.value;
    var buf = (100 - val) / 4 + parseInt(val);

    this.style =
      "background:linear-gradient(to right, #cc181e 0%, #cc181e " +
      val +
      "%, #777 " +
      val +
      "%, #777 " +
      buf +
      "%, #444 " +
      buf +
      "%, #444 100%)";
    console.log(val);
  });

  video.addEventListener("click", function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  function progressLoop() {
    console.log(video.duration - video.currentTime);

    range.value = Math.round((video.currentTime / video.duration) * 100);
    var buf = (100 - range.value) / 4 + parseInt(range.value);

    range.style =
      "background:linear-gradient(to right, #cc181e 0%, #cc181e " +
      range.value +
      "%, #777 " +
      range.value +
      "%, #777 " +
      buf +
      "%, #444 " +
      buf +
      "%, #444 100%)";
    timer.innerHTML = Math.round(video.duration - video.currentTime);

    requestAnimationFrame(progressLoop);
  }

  progressLoop();
});
