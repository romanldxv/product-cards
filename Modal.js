export class Modal {
  constructor(id) {
    this.modalWindow = document.getElementById(id);
    this.overlay = document.querySelector(".overlay");
  }

  open() {
    this.overlay.classList.add("overlay-showed");
    this.modalWindow.classList.add("modal-showed");
  }

  close() {
    this.overlay.classList.remove("overlay-showed");
    this.modalWindow.classList.remove("modal-showed");
  }

  isOpen() {
    return this.modalWindow.classList.contains("modal-showed");
  }
}