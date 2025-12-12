export class Form {
  constructor(id) {
    this.id = id;

    this.form = document.getElementById(id);
  }

  getData() {
    if (this.isValid()) {
      const formData = new FormData(this.form);
      const data = Object.fromEntries(formData.entries());
      return data;
    }
    else
      alert("Введите корректные данные!");
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}