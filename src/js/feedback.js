document.addEventListener('DOMContentLoaded', function () {
  const feedbackContainer = document.querySelector('.feedback-container');
  const openButton = document.querySelector('.open-feedback-btn');
  const closeButton = document.querySelector('.close-feedback-btn');
  const foverlay = document.querySelector('.foverlay');

  // Функция для закрытия модального окна
  function closeFeedback() {
    feedbackContainer.style.right = '-100%';
    foverlay.classList.remove('show');
    setTimeout(() => {
      feedbackContainer.style.display = 'none';
      foverlay.style.display = 'none';
    }, 300);
  }

  // Открытие модального окна
  openButton.addEventListener('click', function () {
    feedbackContainer.style.display = 'block';
    feedbackContainer.classList.add('open');
    foverlay.style.display = 'block';
    setTimeout(() => {
      foverlay.classList.add('show');
      feedbackContainer.style.right = '0';
    }, 10);
  });

  // Закрытие модального окна через крестик
  closeButton.addEventListener('click', function () {
    closeFeedback();
  });

  // Закрытие модального окна кликом на оверлей
  foverlay.addEventListener('click', function () {
    closeFeedback();
  });

  // Закрытие модального окна через нажатие на эск
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeFeedback();
    }
  });
});