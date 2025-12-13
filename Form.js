export class Form {
  constructor(id) {
    this.form = document.getElementById(id);
  }

  getData() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    if (this.isValid())
      return data;
    else
      alert("Введите корректные данные!")
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}