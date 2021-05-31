// select items

const img = document.getElementById("ad-image");
const name = document.getElementById("ad-name");
const text = document.getElementById("ad-text");
const url = document.getElementById("ad-url");

// improve the data

// move data outside so others can provide it.
// with a promise

// add a way to get next ad

class Carousel {
  constructor() {
    this.currentItem = 0;

    this.adImage = document.getElementById("ad-image");
    this.adName = document.getElementById("ad-name");
    this.adText = document.getElementById("ad-text");
    this.adUrl = document.getElementById("ad-url");

    this.ads = [
      {
        id: 1,
        name: "freeCodeCamp",
        logo: "<i class='fa fa-free-code-camp' aria-hidden='true'></i>",
        img: "./img/FreeCodeCampLogo.png",
        text: "Learn to code — for free. Build projects. Earn certifications.",
        url: "https://www.freecodecamp.org/",
      },
      {
        id: 2,
        name: "freeCodeCamp Youtube",
        logo: "<i class='fa fa-free-code-camp' aria-hidden='true'></i>",
        img: "./img/freeCodeCampYt.png",
        text: "Technical courses",
        url: "https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ",
      },
      {
        id: 3,
        name: "freeCodeCamp News",
        logo: "<i class='fa fa-free-code-camp' aria-hidden='true'></i>",
        img: "./img/freeCodeCampNews.png",
        text: "Keep up to date with the latest trends",
        url: "https://www.freecodecamp.org/news/",
      },
      {
        id: 4,
        name: "freeCodeCamp.org",
        logo: "<i class='fa fa-free-code-camp' aria-hidden='true'></i>",
        img: "./img/freeCodeCampTwitter.png",
        text: "Find out when we post new content by following us on twitter.",
        url: "https://twitter.com/freeCodeCamp",
      },
    ];
  }
  run() {
    const ad = this.ads[this.currentItem];
    console.log(ad);
    this.adName.textContent = ad.name;
    this.adText.textContent = ad.text;
    this.adUrl.textContent = ad.url;
    this.adImage.src = ad.img;
  }
}

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const car = new Carousel();
  car.run();
});
