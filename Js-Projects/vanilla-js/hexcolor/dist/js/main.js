var ColorHexGenerator = (function () {
  var ColorHexGenerator = {},
    colorCards,
    amountOfCardsToGenerate = 5;

  var CreateColorCards = (function () {
    var generateInnerCard = (hexValue) => {
      var innerCardElement = utils.generateElementWithClass(
        "div",
        "flex justify-between items-center"
      );

      var colorValueElement = utils.generateElementWithClass(
        "p",
        "py-2 font-bold text-gray-800",
        hexValue
      );

      var divContainerCopyElement = utils.generateElementWithClass("div", "");
      var colorCardCopyElement = utils.generateElementWithClass(
        "i",
        "far fa-copy"
      );
      // move higher
      function displayAlertBox(message) {
        var alertBox = document.getElementById("alert");
        alertBox.firstElementChild.innerHTML = message;
        alertBox.classList.remove("hidden");
        alertBox.classList.add("animate-fade-in-down");

        setTimeout(function () {
          alertBox.classList.remove("animate-fade-in-down");
          alertBox.classList.add("hidden");
        }, 3000);
      }

      divContainerCopyElement.addEventListener("click", function (e) {
        var colorTextValue = this.previousSibling.textContent;

        navigator.clipboard.writeText(colorTextValue).then(
          function () {
            var message =
              "Color <span class='font-bold'>" +
              colorTextValue +
              "</span> copied to your clipboard";
            displayAlertBox(message);
          },
          function (err) {
            var message =
              "Color <span class='font-bold'> Failed to copy to clipboard</span> copied to your clipboard";
            displayAlertBox(message);
            console.error("Async: Could not copy text: ", err);
          }
        );
      });

      divContainerCopyElement.append(colorCardCopyElement);

      innerCardElement.append(colorValueElement);
      innerCardElement.append(divContainerCopyElement);

      return innerCardElement;
    };
    var generateCardBackgroundContainer = (hexValue) => {
      var bgCardElement = utils.generateElementWithClass(
        "div",
        "bg-white md:w-40 text-center rounded-md p-2 shadow-s"
      );

      var colorCardElement = utils.generateElementWithClass(
        "div",
        " w-full md:w-36 h-44 rounded mx-auto"
      );
      colorCardElement.style.backgroundColor = hexValue;

      var innerCardElement = generateInnerCard(hexValue);

      bgCardElement.append(colorCardElement);
      bgCardElement.append(innerCardElement);

      return bgCardElement;
    };

    var generateColorCard = (hexValue, whereToAppend) => {
      var colorCardContainer = utils.generateElementWithClass(
        "div",
        "mb-4 md:mx-2 w-56"
      );

      var bgCardElement = generateCardBackgroundContainer(hexValue);

      colorCardContainer.append(bgCardElement);

      var cardsContainer = document.getElementById(whereToAppend);

      cardsContainer.append(colorCardContainer);
    };

    return {
      generateColorCard: generateColorCard,
    };
  })();

  var utils = (function () {
    var removeAllChildNodes = function (parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    };

    var generateElementWithClass = (
      elementType,
      classname,
      textContent = null
    ) => {
      var element = document.createElement(elementType);
      element.className = classname;
      if (textContent) {
        element.textContent = textContent;
      }
      return element;
    };

    return {
      removeAllChildNodes: removeAllChildNodes,
      generateElementWithClass: generateElementWithClass,
    };
  })();

  var generateHexColor = () => {
    var n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  };

  ColorHexGenerator.init = function (amountOfCards, colorCardContainerId) {
    amountOfCardsToGenerate = amountOfCards;
    colorCards = colorCardContainerId;
    this.generateMoreRandomColorCards();
  };

  ColorHexGenerator.generateRandomColorCards = function () {
    utils.removeAllChildNodes(colorCards);

    for (let i = 0; i < amountOfCardsToGenerate; i++) {
      CreateColorCards.generateColorCard(generateHexColor(), colorCards);
    }
  };

  ColorHexGenerator.generateMoreRandomColorCards = function () {
    for (let i = 0; i < amountOfCardsToGenerate; i++) {
      CreateColorCards.generateColorCard(generateHexColor(), colorCards);
    }
  };

  return ColorHexGenerator;
})();

ColorHexGenerator.init(12, "color-cards");

var button = document.getElementById("generate-more-colors");

button.addEventListener("click", function () {
  ColorHexGenerator.generateRandomColorCards();
});
