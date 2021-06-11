import fetchAdsMock from "./data.js";

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const Slider = (data, containerElem) => {
  const container = containerElem;

  const createImageCard = ({ img, product, category, price }) => {
    return `
    <div class="border w-96 mb-3">
      <img src=${img} class="h-80 w-full object-cover" alt="${product}"/>
        <div class="bg-white px-6 py-4 flex justify-between">
          <div>
          <h4 class="text-blue-900 font-bold">${product}</h4>
          <p class="text-gray-400">${category}</p>
          </div>
          <p class="text-gray-700">
          ${price}</p>
        </div>
    </div>`;
  };

  const createSlider = () => {
    container.innerHTML = data
      .map((items, slideIndex) => {
        const cards = items.map((item) => {
          const { img, product, category, price } = item;
          return createImageCard({ img, product, category, price });
        });

        let position = "next";
        if (slideIndex === 0) {
          position = "active";
        }
        if (slideIndex === data.length - 1) {
          position = "last";
        }
        if (data.length <= 1) {
          position = "active";
        }
        return `
          <article class="slide  absolute top-0 left-0 w-full h-full opacity-0 transition-all ${position}">
              <div class="flex flex-col items-center md:flex-row justify-between">
                ${cards.join("")}
              </div>
          </article>`;
      })
      .join("");
  };

  return { createSlider };
};

const startSlider = (type, containerElem) => {
  // get all three slides active,last next
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");

  let next = active.nextElementSibling;
  if (!next) {
    next = containerElem.firstElementChild;
  }
  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = containerElem.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

fetchAdsMock.then((data) => {
  // if length is 1 hide buttons
  if (data.length === 1) {
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
  }

  // if length is 2, add copies of slides
  let items = [...data];
  if (data.length === 2) {
    items = [...data, ...data];
  }

  const slider = Slider(items, document.querySelector(".slide-container"));

  slider.createSlider();
});

nextBtn.addEventListener("click", () => {
  startSlider("next", document.querySelector(".slide-container"));
});
prevBtn.addEventListener("click", () => {
  startSlider("prev", document.querySelector(".slide-container"));
});
