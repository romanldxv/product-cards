// 4. Логика формы в футере

const emailForm = document.querySelector("#email-form");

emailForm.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
})

// 5. Логика формы регистрации + сохранение объекта данных с регистрации

const registrationForm = document.querySelector("#registration-form");

let registrationFormData;

registrationForm.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  if (data.userPassword === data.userPasswordConfirmation) {
    registrationFormData = { ...data, createdOn: new Date() };
    console.log(registrationFormData);
  }
  else
    alert("Регистрация отклонена. Пароли не совпадают!");
})

// 8. Управление модальным окном

const modalWindow = document.querySelector(".modal");
const openModalWindowBtn = document.querySelector(".auth-btn");
const closeModalWindowBtn = document.querySelector("#close-modal-btn");
const overlay = document.querySelector(".overlay");

function openModalWindow() {
  overlay.style.display = "block";
  modalWindow.classList.add("modal-showed");
}

function closeModalWindow() {
  overlay.style.display = "none";
  modalWindow.classList.remove("modal-showed");
}

openModalWindowBtn.addEventListener("click", () => openModalWindow());

closeModalWindowBtn.addEventListener("click", () => closeModalWindow());

// 9. Проверка введённых данных + создание currentUser

const authenticationForm = document.querySelector("#authentication-form");
let currentUser;

authenticationForm.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  if (data.userLogin === registrationFormData.userLogin && data.userPassword === registrationFormData.userPassword) {
    closeModalWindow();
    currentUser = { ...registrationFormData, lastLogin: new Date() }
    console.log(currentUser);
    alert("Вы успешно авторизировались!");
  } else
    alert("Неверный логин или пароль!");
})

