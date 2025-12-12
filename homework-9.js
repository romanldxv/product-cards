import { Modal } from "./Modal.js";
import { Form } from "./Form.js";

// 4. Логика формы в футере

const emailForm = new Form("email-form");

emailForm.form.addEventListener("submit", event => {
  event.preventDefault();
  console.log(emailForm.getData());
  emailForm.reset();
})

// 5. Логика формы регистрации + сохранение объекта данных с регистрации

const registrationForm = new Form("registration-form");

let registrationFormData;

registrationForm.form.addEventListener("submit", event => {
  event.preventDefault();
  const data = registrationForm.getData();

  if (data.userPassword === data.userPasswordConfirmation && registrationForm.isValid()) {
    registrationFormData = { ...data, createdOn: new Date() };
    console.log(registrationFormData);
    registrationForm.reset();
  }
  else
    alert("Регистрация отклонена. Пароли не совпадают!");
})

// 8. Управление модальным окном -- через класс Modal

const openModalWindowBtn = document.querySelector(".auth-btn");
const closeModalWindowBtn = document.querySelector("#close-modal-btn");

const modalAuth = new Modal("modal-auth");

openModalWindowBtn.addEventListener("click", () => modalAuth.open());

closeModalWindowBtn.addEventListener("click", () => modalAuth.close());

// 9. Проверка введённых данных + создание currentUser

const authenticationForm = new Form("authentication-form");
let currentUser;

authenticationForm.form.addEventListener("submit", event => {
  event.preventDefault();
  const data = authenticationForm.getData();

  if (data.userLogin === registrationFormData.userLogin && data.userPassword === registrationFormData.userPassword && authenticationForm.isValid()) {
    modalAuth.close();
    currentUser = { ...registrationFormData, lastLogin: new Date() }
    console.log(currentUser);
    alert("Вы успешно авторизировались!");
    authenticationForm.reset();
  } else
    alert("Неверный логин или пароль!");
})

