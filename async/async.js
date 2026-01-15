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
      const deleteAllUserCardsButton = document.getElementById('delete-all-user-cards-btn');
      const getAllUserCardsButton = document.getElementById('get-all-user-cards-btn');

      deleteAllUserCardsButton.addEventListener('click', () => {
        handleDeleteAllUserCards();
      })

      getAllUserCardsButton.addEventListener('click', () => {
        handleGetAllUserCards();
      })
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

      deleteUserCardButton = cardClone.querySelector('#delete-user-card-btn');
      deleteUserCardButton.addEventListener('click', () => {
        handleDeleteUserCard(card.id);
      })

      userCardList.appendChild(cardClone);
    });
  }
}

function handleDeleteAllUserCards() {
  const currentUserCards = localStorage.getItem('users');

  if (currentUserCards === null || currentUserCards === '[]') {
    alert("Вы уже удалили всех пользователей!");
    return;
  }

  clearAllUserCards();
}

function handleDeleteUserCard(userId) {
  const currentUserCards = JSON.parse(localStorage.getItem('users'));
  const newUserCards = currentUserCards.filter(userCard => userCard.id != userId);

  localStorage.setItem('users', JSON.stringify(newUserCards));
  renderCards(newUserCards);
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