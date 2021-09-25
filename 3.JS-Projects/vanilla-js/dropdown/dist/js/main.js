class DropdownMenu {
  constructor() {
    this.events = {
      SPACEBAR_KEY_CODE: [0, 32],
      ENTER_KEY_CODE: 13,
      DOWN_ARROW_KEY_CODE: 40,
      UP_ARROW_KEY_CODE: 38,
      ESCAPE_KEY_CODE: 27,
    };

    // element
    this.list = document.querySelector(".dropdown__list");
    this.listContainer = document.querySelector(".dropdown__list-container");
    this.listItems = document.querySelectorAll(".dropdown__list-item");

    this.dropdownArrow = document.querySelector(".dropdown__arrow");

    this.dropdownSelectedNode = document.querySelector("#dropdown__selected");
    // set button up first

    this.listItemIds = [];

    this.listItems.forEach((item) => this.listItemIds.push(item.id));
  }

  setUpEvents() {
    this.dropdownSelectedNode.addEventListener("click", (e) =>
      this.toggleListVisibility(e)
    );
    this.dropdownSelectedNode.addEventListener("keydown", (e) =>
      this.toggleListVisibility(e)
    );

    this.listItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        this.setSelectedListItem(e);
        this.closeList();
      });

      item.addEventListener("keydown", (e) => {
        switch (e.keyCode) {
          case this.events.ENTER_KEY_CODE:
            this.setSelectedListItem(e);
            this.closeList();
            return;

          case this.events.DOWN_ARROW_KEY_CODE:
            this.focusNextListItem(this.events.DOWN_ARROW_KEY_CODE);
            return;

          case this.events.UP_ARROW_KEY_CODE:
            this.focusNextListItem(this.events.UP_ARROW_KEY_CODE);
            return;

          case this.events.ESCAPE_KEY_CODE:
            this.closeList();
            return;

          default:
            return;
        }
      });
    });
  }

  closeList() {
    this.list.classList.remove("open");
    this.dropdownArrow.classList.remove("expanded");
    this.listContainer.setAttribute("aria-expanded", false);
  }

  setSelectedListItem(e) {
    let selectedTextToAppend = document.createTextNode(e.target.innerText);
    console.log(e.target.dataset.link);

    // add link to button

    this.dropdownSelectedNode.innerHTML = null;
    this.dropdownSelectedNode.appendChild(selectedTextToAppend);
  }

  toggleListVisibility(e) {
    // check if drop down open
    let openDropDown =
      this.events.SPACEBAR_KEY_CODE.includes(e.keyCode) ||
      e.keyCode === this.events.ENTER_KEY_CODE;

    if (e.keyCode === this.events.ESCAPE_KEY_CODE) {
      this.closeList();
    }

    if (e.type === "click" || openDropDown) {
      this.list.classList.toggle("open");
      this.dropdownArrow.classList.toggle("expanded");
      this.listContainer.setAttribute(
        "aria-expanded",
        this.list.classList.contains("open")
      );
    }

    if (e.keyCode === this.events.DOWN_ARROW_KEY_CODE) {
      this.focusNextListItem(this.events.DOWN_ARROW_KEY_CODE);
    }

    if (e.keyCode === this.events.UP_ARROW_KEY_CODE) {
      this.focusNextListItem(this.events.UP_ARROW_KEY_CODE);
    }
  }

  focusNextListItem(direction) {
    const activeElementId = document.activeElement.id;
    if (activeElementId === "dropdown__selected") {
      document.querySelector(`#${this.listItemIds[0]}`).focus();
    } else {
      const currentActiveElementIndex =
        this.listItemIds.indexOf(activeElementId);

      // event for down arrow
      if (direction === this.events.DOWN_ARROW_KEY_CODE) {
        const currentActiveElementIsNotLastItem =
          currentActiveElementIndex < this.listItemIds.length - 1;
        if (currentActiveElementIsNotLastItem) {
          const nextListItemId =
            this.listItemIds[currentActiveElementIndex + 1];
          document.querySelector(`#${nextListItemId}`).focus();
        }
        // event for arrow up
      } else if (direction === this.events.UP_ARROW_KEY_CODE) {
        const currentActiveElementIsNotFirstItem =
          currentActiveElementIndex > 0;
        if (currentActiveElementIsNotFirstItem) {
          const nextListItemId =
            this.listItemIds[currentActiveElementIndex - 1];
          document.querySelector(`#${nextListItemId}`).focus();
        }
      }
    }
  }
}

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const d = new DropdownMenu();
  d.setUpEvents();
});
