document.addEventListener('DOMContentLoaded', function () {
  const callButtons = document.querySelectorAll('.call-button, .call-button1')
  const closeButton = document.querySelector('.close-call-btn')
  const modalContainer = document.querySelector('.modal-call__container')
  const overlay = document.querySelector('.overlay')

  // Функция для закрытия модального окна
  function closeModal() {
    overlay.classList.remove('show')
    modalContainer.classList.remove('show')
    setTimeout(() => {
      overlay.style.display = 'none'
      modalContainer.style.display = 'none'
    }, 300)
  }

  // Открытие модального окна
  callButtons.forEach((button) => {
    button.addEventListener('click', function () {
      overlay.style.display = 'block'
      modalContainer.style.display = 'block'
      setTimeout(() => {
        overlay.classList.add('show')
        modalContainer.classList.add('show')
      }, 10)
    })
  })

  // Закрытие модального окна по нажатию на крестик
  closeButton.addEventListener('click', function () {
    closeModal()
  })

  // Закрытие модального окна по клику на затемнённую область вокруг модального окна
  overlay.addEventListener('click', function () {
    closeModal()
  })

  // Закрытие модального окна по нажатию на эскейп
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal()
    }
  })
})
