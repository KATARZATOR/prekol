import '../scss/style.scss'
import './feedback'
import './toggle-menu'
import './modal-call'
//для скрыть 1
document.addEventListener('DOMContentLoaded', function () {
  let toggleButton = document.getElementById('toggleButton')
  let brandsList = document.querySelector('.brands-list')

  toggleButton.addEventListener('click', function () {
    if (brandsList.classList.contains('limited-view')) {
      brandsList.classList.remove('limited-view')
      brandsList.classList.add('full-view')
      // toggleButton.textContent = 'Скрыть';
      toggleButton.innerHTML = `<img src="./img/readLess.svg"> Скрыть`
    } else {
      brandsList.classList.add('limited-view')
      brandsList.classList.remove('full-view')
      // toggleButton.textContent = 'Показать всё';
      toggleButton.innerHTML = `<img src="./img/readMore.svg"> Показать всё`
    }
  })
  brandsList.classList.add('limited-view')
})
//для свайпера  ---
const swiper = new Swiper('.mySwiper', {
  breakpoints: {
    220: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 1.3,
      spaceBetween: 10
    },
    380: {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
    420: {
      slidesPerView: 1.8,
      spaceBetween: 10
    },
    520: {
      slidesPerView: 2.2,
      spaceBetween: 10
    },
    580: {
      slidesPerView: 2.3,
      spaceBetween: 10
    },
    620: {
      slidesPerView: 2.5,
      spaceBetween: 10
    },
    720: {
      spaceBetween: 10,
      slidesPerView: 2.8
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  initialSlide: 0
})

//для свайпера цен
const swiper1 = new Swiper('.mySwiper-price', {
  breakpoints: {
    220: {
      slidesPerView: 1.1,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    380: {
      slidesPerView: 1.3,
      spaceBetween: 10
    },
    420: {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1.7,
      spaceBetween: 10
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    580: {
      slidesPerView: 2.1,
      spaceBetween: 10
    },
    620: {
      slidesPerView: 2.3,
      spaceBetween: 10
    },
    720: {
      spaceBetween: 10,
      slidesPerView: 2.5
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  initialSlide: 0
})
//для закрытия фидбека

document.addEventListener('DOMContentLoaded', function () {
  var toggleCheckbox = document.getElementById('toggle-checkbox')
  var menu = document.querySelector('.wrap')

  toggleCheckbox.addEventListener('change', function () {
    if (toggleCheckbox.checked) {
      menu.style.transform = 'translateX(0)'
    } else {
      menu.style.transform = 'translateX(-100%)'
    }
  })
})
document.addEventListener('DOMContentLoaded', function () {
  var toggleCheckbox = document.getElementById('toggle-checkbox')
  var menu = document.querySelector('.wrap')

  if (window.innerWidth >= 1140) {
    toggleCheckbox.checked = true
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1140) {
      toggleCheckbox.checked = true
    }
  })
})
//для скрытия 2
document.addEventListener('DOMContentLoaded', function () {
  let toggleButton = document.getElementById('toggleButton1')
  let brandsList = document.querySelector('.fix-view')

  toggleButton.addEventListener('click', function () {
    if (brandsList.classList.contains('limited-view')) {
      brandsList.classList.remove('limited-view')
      brandsList.classList.add('full-view')
      // toggleButton.textContent = 'Скрыть';
      toggleButton.innerHTML = `<img src="./img/readLess.svg"> Скрыть`
    } else {
      brandsList.classList.add('limited-view')
      brandsList.classList.remove('full-view')
      // toggleButton.textContent = 'Показать всё';
      toggleButton.innerHTML = `<img src="./img/readMore.svg"> Показать всё`
    }
  })
  brandsList.classList.add('limited-view')
})

// Для кнопки модал кол

// Для кнопки модал кол ВТОРАЯ ПОПЫТКА
document.addEventListener('DOMContentLoaded', function () {
  const callButtons = document.querySelectorAll('.call-button, .call-button1')
  const closeButton = document.querySelector('.close-call-btn')
  const modalContainer = document.querySelector('.modal-call__container')
  const overlay = document.querySelector('.overlay')

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

  closeButton.addEventListener('click', function () {
    overlay.classList.remove('show')
    modalContainer.classList.remove('show')
    setTimeout(() => {
      overlay.style.display = 'none'
      modalContainer.style.display = 'none'
    }, 300)
  })

  overlay.addEventListener('click', function () {
    overlay.classList.remove('show')
    modalContainer.classList.remove('show')
    setTimeout(() => {
      overlay.style.display = 'none'
      modalContainer.style.display = 'none'
    }, 300)
  })
})
// Для кнопки модал кол ПЕРВАЯ ПОПЫТКА

//для кнопки фидбека

document.addEventListener('DOMContentLoaded', function () {
  const feedbackContainer = document.querySelector('.feedback-container')
  const openButton = document.querySelector('.open-feedback-btn')
  const closeButton = document.querySelector('.close-feedback-btn')
  const foverlay = document.querySelector('.foverlay')

  openButton.addEventListener('click', function () {
    feedbackContainer.style.display = 'block'
    feedbackContainer.classList.add('open')
    foverlay.style.display = 'block'
    setTimeout(() => {
      foverlay.classList.add('show')
      feedbackContainer.style.right = '0'
    }, 10)
  })

  closeButton.addEventListener('click', function () {
    feedbackContainer.style.right = '-100%'
    foverlay.classList.remove('show')
    setTimeout(() => {
      feedbackContainer.style.display = 'none'
      foverlay.style.display = 'none'
    }, 300)
  })

  foverlay.addEventListener('click', function () {
    feedbackContainer.style.right = '-100%'
    foverlay.classList.remove('show')
    setTimeout(() => {
      feedbackContainer.style.display = 'none'
      foverlay.style.display = 'none'
    }, 300)
  })
})

//ДЛЯ ВТОРОЙ КНОПКИ ФИДБЕКА
document.addEventListener('DOMContentLoaded', function () {
  const feedbackContainer = document.querySelector('.feedback-container');
  const openButtons = document.querySelectorAll('.open-feedback-btn, .open-feedback-btn1'); 
  const closeButton = document.querySelector('.close-feedback-btn');
  const foverlay = document.querySelector('.foverlay');
  function openMenu() {
    feedbackContainer.style.display = 'block';
    feedbackContainer.classList.add('open');
    foverlay.style.display = 'block';
    setTimeout(() => {
      foverlay.classList.add('show');
      feedbackContainer.style.right = '0';
    }, 10);
  }
  openButtons.forEach(button => {
    button.addEventListener('click', openMenu);
  });

  closeButton.addEventListener('click', function () {
    feedbackContainer.style.right = '-100%';
    foverlay.classList.remove('show');
    setTimeout(() => {
      feedbackContainer.style.display = 'none';
      foverlay.style.display = 'none';
    }, 300);
  });

  foverlay.addEventListener('click', function () {
    feedbackContainer.style.right = '-100%';
    foverlay.classList.remove('show');
    setTimeout(() => {
      feedbackContainer.style.display = 'none';
      foverlay.style.display = 'none';
    }, 300);
  });
});

// ДЛЯ ОВЕРЛЕЯ ТОГЛ МЕНЮ
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('toggle-checkbox')
  var body = document.body

  var overlay = document.createElement('div')
  overlay.style.position = 'fixed'
  overlay.style.top = '0'
  overlay.style.left = '0'
  overlay.style.width = '100%'
  overlay.style.height = '100%'
  overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'
  overlay.style.zIndex = '500'
  overlay.style.display = 'none'
  overlay.style.transition = 'opacity 0.5s ease-in-out'

  body.appendChild(overlay)

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      overlay.style.display = 'block'
      overlay.style.opacity = '1'
    } else {
      overlay.style.opacity = '0'
      setTimeout(function () {
        overlay.style.display = 'none'
      }, 500)
    }
  })
})

//ТЕНЬ В ТОГЛМЕНЮ
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('toggle-checkbox')
  var wrap = document.querySelector('.wrap')
  var overlay = document.createElement('div')

  overlay.style.position = 'fixed'
  overlay.style.top = '0'
  overlay.style.left = '0'
  overlay.style.width = '100%'
  overlay.style.height = '100%'
  overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'
  overlay.style.zIndex = '900'
  overlay.style.display = 'none'
  overlay.style.transition = 'opacity 0.5s ease-in-out'
  document.body.appendChild(overlay)

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      overlay.style.display = 'block'
      overlay.style.opacity = '1'

      wrap.style.boxShadow = '5px 0 15px rgba(0, 0, 0, 0.5)'
    } else {
      overlay.style.opacity = '0'
      setTimeout(function () {
        overlay.style.display = 'none'
      }, 500)

      wrap.style.boxShadow = 'none'
    }
  })
})

//для работы фидбека
