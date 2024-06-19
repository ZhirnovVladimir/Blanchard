new Accordion('.hero__accordion');

new Accordion('.catalog__accordion');

const GalerySwiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: false,
  keyboard: {
    enabled: false,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.galery__swiper-button-next',
    prevEl: '.galery__swiper-button-prev',
  },
  pagination: {
    el: '.galery__swiper-pagination',
    type: 'fraction',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 44,
    },
    581: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
  }
});



const EventsSwiper = new Swiper('.events__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  observer: true,
  loop: false,
  keyboard: {
    enabled: false,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: false,
    prevEl: false,
  },
  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  breakpoints: {
    1336: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      loop: true,
      observer: true,
      navigation: {
        nextEl: '.events__swiper-button-next',
        prevEl: false,
      },
    },
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      observer: true,
    },
    944: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 25,
      observer: true,
    },
    581: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      observer: true,
    },
  }
});


const ProjectsSwiper = new Swiper('.projects__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  loop: false,
  keyboard: {
    enabled: false,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
  pagination: false,
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  breakpoints: {

    1601: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1376: {
      spaceBetween: 30,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1336: {
      spaceBetween: 10,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1302: {
      spaceBetween: 10,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    936: {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    581: {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },


  }
});

const element = document.querySelector('.select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});

let modalBtn = document.querySelectorAll('.shadow-window-btn');
let modalWindow = document.querySelectorAll('.modal');
let bod = document.body;
let modalClose = document.querySelectorAll('.modal-btn-close');
let modalContent = document.querySelectorAll('.modal-content');


modalBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    modalWindow.forEach(function (element) { element.classList.remove('modal-active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('modal-active');
    bod.classList.add('body-overflow');
  });
});

modalClose.forEach(function (elem) {
  elem.addEventListener('click', function (e) {
    modalWindow.forEach(function (element) {
      element.classList.remove('modal-active')
    });
    bod.classList.remove('body-overflow');
  })
});

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) { // код клавиши Escape
    modalWindow.forEach(function (element) {
      element.classList.remove('modal-active')
    });
    bod.classList.remove('body-overflow');
  }
});



let catalogBtn = document.querySelectorAll('.drop-down-item-link');
let catalogBlog = document.querySelectorAll('.catalog__main-blog-descr');


catalogBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const pathcatalog = e.currentTarget.dataset.pathcatalog;

    catalogBlog.forEach(function (element) { element.classList.remove('catalog__main-blog-descr--active') });
    document.querySelector(`[data-catalog="${pathcatalog}"]`).classList.add('catalog__main-blog-descr--active');
  });
});

tippy('.first-tooltip', {
  content: 'Пример современных тенденций — современная методология разработки',
  offset: [0, 11],
  trigger: "click",
  hideOnClick: true,
  theme: '#424242',
});

tippy('.second-tooltip', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  offset: [0, 11],
  trigger: "click",
  hideOnClick: true,
  theme: '#424242',
});

tippy('.third-tooltip', {
  content: 'В стремлении повысить качество',
  offset: [0, 11],
  trigger: "click",
  hideOnClick: true,
  theme: '#424242',
});


const form = document.querySelector('.contacts__form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);


const validation = new JustValidate('.contacts__form');

validation

  .addField('.name', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели имя'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя не может быть короче 2 символов'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя не может быть длиннее 30 символов'
    },
    {
      rule: 'customRegexp',
      value: /[а-яА-я]/gi,
      errorMessage: 'Недопустимый формат'
    }
  ])
  .addField('.tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели телефон',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'https://postman-echo.com/post');
    xhr.send(formData);

    event.target.reset();
  });


ymaps.ready(init);
function init() {

  // Создание карты.
  var myMap = new ymaps.Map("map1", {
    center: [55.758468, 37.601088],
    zoom: 14,
    controls: ['geolocationControl']
  }, {
    geolocationControlFloat: 'right',
    zoomControlSize: 'small',
  });

  myMap.controls.remove('geolocationControl');

  myMap.controls.add('geolocationControl', {
    size: 'small',
    float: 'none',
    position: {
      top: '335px',
      right: '10px'
    }
  });


  myMap.controls.add('zoomControl', {
    size: 'small',
    float: 'none',
    position: {
      top: '250px',
      right: '10px'
    }
  });

  myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {
    hintContent: 'Шоурум №4',
    balloonContent: 'Леонтьевский переулок, дом 5/1'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'image/location.svg',
    iconImageSize: [20, 20],
  });

  myMap.geoObjects
    .add(myPlacemark);

  myMap.behaviors.disable('scrollZoom');
};


let menu = document.querySelector('.menu-burger');
let nav = document.querySelector('.header__nav-menu');
let dis = document.querySelector('.header__btn-X');
let Hlink = document.querySelectorAll('.header__link');
let SearchShow = document.querySelector('.header__search-btn');
let Hform = document.querySelector('.header__form');
let closeHform = document.querySelector('.header__search-x-btn');

menu.addEventListener('click', function () {
  nav.classList.add('header__nav-active');
  body.classList.add('body-overflow');
});


dis.addEventListener('click', function () {
  nav.classList.remove('header__nav-active');
  body.classList.remove('body-overflow');
});

Hlink.forEach(function (elem) {
  elem.addEventListener('click', function () {
    nav.classList.remove('header__nav-active');
    body.classList.remove('body-overflow');
  })
});

SearchShow.addEventListener('click', function () {
  Hform.classList.add('header__form-active');
});

closeHform.addEventListener('click', function () {
  Hform.classList.remove('header__form-active');
});
