function Timer(timeElement) {
  const timeEl = timeElement || document.getElementById("time");
  let time = new Date();
  let hour = time.getHours();

  function getHour12() {
    return hour >= 13 ? hour % 12 : hour;
  }
  // future feature allow users to change it
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
  function start() {
    // generate timer initially
    generate();
    setInterval(generate, 1000);
  }

  return {
    start,
  };
}

function WeatherBackgrounds(backgroundsImgs, imageBackgroundEl) {
  let backgrounds = backgroundsImgs;
  let imageBG = imageBackgroundEl || document.getElementById("img-bg");

  function set(dayOrNight, weatherType) {
    imageBG.src = backgrounds[dayOrNight][weatherType];
  }

  return {
    set,
  };
}

function Icon(icons, weatherIconEl) {
  const weatherIcon = weatherIconEl || document.getElementById("weather-icon");

  function set(dayOrNight, weatherType) {
    weatherIcon.src = icons[dayOrNight][weatherType];
  }
  return {
    set,
  };
}

function Quotes() {
  const quotesUrl =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  function get() {
    fetch(quotesUrl)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("quotes", JSON.stringify(data));
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    return {
      quotes: [
        {
          quote:
            "Life isn’t about getting and having, it’s about giving and being.",
          author: "Kevin Kruse",
        },
        {
          quote:
            "Whatever the mind of man can conceive and believe, it can achieve.",
          author: "Napoleon Hill",
        },
        {
          quote: "Strive not to be a success, but rather to be of value.",
          author: "Albert Einstein",
        },
      ],
    };
  }
  function random() {
    if (localStorage.getItem("quotes")) {
      const { quotes } = JSON.parse(localStorage.getItem("quotes"));
      var selectedIndex = Math.floor(Math.random() * quotes.length);
      return quotes[selectedIndex];
    }
    const { quotes } = get();

    var selectedIndex = Math.floor(Math.random() * quotes.length);
    return quotes[selectedIndex];
  }

  function updateUIQuote() {
    const { quote, author } = random();
    document.getElementById("quote").textContent = quote;
    document.getElementById("author").textContent = author;
  }
  function refreshQuoteEvent() {
    const refreshBtn = document.getElementById("refresh-quote");
    refreshBtn.addEventListener("click", updateUIQuote);
  }
  refreshQuoteEvent();

  return { updateUIQuote };
}

function Weather() {
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

    function getPlace() {
      return JSON.parse(localStorage.getItem("place"));
    }

    function setPlace(city, country, loc) {
      const place = {
        city: city,
        country: country,
        loc: loc,
      };

      localStorage.setItem("place", JSON.stringify(place));
    }

    return {
      getWeather,
      setWeather,
      getPlace,
      setPlace,
      setDateRequested,
    };
  }

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

  function setWeatherUIValue(value, element) {
    element.textContent = value;
  }

  function updateWeatherStatsUI(precipProbability, humidity, windSpeed) {
    setWeatherUIValue(
      convertDecimalToPercent(precipProbability),
      document.getElementById("precip")
    );

    setWeatherUIValue(
      convertDecimalToPercent(humidity),
      document.getElementById("humidity")
    );

    setWeatherUIValue(windSpeed, document.getElementById("wind-speed"));
  }

  function updateWeatherBackground(iconName) {
    typeOfWeather(iconName, weatherBackgrounds.set);
  }
  function updateWeatherIcon(iconName) {
    typeOfWeather(iconName, weatherIcon.set);
  }

  function shouldFetch(timeNow) {
    // const timeNow = (TestDate = new Date("Jun 09, 2021 11:43:30"));
    if (localStorage.getItem("date-requested")) {
      const dateWeatherSetObj = new Date(
        localStorage.getItem("date-requested")
      );

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
    return true;
  }

  function setAllWeatherUI(cachedWeather) {
    const { icon, humidity, windSpeed, precipProbability } = cachedWeather;

    updateWeatherStatsUI(precipProbability, humidity, windSpeed);
    updateWeatherBackground(icon);
    updateWeatherIcon(icon);
  }

  function updatePlaceUI({ city, country, loc }) {
    document.getElementById("city").textContent = city;
    document.getElementById("country").textContent = country;

    cache().setPlace(city, country, loc);
  }

  async function fetchWeather(lat, long) {
    const url =
      "https://api.darksky.net/forecast/8505eecc03a14ba6fd4681b00c1587ff/" +
      lat +
      "," +
      long;

    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }
  async function fetchPlace() {
    let response = await fetch("https://ipinfo.io?token=4eab0f44feb156");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  function getWeather(lat, long) {
    const timeNow = new Date();

    if (shouldFetch(timeNow)) {
      fetchWeather(lat, long).then((data) => {
        const hourlyWeather = data.hourly.data[0];

        setAllWeatherUI(hourlyWeather);

        cache().setWeather(hourlyWeather);
        cache().setDateRequested(timeNow);
      });
    } else {
      const cachedWeather = JSON.parse(cache().getWeather());

      setAllWeatherUI(cachedWeather);
    }
  }

  function fetchData() {
    if (cache().getPlace()) {
      const place = cache().getPlace();
      const { loc } = place;
      const [lat, long] = loc.split(",");

      updatePlaceUI(place);
      getWeather(lat, long);
    } else {
      fetchPlace().then((data) => {
        const { loc } = data;
        const [lat, long] = loc.split(",");

        updatePlaceUI(data);
        getWeather(lat, long);
      });
    }
  }

  return {
    fetchData,
  };
}

Quotes().updateUIQuote();

Timer(document.getElementById("time")).start();

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

const weatherBackgrounds = WeatherBackgrounds(backgrounds);

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

Weather().fetchData();

const extraInfo = document.getElementById("extra-info");

const fetchExtraWeather = document.getElementById("fetch-extra-weather");

fetchExtraWeather.addEventListener("click", function () {
  extraInfo.classList.toggle("hidden");
});