const cardsContainer = document.getElementById("cards-container");
const currentEl = document.getElementById("current");

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

function DisplayForm(formContainer) {
  // remove duplication maybe a loop
  function bindShowEvent(btnElement) {
    // Show add container
    btnElement.addEventListener("click", () => {
      formContainer.classList.toggle("show");
    });
  }

  function bindHideEvent(btnElement) {
    // Hide add container
    btnElement.addEventListener("click", () =>
      formContainer.classList.toggle("show")
    );
  }

  return {
    bindShowEvent,
    bindHideEvent,
  };
}

function CardStorageManagement(storageKey = "cards") {
  const key = storageKey;
  // Get cards from local storage
  function getData(
    defaultCard = [
      {
        question: "Hola",
        answer: "Hello",
      },
    ]
  ) {
    const cards = JSON.parse(localStorage.getItem(key));

    return cards === null ? defaultCard : cards;
  }

  // Add card to local storage
  function setData(cards) {
    localStorage.setItem(key, JSON.stringify(cards));
    window.location.reload();
  }

  return {
    getData,
    setData,
  };
}
// propose flash card name
function Cards(cardContainerElement, cardsData) {
  let currentActiveCard = 0;

  const cardsEl = [];

  let cardsLocalData = cardsData;

  function display() {
    cardsLocalData.forEach((data, index) => createCard(data, index));
  }

  function createDOMcard(data) {
    function createCardContent(text, className = "") {
      const contentFlip = document.createElement("div");
      contentFlip.className = `${className} after:content-flip after:font-bold after:top-4 after:right-4 after:absolute after:text-gray-200 after:text-lg swap-font`;
      const innerContent = document.createElement("p");
      innerContent.textContent = text;
      contentFlip.appendChild(innerContent);
      return contentFlip;
    }
    // create div with classname

    const card = document.createElement("div");
    card.classList.add("card");
    card.style.perspective = "1000px";

    const innerCard = document.createElement("div");
    innerCard.className = `inner-card  shadow-2xl
                      rounded-md
                      h-full
                      w-full
                      relative
                      transition-transform
                      duration-300
                      ease-in
                      transform-3d`;

    const questionContent = createCardContent(
      data.question,
      "inner-card-front"
    );
    const answerContent = createCardContent(data.answer, "inner-card-back");

    innerCard.appendChild(questionContent);
    innerCard.appendChild(answerContent);

    card.appendChild(innerCard);

    return card;
  }

  // Create a single card in DOM
  function createCard(data, index) {
    const card = createDOMcard(data);
    card.classList.add("card");

    if (index === 0) {
      card.classList.add("active");
    }

    // refactor to allow for class change
    card.addEventListener("click", () => card.classList.toggle("show-answer"));

    cardsEl.push(card);

    cardsContainer.appendChild(card);

    // needs a better way to do it
    updateCurrentText();
  }

  // Show number of cards
  function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
  }

  function Events() {
    function nextBtn(element) {
      // Next button
      element.addEventListener("click", () => {
        cardsEl[currentActiveCard].className = "card left";

        currentActiveCard = currentActiveCard + 1;

        if (currentActiveCard > cardsEl.length - 1) {
          currentActiveCard = cardsEl.length - 1;
        }

        cardsEl[currentActiveCard].className = "card active";

        updateCurrentText();
      });
    }

    function prevBtn(element) {
      // Prev button
      element.addEventListener("click", () => {
        cardsEl[currentActiveCard].className = "card right";

        currentActiveCard = currentActiveCard - 1;

        if (currentActiveCard < 0) {
          currentActiveCard = 0;
        }

        cardsEl[currentActiveCard].className = "card active";

        updateCurrentText();
      });
    }

    function addCardBtn(btnElement) {
      // Add new card
      console.log(btnElement);
      btnElement.addEventListener("click", () => {
        console.log("im clickgin");
        const question = questionEl.value;
        const answer = answerEl.value;

        if (question.trim() && answer.trim()) {
          const newCard = { question, answer };

          createCard(newCard);

          questionEl.value = "";
          answerEl.value = "";
          cardContainerElement.classList.remove("show");

          cardsData.push(newCard);
          cardStorage.setData(cardsData);
        }
      });
    }

    function clearCardsBtn(element) {
      // Clear cards button
      element.addEventListener("click", () => {
        localStorage.clear();
        cardsContainer.innerHTML = "";
        window.location.reload();
      });
    }
    return {
      nextBtn,
      prevBtn,
      addCardBtn,
      clearCardsBtn,
    };
  }

  return {
    display,
    Events,
  };
}

const displayForm = DisplayForm(document.getElementById("add-container"));

displayForm.bindShowEvent(document.getElementById("add-card-form"));
displayForm.bindHideEvent(document.getElementById("hide"));

const cardStorage = CardStorageManagement();

const card = Cards(
  document.getElementById("add-container"),
  cardStorage.getData()
);

const cardEvents = card.Events();

cardEvents.nextBtn(document.getElementById("next"));
cardEvents.prevBtn(document.getElementById("prev"));
cardEvents.addCardBtn(document.getElementById("add-card"));
cardEvents.clearCardsBtn(document.getElementById("clear"));

card.display();

// make a higher function to make it easier
