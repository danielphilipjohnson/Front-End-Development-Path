function TimeGenerator(timeElement) {
  // pass this in
  const timeEl = timeElement || document.getElementById("time");
  let time = new Date();
  let hour = time.getHours();

  function getHour12() {
    return hour >= 13 ? hour % 12 : hour;
  }
  function getHour24() {
    return time.getHours();
  }

  function morningOrNight() {
    return hour >= 12 ? "PM" : "AM";
  }

  function render(hour, minutes, ampm) {
    timeEl.innerHTML = `${hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    } ${ampm}`;
  }

  function generate() {
    time = new Date();
    hour = time.getHours();

    const ampm = morningOrNight();
    const minutes = time.getMinutes();

    render(getHour12(), minutes, ampm);
  }

  return {
    generate,
    getHour24,
  };
}

function generateBackground(backgroundsImgs, imageBackgroundEl) {
  let imageBG = imageBackgroundEl || document.getElementById("img-bg");
  let backgrounds = backgroundsImgs;

  function setBackground(dayOrNight, weather) {
    console.log(dayOrNight, weather);
    console.log(backgrounds[dayOrNight][weather]);
    imageBG.src = backgrounds[dayOrNight][weather];
  }

  return {
    setBackground,
  };
}

function Icon(icons) {
  const weatherIconEl = document.getElementById("weather-icon");

  function set(dayOrNight, weather) {
    weatherIconEl.src = icons[dayOrNight][weather];
  }
  return {
    set,
  };
}

const timeG = TimeGenerator(document.getElementById("time"));
timeG.generate();

// setInterval(timeG.generate, 1000);

const backgrounds = {
  day: {
    rain: "./img/day/rain.jpg",
    cloud: "./img/day/cloud.jpg",
    sun: "./img/day/sun.jpg",
    clear: "./img/day/sun.jpg",
  },
  night: {
    clear: "./img/night/night.webp",
    cloudy: "./img/night/cloudy.jpg",
  },
};

const generatedBackground = generateBackground(backgrounds);

const icons = {
  day: {
    rain: "./img/icon/day/rain.jpg",
    cloud: "./img/icon/day/cloud.jpg",
    sun: "./img/icon/day/sun.png",
    clear: "./img/icon/day/sun.png",
  },
  night: {
    clear: "./img/icon/night/clear.svg",
    cloudy: "./img/icon/night/cloudy.svg",
  },
};

const icon = Icon(icons);

function fetchWeather(lattitude, longitude) {
  // const url =
  //   "https://api.darksky.net/forecast/8505eecc03a14ba6fd4681b00c1587ff/" +
  //   lattitude +
  //   "," +
  //   longitude;

  function typeOfWeather(weatherIcon, setFunc) {
    switch (weatherIcon) {
      case "clear-night":
      case "partly-cloudy-night":
        setFunc("night", "clear");
        break;
      case "cloudy":
      case "partly-cloudy-day":
      case "wind":
      case "clear-day":
        setFunc("day", "clear");
        break;
      case "rain":
        setFunc("day", "rain");
        break;
      default:
        setFunc("day", "sun");
        break;
    }
  }

  fetch("./js/weather.json")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.hourly.data[10]);
      var d = new Date(data.hourly.data[10].time * 1000);
      // console.log(d);
      const weatherIcon = data.hourly.data[10].icon;

      typeOfWeather(weatherIcon, generatedBackground.setBackground);
      typeOfWeather(weatherIcon, icon.set);
    });
}

fetchWeather(1, 1);

// function runGeo() {
//   if ("geolocation" in navigator) {
//     /* geolocation is available */
//     function success(position) {
//       var latitude = position.coords.latitude;
//       var longitude = position.coords.longitude;

//       var url = "https://ipinfo.io/json?callback=?";

//       console.log(latitude, longitude);

//       // call weather api
//     }

//     navigator.geolocation.getCurrentPosition(success, error);

//     function error() {
//       // notifyMe('Gps is not enabled please select a location from the menu');
//     }
//   } else {
//     /* geolocation IS NOT available */
//     console.log("not enabled");
//     // edit and tell user to search for city
//     // notifyMe("Gps is not enabled please select a location from the menu");
//   }
// }

// runGeo();

const extraInfo = document.getElementById("extra-info");
console.log(extraInfo);

const fetchWeatherBtn = document.getElementById("fetch-weather");

fetchWeatherBtn.addEventListener("click", function () {
  extraInfo.classList.toggle("hidden");
});
