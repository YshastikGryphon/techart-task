// Выбрать элементы
const newsList = document.querySelector('.news__list');
const newsElements = document.querySelectorAll('.news__item');
const newsControls = document.querySelector('.news__controls');


// Сохраненные параметры
let currentPage = 1;
let currentPagination = 1;

// Рендер
function renderFourNewsStartingFrom(n) {
  // Проверить наличие
  function checkAndShow(e) {
    let element = document.getElementById(`news-${e}`);
    if (element !== null) {
      element.classList.add('show');
    }
  }
  let e = n * 4;

  // Очистить
  newsElements.forEach(element => {
    element.classList.remove('show');
  });

  checkAndShow(e);
  checkAndShow(e-1);
  checkAndShow(e-2);
  checkAndShow(e-3);
}

function noHighlightButton() {
  let buttons = document.querySelectorAll('.news__control-button');
  buttons.forEach(element => {
    element.classList.remove('control-here');
  });
}

// Подсчет новостей
const pagitanionMax = Math.ceil(newsElements.length / 4);
const pagitanionGroupMax = Math.ceil(pagitanionMax / 3);

// Создание блока пагинации
function createControlPanel(n) {
  // Создать элементы
  let li = document.createElement('li');
  li.classList.add('news__control');

  // Предыдущее
  let prev = document.createElement('button');
  prev.classList.add('news__control-arrow', 'btn', 'hidden');
  prev.value = 'prev';
  prev.innerHTML = '<svg width="24" height="16" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21.5523 12 22 11.5523 22 11C22 10.4477 21.5523 10 21 10L21 12ZM5.53401 10.2929C5.14349 10.6834 5.14349 11.3166 5.53401 11.7071L11.898 18.0711C12.2885 18.4616 12.9217 18.4616 13.3122 18.0711C13.7027 17.6805 13.7027 17.0474 13.3122 16.6569L7.65533 11L13.3122 5.34315C13.7027 4.95262 13.7027 4.31946 13.3122 3.92893C12.9217 3.53841 12.2885 3.53841 11.898 3.92893L5.53401 10.2929ZM21 10L6.24112 10L6.24112 12L21 12L21 10Z" fill="#841844"/></svg>';
  prev.addEventListener('click', () => {
    currentPagination -= 1;
    renderPaginationFrom(currentPagination);
    if (currentPagination <= 1) {
      prev.classList.add('hidden');
      next.classList.remove('hidden');
      renderPaginationFrom(currentPagination);
    }
  });

  // Следующее
  let next = document.createElement('button');
  next.classList.add('news__control-arrow', 'btn');
  next.value = 'next';
  next.innerHTML = ' <svg width="24" height="16" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg"><path d="M3 10C2.44772 10 2 10.4477 2 11C2 11.5523 2.44772 12 3 12L3 10ZM18.466 11.7071C18.8565 11.3166 18.8565 10.6834 18.466 10.2929L12.102 3.92893C11.7115 3.53841 11.0783 3.53841 10.6878 3.92893C10.2973 4.31946 10.2973 4.95262 10.6878 5.34315L16.3447 11L10.6878 16.6569C10.2973 17.0474 10.2973 17.6805 10.6878 18.0711C11.0783 18.4616 11.7115 18.4616 12.102 18.0711L18.466 11.7071ZM3 12L17.7589 12L17.7589 10L3 10L3 12Z" fill="#841844"/></svg> ';
  next.addEventListener('click', () => {
    currentPagination += 1;
    renderPaginationFrom(currentPagination);
    if (currentPagination >= pagitanionGroupMax) {
      next.classList.add('hidden');
      prev.classList.remove('hidden');
      renderPaginationFrom(currentPagination);
    }
  });

  newsControls.append(prev);

  // Логика кнопок
  for (let i = 1; i <= pagitanionMax; i++) {
    let button = document.createElement('button');
    button.classList.add('news__control-button', 'btn');
    button.value = i;
    button.textContent = i;
    button.addEventListener('click', () => {
      console.log(button.value);
      currentPage = button.value;
      renderFourNewsStartingFrom(currentPage);
      noHighlightButton();
      button.classList.add('control-here');
    });
    newsControls.append(button);
  }
  newsControls.append(next);
}

// Рендер блока пагинации
function renderPaginationFrom(n) {
  // Проверить наличие
  function checkAndShow(e) {
    let element = document.querySelector(`[value="${e}"]`);
    if (element !== null) {
      element.classList.add('show');
    }
  }
  let e = n * 3;
  // Очистить
  document.querySelectorAll('.news__control-button').forEach(element => {
    element.classList.remove('show');
  });

  checkAndShow(e);
  checkAndShow(e-1);
  checkAndShow(e-2);
}

// Вызов
renderFourNewsStartingFrom(currentPage);
createControlPanel(pagitanionMax);
renderPaginationFrom(currentPagination);
document.querySelector('[value="1"]').classList.add('control-here');
