// move data outside so others can provide it.
// with a promise

class Carousel {
  constructor() {
    this.currentItem = 0;

    this.adImage = document.getElementById("ad-image");
    this.adName = document.getElementById("ad-name");
    this.adText = document.getElementById("ad-text");
    this.adUrl = document.getElementById("ad-url");

    this.prevBtn = document.getElementById("prev-ad");
    this.nextBtn = document.getElementById("next-ad");

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

    this.nextBtn.addEventListener("click", () => {
      this.currentItem++;
      if (this.currentItem > this.ads.length - 1) {
        this.currentItem = 0;
      }
      this.showAd(this.currentItem);
    });

    this.prevBtn.addEventListener("click", () => {
      this.currentItem--;
      if (this.currentItem < 0) {
        this.currentItem = this.ads.length - 1;
      }
      this.showAd(this.currentItem);
    });
  }

  showAd() {
    const ad = this.ads[this.currentItem];
    this.adName.textContent = ad.name;
    this.adText.textContent = ad.text;
    this.adUrl.textContent = ad.url;
    this.adImage.src = ad.img;
  }
}

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const car = new Carousel();
  car.showAd();
});
