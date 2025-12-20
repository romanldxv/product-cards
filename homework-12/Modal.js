export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose();
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose() {
    const closeButton = this.modal.querySelector('#modal-close-button')

    closeButton.addEventListener('click', () => {
      this.close();
    })

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.#callbackCloseOnOverlay);
    }
  }

  #callbackCloseOnOverlay = () => {
    this.close()
    this.overlay.removeEventListener('click', this.#callbackCloseOnOverlay)
  }
}