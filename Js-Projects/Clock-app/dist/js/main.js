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
    rain: "./img/icon/day/rain.svg",
    cloud: "./img/icon/day/cloud.jpg",
    sun: "./img/icon/day/sun.png",
    clear: "./img/icon/day/sun.png",
  },
  night: {
    clear: "./img/icon/night/clear.svg",
    cloudy: "./img/icon/night/cloudy.svg",
  },
};

const weatherIcon = Icon(icons);

function Weather() {
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

  function convertDecimalToPercent(decimalValue) {
    return (decimalValue * 100).toString() + "%";
  }

  function setWeatherValue(value, element) {
    element.textContent = value;
  }
  function cache() {
    function getWeather() {
      return localStorage.getItem("weather");
    }
    function setWeather(weather) {
      localStorage.setItem("weather", JSON.stringify(weather));
    }
    function setDateRequested(date) {
      localStorage.setItem("date-requested", date);
    }

    return {
      getWeather,
      setWeather,
      setDateRequested,
    };
  }

  function updateWeatherUI(precipProbability, humidity, windSpeed) {
    setWeatherValue(
      convertDecimalToPercent(precipProbability),
      document.getElementById("precip")
    );

    setWeatherValue(
      convertDecimalToPercent(humidity),
      document.getElementById("humidity")
    );

    setWeatherValue(windSpeed, document.getElementById("wind-speed"));
  }

  function updateWeatherBackground(iconName) {
    typeOfWeather(iconName, generatedBackground.setBackground);
  }
  function updateWeatherIcon(iconName) {
    typeOfWeather(iconName, weatherIcon.set);
  }

  function fetchWeather(lattitude, longitude) {
    // const url =
    //   "https://api.darksky.net/forecast/8505eecc03a14ba6fd4681b00c1587ff/" +
    //   lattitude +
    //   "," +
    //   longitude;
    const timeNow = new Date();
    if (shouldFetch(timeNow)) {
      console.log("yes");

      fetch("./js/weather.json")
        .then((response) => response.json())
        .then((data) => {
          const hourlyWeather = data.hourly.data[2];

          const { icon, humidity, windSpeed, precipProbability } =
            hourlyWeather;

          updateWeatherUI(precipProbability, humidity, windSpeed);
          updateWeatherBackground(icon);
          updateWeatherIcon(icon);

          cache().setWeather(hourlyWeather);
          cache().setDateRequested(timeNow);
        });
    }

    const cachedWeather = JSON.parse(cache().getWeather());

    const { icon, humidity, windSpeed, precipProbability } = cachedWeather;

    updateWeatherUI(precipProbability, humidity, windSpeed);
    updateWeatherBackground(icon);
    updateWeatherIcon(icon);
  }

  return {
    fetchWeather,
  };
}

Weather().fetchWeather(1, 1);

function shouldFetch(timeNow) {
  // const timeNow = (TestDate = new Date("Jun 09, 2021 11:43:30"));
  const dateWeatherSetObj = new Date(localStorage.getItem("date-requested"));

  if (timeNow.getMonth() > dateWeatherSetObj.getMonth()) {
    console.log("month higher");
    return true;
  }

  if (timeNow.getDate() > dateWeatherSetObj.getDate()) {
    console.log("date higher");
    return true;
  }

  if (timeNow.getHours() > dateWeatherSetObj.getHours()) {
    console.log("hour higher");
    return true;
  }

  return false;
}

// Wed Jun 09 2021 10:43:52 GMT+0100 (British Summer Time)
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

const fetchWeatherBtn = document.getElementById("fetch-weather");

fetchWeatherBtn.addEventListener("click", function () {
  extraInfo.classList.toggle("hidden");
});
