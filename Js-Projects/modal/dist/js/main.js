class Modal {
  constructor(modal, openModalBtn, closeModalBtn) {
    this.modal = document.getElementById(modal);

    if (this.modal) {
      this.openModalBtn = document.getElementById(openModalBtn);

      this.closeModalBtn = document.getElementById(closeModalBtn);
      this.cancelModal = document.getElementById("cancel-modal");

      this.modalToggleEvent = () => {
        this.modal.classList.toggle("hidden");
      };
      this.createEvents();
    } else {
      throw new Error(
        "Unable to find modal. Make sure you passed the correct ID for your modal"
      );
    }
  }
  createEvents() {
    if (this.openModalBtn) {
      this.openModalBtn.addEventListener("click", this.modalToggleEvent);
    } else {
      throw new Error(
        "Unable to find openModalBtn. Make sure you passed the correct ID for your openModalBtn."
      );
    }
    if (this.closeModalBtn) {
      this.closeModalBtn.addEventListener("click", this.modalToggleEvent);
    } else {
      throw new Error(
        "Unable to find closeModalBtn. Make sure you passed the correct ID for your closeModalBtn."
      );
    }
    if (this.cancelModal) {
      this.cancelModal.addEventListener("click", this.modalToggleEvent);
    }
  }
}

window.addEventListener("DOMContentLoaded", function () {
  new Modal("modal", "modal-btn", "close-modal");
});
