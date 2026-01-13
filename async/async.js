let allUserCardLength;

async function getUsers() {
  try {
    if (localStorage.getItem('users') === null) {
      changeVisibilityLoadingText(true);

      await new Promise(resolve => setTimeout(resolve, 1000));

      const responce = await fetch("./users.json");
      const users = await responce.json();

      allUserCardLength = users.length;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('allUserCardLength', JSON.stringify(allUserCardLength));
    }
  } catch (error) {
    console.log(`Ошибка при загрузке: ${error}`);

    changeVisibilityLoadingText(false);
    changeVisibilityLoadingErrorText(true);
  }
}

setTimeout(() => {
    getUsers().then(() => {
      showUserCards();
      showControlButtons();
    })
}, 1000)


function showUserCards() {
  changeVisibilityLoadingText(false);

  const userCardTemplate = document.getElementById('user-card-template');
  const userCardList = document.querySelector('.user-card-list');

  const userCards = JSON.parse(localStorage.getItem('users'));

  if (userCards) {
    userCards.forEach(card => {
      const cardClone = userCardTemplate.content.cloneNode(true);

      cardClone.querySelector('.user-card-photo').src = `../img/${card.imageName}.png`;

      cardClone.querySelector('#user-card-id').textContent = `id: ${card.id}`;
      cardClone.querySelector('#user-card-fullname').textContent = `${card.name} ${card.surname}`;
      cardClone.querySelector('#user-card-email').textContent = card.email;
      cardClone.querySelector('#user-card-age').textContent = `${card.age} лет`;

      userCardList.appendChild(cardClone);
    });
  }
}

function showControlButtons() {
  const deleteAllUserCardsButton = document.getElementById('delete-all-user-cards-btn');
  const deleteUserCardButton = document.getElementById('delete-user-card-btn');
  const getAllUserCardsButton = document.getElementById('get-all-user-cards-btn');

  deleteAllUserCardsButton.classList.add('control-btn-showed');
  deleteUserCardButton.classList.add('control-btn-showed');
  getAllUserCardsButton.classList.add('control-btn-showed');

  let currentUserCards;
  let newUserCards;

  deleteAllUserCardsButton.addEventListener('click', () => {
    if (localStorage.getItem('users') === null) {
      alert("Вы уже удалили всех пользователей!");
      return;
    }
    localStorage.removeItem('users');
    
    removeAllUserCards();
    showUserCards();
  })

  deleteUserCardButton.addEventListener('click', () => {
    currentUserCards = JSON.parse(localStorage.getItem('users'));

    if (localStorage.getItem('users') === null || JSON.parse(localStorage.getItem('users')).length === 0) {
      alert('Здесь нет ни одного пользователя!');
      return;
    }
    idUserCardForRemove = prompt("Введите ID пользователя для удаления");

    if (idUserCardForRemove > 0 && idUserCardForRemove <= allUserCardLength) {
      
      newUserCards = currentUserCards.filter(userCard => userCard.id != idUserCardForRemove);

      localStorage.setItem('users', JSON.stringify(newUserCards));

      removeAllUserCards();
      showUserCards();
    } else {
      alert('Введите корректный ID пользователя!')
    }
  })

  getAllUserCardsButton.addEventListener('click', () => {
    if (localStorage.getItem('users')) {
      getUsers().then(() => {
        currentUserCards = JSON.parse(localStorage.getItem('users'));
        allUserCardLength = JSON.parse(localStorage.getItem('allUserCardLength'));

        if (currentUserCards.length === allUserCardLength) {
          alert("У вас и так отображены все пользователи!");
          return;
        }

        renderUsers();
      });
      return;
    }
    renderUsers();
  })
}

function changeVisibilityLoadingText(shouldVisible) {
  const loadingText = document.querySelector('.loading-text');

  shouldVisible ? loadingText.classList.remove('loading-text-hidden') : loadingText.classList.add('loading-text-hidden');
}

function changeVisibilityLoadingErrorText(shouldVisible) {
  const loadingErrorText = document.querySelector('.loading-error-text')

  shouldVisible ? loadingErrorText.classList.add('loading-error-text-showed') : loadingErrorText.classList.remove('loading-error-text-showed');
}

function removeAllUserCards() {
  const userCardListItems = document.querySelectorAll('.user-card-list li');

  userCardListItems.forEach(listItem => {
    console.log(listItem);
    listItem.remove();
  })
}

function renderUsers() {
  localStorage.removeItem('users')
  removeAllUserCards();

  getUsers().then(() => {
    showUserCards();
  })
}