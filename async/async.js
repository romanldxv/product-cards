let allUserCardLength;
changeVisibilityHTMLText('loading-text', true);

async function loadUsers() {
  try {
    if (localStorage.getItem('users') === null) {
      changeVisibilityHTMLText('loading-text', true);

      await new Promise(resolve => setTimeout(resolve, 1000));

      const responce = await fetch("./users.json");
      const users = await responce.json();

      allUserCardLength = users.length;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('allUserCardLength', JSON.stringify(allUserCardLength));
    }
  } catch (error) {
    console.log(`Ошибка при загрузке: ${ error }`);

    changeVisibilityHTMLText('loading-text', false);
    changeVisibilityHTMLText('loading-error-text', true);
  }
}

setTimeout(() => {
    loadUsers().then(() => {
      renderCards(JSON.parse(localStorage.getItem('users')));
      showControlButtons();
    })
}, 1000)


function renderCards(cards) {
  changeVisibilityHTMLText('loading-text', false);
  
  const userCardListItems = document.querySelectorAll('.user-card-list li');
  userCardListItems.forEach(listItem => listItem.remove());

  if (cards.length > 0) {
    const userCardTemplate = document.getElementById('user-card-template');
    const userCardList = document.querySelector('.user-card-list');

    cards.forEach(card => {
      const cardClone = userCardTemplate.content.cloneNode(true);

      cardClone.querySelector('.user-card-photo').src = `../img/${ card.imageName }.png`;
      cardClone.querySelector('#user-card-id').textContent = `id: ${ card.id }`;
      cardClone.querySelector('#user-card-fullname').textContent = `${ card.name } ${ card.surname }`;
      cardClone.querySelector('#user-card-email').textContent = card.email;
      cardClone.querySelector('#user-card-age').textContent = `${ card.age } лет`;

      userCardList.appendChild(cardClone);
    });
  }
}

function showControlButtons() {
  const deleteAllUserCardsButton = document.getElementById('delete-all-user-cards-btn');
  const deleteUserCardButton = document.getElementById('delete-user-card-btn');
  const getAllUserCardsButton = document.getElementById('get-all-user-cards-btn');

  deleteAllUserCardsButton.addEventListener('click', () => {
    handleDeleteAllUserCards();
  })

  deleteUserCardButton.addEventListener('click', () => {
    handleDeleteUserCard();
  })

  getAllUserCardsButton.addEventListener('click', () => {
    handleGetAllUserCards();
  })
}

function handleDeleteAllUserCards() {
  if (localStorage.getItem('users') === null) {
    alert("Вы уже удалили всех пользователей!");
    return;
  }

  clearAllUserCards();
}

function handleDeleteUserCard() {
  const currentUserCards = JSON.parse(localStorage.getItem('users'));

  if (currentUserCards === null || currentUserCards.length === 0) {
    alert('Здесь нет ни одного пользователя!');
    return;
  }
  const idUserCardForRemove = prompt("Введите ID пользователя для удаления");
  allUserCardLength = JSON.parse(localStorage.getItem('allUserCardLength'));

  if (idUserCardForRemove > 0 && idUserCardForRemove <= allUserCardLength) {
    const newUserCards = currentUserCards.filter(userCard => userCard.id != idUserCardForRemove);

    localStorage.setItem('users', JSON.stringify(newUserCards));
    renderCards(newUserCards);
  } else {
    alert('Введите корректный ID пользователя!');
  }
}

function handleGetAllUserCards() {
  const currentUserCards = JSON.parse(localStorage.getItem('users'));

  if (currentUserCards === null) {
    localStorage.removeItem('users');
    loadUsers().then(() => {
      renderCards(JSON.parse(localStorage.getItem('users')));
    })
    return;
  }

  allUserCardLength = JSON.parse(localStorage.getItem('allUserCardLength'));

  if (currentUserCards.length === allUserCardLength) {
    alert("У вас и так отображены все пользователи!");
    return;
  }

  clearAllUserCards();
  loadUsers().then(() => {
    renderCards(JSON.parse(localStorage.getItem('users')));
  })
}

function changeVisibilityHTMLText(textSelector, shouldVisible) {
  const text = document.querySelector(`.${ textSelector }`);

  shouldVisible ? text.classList.add(`${ textSelector }-showed`) : text.classList.remove(`${ textSelector }-showed`);
}

function clearAllUserCards() {
  localStorage.removeItem('users');
  renderCards([]);
}