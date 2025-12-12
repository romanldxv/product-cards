export class Modal {
  constructor(id) {
    this.id = id;

    this.modalWindow = document.getElementById(id);
    this.overlay = document.querySelector(".overlay");
  }

  open() {
    this.overlay.style.display = "block";
    this.modalWindow.classList.add("modal-showed");
  }

  close() {
    this.overlay.style.display = "none";
    this.modalWindow.classList.remove("modal-showed");
  }

  isOpen() {
    return this.modalWindow.classList.contains("modal-showed");
  }
}